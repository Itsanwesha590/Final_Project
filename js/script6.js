var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
            slidesPerView: 5
        },
        992: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 3
        },
        576: {
            slidesPerView: 2
        },
        0: {
            slidesPerView: 1
        }
    }
});