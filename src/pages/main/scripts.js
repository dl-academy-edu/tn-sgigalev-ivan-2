//popUP

var popupLink = document.querySelector('.popup-link');
var popup = document.querySelector('.popup');
var closePopup = document.querySelector('.popup__cross');
var input = popup.querySelector('input');

console.log(popup);

console.log(popupLink);

popupLink.addEventListener('click', function () {
	popup.classList.add('popup__open');
	input.focus();
})

closePopup.addEventListener('click', function () {
	popup.classList.remove('popup__open');
	popupLink.focus();
	document.body.style.overflow = 'visible'
})


window.addEventListener('keydown', function (event) {
	console.log(event.code);
	if (event.code === "Escape" && popup.classList.contains('popup__open')) {
		popup.classList.remove('popup__open');
		popupLink.focus();
	}
	document.body.style.overflow = 'visible'
})


//mobileMenu

var buttonMenu = document.querySelector('.button__menu');
var mobileMenu = document.querySelector('.menu__mobile');
var closeMobileMenu = document.querySelector('.mobile__close');

console.log(mobileMenu);

console.log(buttonMenu);

buttonMenu.addEventListener('click', function () {
	mobileMenu.classList.add('menu__mobile_open');
	input.focus();
})

closeMobileMenu.addEventListener('click', function () {
	mobileMenu.classList.remove('menu__mobile_open');
	document.body.style.overflow = 'visible'
})


window.addEventListener('keydown', function (event) {
	console.log(event.code);
	if (event.code === "Escape" && mobileMenu.classList.contains('menu__mobile_open')) {
		mobileMenu.classList.remove('menu__mobile_open');
	}
	document.body.style.overflow = 'visible'
})




