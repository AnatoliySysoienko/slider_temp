const slides = document.querySelectorAll('.slide');
const pauseBtn = document.querySelector('#pause');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let isPlaying = true;
let currentSlide = 0;
let timerId = null;
let interval = 1000;

const SLIDES_LENGTH = slides.length;

function goToNth(n) {
  slides[currentSlide].classList.toggle('active');
  currentSlide = (n + SLIDES_LENGTH) % SLIDES_LENGTH;
  slides[currentSlide].classList.toggle('active');
}

function prevSlide() {
  goToNth(currentSlide - 1);
}

function nextSlide() {
  goToNth(currentSlide + 1);
}

function pause() {
  clearInterval(timerId);
  isPlaying = false;
  pauseBtn.innerHTML = 'Play';
}

function play() {
  timerId = setInterval(nextSlide, interval);
  isPlaying = true;
  pauseBtn.innerHTML = 'Pause';
}

function next() {
  nextSlide();
  pause();
}

function prev() {
  prevSlide();
  pause();
}

const pausePlay = () => isPlaying ? pause() : play();

pauseBtn.addEventListener('click', pausePlay);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

timerId = setInterval(nextSlide, interval);