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


