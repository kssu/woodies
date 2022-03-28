$(document).ready(function(){
	$('.carousel').slick({
		dots: true,
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/previous.png">Previous</button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.png">Next</button>'
	});
	
  });

let hamburger = document.querySelector('.hamburger'),
  	hamburgerMenu = document.querySelector('.hamburger-menu'),
  	hamburgerClose = document.querySelector('.hamburger-menu__close');

	  hamburger.addEventListener('click', () => {
		hamburgerMenu.style.display = ' block';
	  });
	  hamburgerClose.addEventListener('click', () => {
		hamburgerMenu.style.display = ' none';
	  });
