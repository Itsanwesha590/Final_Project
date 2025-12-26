document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");
    const section = document.querySelector(".counter-section");
    let hasAnimated = false;

    const startCounting = () => {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            const speed = 200;

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

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                startCounting();
                hasAnimated = true;
                observer.unobserve(section);
            }
        });
    }, { threshold: 0.5 });

    if (section) observer.observe(section);

    AOS.init({
        once: false,
    }
    );

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
        }
    });

});



