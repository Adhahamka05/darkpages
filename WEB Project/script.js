const title = document.getElementById('site-title');
function flicker() {
    if (title && Math.random() > 0.93) {
        title.style.opacity = '0.3';
        setTimeout(() => { title.style.opacity = '1'; }, 60);
    }
}
setInterval(flicker, 100);

const jumpscare = document.getElementById('jumpscare-overlay');
if (jumpscare) {
    function triggerGhost() {
        let delay = Math.random() * (15000 - 8000) + 8000;
        setTimeout(() => {
            jumpscare.style.display = 'block';
            setTimeout(() => { jumpscare.style.display = 'none'; }, 120);
            triggerGhost();
        }, delay);
    }
    triggerGhost();
}