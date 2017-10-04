// Responsive images
$(function(){
    $('.responsive').picture();
});


const share = document.getElementById('share');
// const shareClose = document.getElementById('share-close');
// const socialButtons = document.querySelectorAll('ul.social-center li');

function shareMe(e){
  e.preventDefault();
  console.log('Share me!');
  document.getElementById('share-block').classList.toggle('show-block');
};

function closeShare(){
 document.getElementById('share-block').classList.remove('show-block');
};

share.addEventListener('click', shareMe);
// shareClose.addEventListener('click', closeShare);
// socialButtons.forEach(x => x.addEventListener('click', closeShare));




// jQuery staff
$(function(){

  // $('#share').click(function(e){
  // 	$('#share-block').toggleClass('show-block');
  // 	console.log("Share!");
  // })

// Slide down menu
$('#burger').click(function(e){
  e.preventDefault();
  $('ul.drop-nav').toggleClass('slide-down');
  $('ul.drop-nav').toggleClass('slide-up');
});
// Toggles background of slide down menu
$('.drop-nav li').click(function(e){
  e.preventDefault();
  $('.drop-nav li').removeClass('active');
  $(this).addClass('active');
  $('ul.drop-nav').removeClass('slide-down');
  $('ul.drop-nav').addClass('slide-up');
});

// Datepicker
// $('.datepicker').datepick();

// Prevent page jerk
// $('label').click(function(e){
//   e.preventDefault();
//   console.log('Nooooo!')
//   })
});


