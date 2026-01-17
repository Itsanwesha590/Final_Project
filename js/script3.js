const imgSwip = new Swiper(".imageSwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".teacherSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: { slidesPerView: 4},
      992: {slidesPerView:3},
      768: { slidesPerView: 2},
      576: { slidesPerView: 1 },
    }
  });
});
