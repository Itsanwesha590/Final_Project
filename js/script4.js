const swiper = new Swiper(".courseSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    allowTouchMove: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        },
    },
});

// TAB CLICK -> MOVE SLIDE
document.querySelectorAll(".tab-btn").forEach((tab) => {
    tab.addEventListener("click", () => {
        const index = Number(tab.dataset.slide);

        swiper.slideTo(index);

        document.querySelector(".tab-btn.active").classList.remove("active");
        tab.classList.add("active");
    });
});

const viewBtns = document.querySelectorAll(".view-btn");
const courseGrid = document.getElementById("courseGrid");

viewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        viewBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (btn.dataset.view === "list") {
            courseGrid.classList.add("list-view");
        } else {
            courseGrid.classList.remove("list-view");
        }
    });
});

