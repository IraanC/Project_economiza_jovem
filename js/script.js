// let currentIndex = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.carousel-item');
//     if (index >= slides.length) {
//         currentIndex = 0;
//     } else if (index < 0) {
//         currentIndex = slides.length - 1;
//     } else {
//         currentIndex = index;
//     }

//     const carouselInner = document.querySelector('.carousel-inner');
//     carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

//     slides.forEach((slide, i) => {
//         slide.classList.toggle('active', i === currentIndex);
//     });
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentIndex);
// });

/* script.js */

let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function(){
    NextImg();
},5000) // as imagens passam a cada 5seg

function NextImg(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById('radio'+count).checked = true;
}

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question div');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});

const containers = document.querySelectorAll('.img_text');
containers.forEach(container => {
    const img = container.querySelector('img');
    const text = container.querySelector('.text');

    img.addEventListener('mouseover', () => {
        text.style.display = 'block';
    });

    img.addEventListener('mouseout', () => {
        text.style.display = 'none';
    });
});