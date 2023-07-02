let prevButton = document.getElementById('prev_btn');
let nextButton = document.getElementById('next_btn');
let slideContainer = document.getElementById('slide_container');

let slides = document.querySelectorAll('.slide');
let slideIndex = 0;

prevButton.addEventListener('click', function() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length -1;
    }
    updateSlidePosition();
});

nextButton.addEventListener('click', function() {
    slideIndex++;
    if(slideIndex >= slides.length) {
        slideIndex = 0;
    }
    updateSlidePosition();
})

function updateSlidePosition() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(" + - slideIndex * 100 + "%)";
    }
}