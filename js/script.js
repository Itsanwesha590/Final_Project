document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");
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



