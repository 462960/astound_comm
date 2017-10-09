// Responsive images
$(function(){
    $('.responsive').picture();
});


const share = document.getElementById('share');
const galleryImg = document.querySelectorAll('.gallery-wrapper > .responsive');
const cycleSlides = document.querySelector('.cycle-slideshow');
// Share with.
function shareMe(e){
  e.preventDefault();
  document.getElementById('share-block').classList.toggle('show-block');
};
// Gallery images 
function removePrice(){
 const priceTab = this.querySelector('h6.price');
 priceTab.classList.add('slide-down', 'slide-right');
};

function showPrice(){
 const priceTab = this.querySelector('h6.price');
 priceTab.classList.remove('slide-down', 'slide-right');
};
// Slideshow images
function priceDown(){
 const overlay = document.querySelector('.cycle-overlay');
 overlay.classList.add('price-down');
};

function priceUp(){
 const overlay = document.querySelector('.cycle-overlay');
 overlay.classList.remove('price-down');
};

// Events listeners
share.addEventListener('click', shareMe);
galleryImg.forEach(x => x.addEventListener('mouseenter', removePrice));
galleryImg.forEach(x => x.addEventListener('mouseleave', showPrice));
cycleSlides.addEventListener('mouseenter', priceDown);
cycleSlides.addEventListener('mouseleave', priceUp);


