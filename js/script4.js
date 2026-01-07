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

// TAB CLICK → MOVE SLIDE
document.querySelectorAll(".tab-btn").forEach((tab) => {
    tab.addEventListener("click", () => {
        const index = Number(tab.dataset.slide);

        swiper.slideTo(index);

        document.querySelector(".tab-btn.active").classList.remove("active");
        tab.classList.add("active");
    });
});
