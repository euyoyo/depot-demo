const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Vehicle slider
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("vehicle-items");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}
function resetSlides() {
    let slides = document.getElementsByClassName("vehicle-items");
    let dots = document.getElementsByClassName("dot");
    if (window.innerWidth >= 768) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = `translateX(0)`;
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    } else {
        showSlides(slideIndex);
    }
}

window.addEventListener("resize", resetSlides);

// Service 
let currentSlideIndex = 1;
showServiceSlide(currentSlideIndex);

function setCurrentSlide(n) {
    showServiceSlide(currentSlideIndex = n);
}

function showServiceSlide(n) {
    let i;
    let slides = document.getElementsByClassName("service-items");
    let slideIndicators = document.getElementsByClassName("service-slide");
    if (n > slides.length) { currentSlideIndex = 1 }
    if (n < 1) { currentSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${(currentSlideIndex - 1) * 100}%)`;
    }
    for (i = 0; i < slideIndicators.length; i++) {
        slideIndicators[i].className = slideIndicators[i].className.replace(" active", "");
    }
    slideIndicators[currentSlideIndex - 1].className += " active";
}

function resetServiceSlides() {
    let slides = document.getElementsByClassName("service-items");
    let slideIndicators = document.getElementsByClassName("service-slide");
    if (window.innerWidth >= 768) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = `translateX(0)`;
        }
        for (let i = 0; i < slideIndicators.length; i++) {
            slideIndicators[i].className = slideIndicators[i].className.replace(" active", "");
        }
    } else {
        showServiceSlide(currentSlideIndex);
    }
}
window.addEventListener("resize", resetServiceSlides);

// Counter
document.addEventListener("DOMContentLoaded", function () {
    const counters = [
        { id: 'target-number1', target: 19, duration: 60000, interval: 350 },
        { id: 'target-number2', target: 2332, duration: 4000, interval: 30 },
        { id: 'target-number3', target: 231, duration: 10000, interval: 20 },
        { id: 'target-number4', target: 827, duration: 5000, interval: 20 }
    ];

    counters.forEach(counter => {
        const targetNumber = document.getElementById(counter.id);
        const increment = counter.target / (counter.duration / counter.interval);

        const updateCount = () => {
            let count = +targetNumber.innerText;
            if (count < counter.target) {
                targetNumber.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, counter.interval);
            } else {
                targetNumber.innerText = counter.target;
            }
        };
        updateCount();
    });
});
let staffIndex = 1;
staffSlide(staffIndex);

function currentStaff(n) {
    staffSlide(staffIndex = n);
}

function staffSlide(n) {
    let i;
    let staffSlider = document.getElementsByClassName("staff-items");
    let staffDot = document.getElementsByClassName("staffDots");
    if (n > staffSlider.length) { staffIndex = 1 }
    if (n < 1) { staffIndex = staffSlider.length }
    for (i = 0; i < staffSlider.length; i++) {
        staffSlider[i].style.transform = `translateX(-${(staffIndex - 1) * 100}%)`;
    }
    for (i = 0; i < staffDot.length; i++) {
        staffDot[i].className = staffDot[i].className.replace(" active", "");
    }
    staffDot[staffIndex - 1].className += " active";
}

function resetStaff() {
    let staffSlides = document.getElementsByClassName("staff-items");
    let staffDot = document.getElementsByClassName("staffDots");
    if (window.innerWidth >= 768) {
        for (let i = 0; i < staffSlides.length; i++) {
            staffSlides[i].style.transform = `translateX(0)`;
        }
        for (let i = 0; i < staffDot.length; i++) {
            staffDot[i].className = staffDot[i].className.replace(" active", "");
        }
    } else {
        staffSlide(staffIndex);
    }
}

window.addEventListener("resize", resetStaff);