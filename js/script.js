document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");
    let hasAnimated = false;

    const startCounting = () => {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            const speed = 3000;

            const updateCount = () => {
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };

            updateCount();
        });
    };
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    startCounting();
                    hasAnimated = true;
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    const section = document.querySelector(".counter-section");
    observer.observe(section);

});


const swiper = new Swiper(".instructorSwiper", {
    allowTouchMove: false, 
    autoHeight: true
});




const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.slideTo(index);

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});


const course = new Swiper(".courseSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        },
    },
});
document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(".tab-btn.active").classList.remove("active");
        btn.classList.add("active");
        swiper.slideTo(btn.dataset.slide);
    });
});

