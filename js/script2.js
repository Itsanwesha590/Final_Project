new Swiper(".academicSwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        }
    });

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



document.addEventListener("DOMContentLoaded", function () {
    const clickswiper = new Swiper(".testimonialSwiper", {
        slidesPerView:1,
        loop: true,
        speed: 600,
        navigation: {
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
        },
    });
});

/*==================================
VIDEO PLAY BTN 
====================================
*/

const videoBtn = document.getElementById("videoBtn");
const playIcon = document.getElementById("playIcon");

let isPlaying = false;

videoBtn.addEventListener("click", () => {
    videoBtn.classList.toggle("active"); // 🔥 REQUIRED

    if (!isPlaying) {
        playIcon.innerHTML = `
            <rect x="5" y="4" width="5" height="19" rx="1" fill="#AB0C2F"/>
            <rect x="15" y="4" width="5" height="19" rx="1" fill="#AB0C2F"/>
        `;
    } else {
        playIcon.innerHTML = `
            <path d="M0 10.1243V16.1258C0 21.8231 0 24.6716 1.7091 25.8233C3.41812 26.9745 5.7555 25.7006 10.4306 23.1529L15.9364 20.1518C21.5621 17.0858 24.375 15.5528 24.375 13.125C24.375 10.6973 21.5621 9.16425 15.9364 6.09825L10.4306 3.09728C5.7555 0.549378 3.41812 -0.724572 1.7091 0.426828C0 1.57823 0 4.42688 0 10.1243Z" fill="#AB0C2F"/>
        `;
    }

    isPlaying = !isPlaying;
});

/*====================================
FORM VALIDATION
======================================
*/
document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (!email.value.match(emailPattern)) {
      email.classList.add("is-invalid");
      email.focus();
      return;
    } else {
      email.classList.remove("is-invalid");
    }

    
    if (password.value.length < 6) {
      password.classList.add("is-invalid");
      password.focus();
      return;
    } else {
      password.classList.remove("is-invalid");
    }

    alert("✅ Login form validated successfully!");
  });

  document.getElementById("togglePassword").addEventListener("click", function () {
    const password = document.getElementById("password");
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  });

  