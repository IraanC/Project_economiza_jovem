// animação da barra de menus do mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// fim animação mob //

// animação das imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const textBoxes = document.querySelectorAll('.text-box');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    updateTextBoxes(index);
    currentSlide = index; // Atualiza o slide atual
}

function updateTextBoxes(index) {
    textBoxes.forEach((textBox, i) => {
        textBox.textContent = `Slide ${i + 1}`; // Atualiza o texto da caixa para o número do slide
        textBox.classList.remove('active'); // Remove a classe active de todas as caixas
    });
    textBoxes[index].classList.add('active'); // Adiciona a classe active apenas ao slide ativo
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Avança para o próximo slide
    showSlide(currentSlide);
}

// Exibir o slide inicial
showSlide(currentSlide);

// Muda automaticamente os slides a cada 5 segundos
setInterval(nextSlide, 5000);
// fim do cod da animação //