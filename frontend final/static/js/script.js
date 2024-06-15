// new product

const config = {
    type: 'carousel',
    perView: 5,
    gap: 20,
    breakpoints: {
        768: {
            perView: 2
        }
    }
};
const glide = new Glide('.glide',config).mount();

glide.on('run', function () {
    const bullets = document.querySelectorAll('.glide__bullet');
    bullets.forEach((bullet, index) => {
        if (index === glide.index) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
});
