function dijoNo(){
    height = window.innerHeight;
    width = window.innerWidth;

    minHeigth = (Math.random() * height)
    minWidth = (Math.random() * width)

    document.querySelector(".no").style.position = "absolute";
    document.querySelector(".no").style.top = minHeigth + "px";
    document.querySelector(".no").style.left = minWidth + "px";
}

const siButton = document.querySelector('.si');
siButton.addEventListener('click', function () {
    const primeroSection = document.querySelector('.primero');
    const carouselContainer = document.querySelector('.carousel-container');
    const pasar = document.querySelector('.pasar')
    const texto = document.querySelector('.texto')

    // Oculta la sección "primero"
    primeroSection.style.display = 'none';

    // Muestra el carrusel
    carouselContainer.style.display = 'block';
    carouselContainer.style.paddingTop = '1%'
    pasar.style.display = 'block'
    texto.style.fontSize = '16px'
    texto.style.textAlign = "center";
    texto.style.fontWeight = "bold"; 
    texto.style.backgroundColor = "white";

});



const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    currentIndex = index;

    // Ocultar todas las diapositivas
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Mostrar la diapositiva actual
    slides[currentIndex].style.display = 'block';
}

prevButton.addEventListener('click', () => {
    currentIndex--;
    goToSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    goToSlide(currentIndex);
});

// Inicializa el carrusel con la primera diapositiva
goToSlide(currentIndex);