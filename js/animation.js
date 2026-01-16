// AOS.init();



document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) {
        luxy.init({
            wrapper: '#luxy',
            targets: '.luxy-el',
            wrapperSpeed: 0.08
        });
    }
});