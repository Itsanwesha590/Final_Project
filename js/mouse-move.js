// MOUSE MOVING
if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    const cursorEl = document.querySelector('.cursor');
    if (cursorEl) cursorEl.style.display = 'none';
} else {

    const cursor = document.querySelector('.cursor');
    const dot = document.querySelector('.cursor-dot');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {

        cursorX += (mouseX - cursorX) * 0.045;
        cursorY += (mouseY - cursorY) * 0.045;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        dotX += (mouseX - dotX) * 0.18;
        dotY += (mouseY - dotY) * 0.18;

        const dx = dotX - cursorX;
        const dy = dotY - cursorY;

        dot.style.transform = `translate(${dx}px, ${dy}px)`;

        requestAnimationFrame(animate);
    }

    animate();
}
