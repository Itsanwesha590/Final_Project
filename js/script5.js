var academic = new Swiper(".academicSwiper", {
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




/*==================================
VIDEO PLAY BTN 
====================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const videoBtn = document.getElementById("videoBtn");
    const playIcon = document.getElementById("playIcon");

    let isPlaying = false;

    if (!videoBtn || !playIcon) {
        console.error("Video button or icon not found");
        return;
    }

    videoBtn.addEventListener("click", () => {
        videoBtn.classList.toggle("active");

        playIcon.innerHTML = "";

        if (!isPlaying) {
            playIcon.innerHTML = `
                <rect x="5" y="4" width="5" height="19" rx="1" fill="#AB0C2F"/>
                <rect x="15" y="4" width="5" height="19" rx="1" fill="#AB0C2F"/>
            `;
        } else {
            playIcon.innerHTML = `
                <path d="M0 10.1243V16.1258C0 21.8231 0 24.6716 1.7091 25.8233C3.41812 26.9745 5.7555 25.7006 10.4306 23.1529L15.9364 20.1518C21.5621 17.0858 24.375 15.5528 24.375 13.125C24.375 10.6973 21.5621 9.16425 15.9364 6.09825L10.4306 3.09728C5.7555 0.549378 3.41812 -0.724572 1.7091 0.426828C0 1.57823 0 4.42688 0 10.1243Z"
                      fill="#AB0C2F"/>
            `;
        }

        isPlaying = !isPlaying;
    });
});
