document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        const images = carousel.querySelector('.carousel-images');
        const totalImages = images.children.length;
        let index = 0;

        const showImage = (index) => {
            const offset = -index * 100;
            images.style.transform = `translateX(${offset}%)`;
        };

        const nextImage = () => {
            index = (index + 1) % totalImages;
            showImage(index);
        };

        const prevImage = () => {
            index = (index - 1 + totalImages) % totalImages;
            showImage(index);
        };

        const controls = document.createElement('div');
        controls.classList.add('carousel-controls');

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Prev';
        prevButton.addEventListener('click', prevImage);

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.addEventListener('click', nextImage);

        controls.appendChild(prevButton);
        controls.appendChild(nextButton);

        carousel.appendChild(controls);
    });
});
