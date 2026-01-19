document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab-btn");

    const blogcard = new Swiper(".blogSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 600,
        autoHeight: true,
        allowTouchMove: true,

        pagination: {
            el: ".blog-pagination",
            clickable: true,
            type: "bullets"
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const index = tab.getAttribute("data-slide");

            
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

           
            blogcard.slideTo(index);
        });
    });

    // Optional: swipe → update tab
    blogcard.on("slideChange", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tabs[blogcard.activeIndex].classList.add("active");
    });

    const dropdown = document.querySelector('.tab-dropdown');
    const blogs = document.querySelectorAll('.tab-btn');

    dropdown.addEventListener('change', () => {
        tabs.forEach(tab => {
            tab.classList.toggle(
                'active',
                tab.textContent === dropdown.value
            );
        });
    });

});

