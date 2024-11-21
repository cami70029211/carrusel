const images = [
    {
        title: "Imagen de italia 1",
        description: "",
        src: "imagenes/italia 1.jfif"
    },
    {
        title: "Imagen de italia 2",
        description: "",
        src: "imagenes/italia 2.jfif"
    },
    {
        title: "Imagen de italia 3",
        description: "",
        src: "imagenes/italia 3.jfif"
    }
];

let currentIndex = 0;

function loadImages() {
    const carouselInner = document.querySelector('.carousel-inner');
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) item.classList.add('active');
        
        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <h2>${image.title}</h2>
            <p>${image.description}</p>
        `;
        carouselInner.appendChild(item);
    });
}

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
    loadImages();
});
