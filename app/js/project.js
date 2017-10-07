// Responsive images
$(function(){
    $('.responsive').picture();
});


const share = document.getElementById('share');
const galleryImg = document.querySelectorAll('.gallery-wrapper > .responsive');

function shareMe(e){
  e.preventDefault();
  document.getElementById('share-block').classList.toggle('show-block');
};

function removePrice(){
 const priceTab = this.querySelector('h6.price');
 priceTab.classList.add('slide-down', 'slide-right');
};

function showPrice(){
 const priceTab = this.querySelector('h6.price');
 priceTab.classList.remove('slide-down', 'slide-right');
};

share.addEventListener('click', shareMe);
galleryImg.forEach(x => x.addEventListener('mouseenter', removePrice))
galleryImg.forEach(x => x.addEventListener('mouseleave', showPrice))


