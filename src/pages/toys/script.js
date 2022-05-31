// Удаление Focus с Radio button

function clickRadio(el) {
	var siblings = document.querySelectorAll("input[type='radio'][name='" + el.name + "']");
	for (var i = 0; i < siblings.length; i++) {
		if (siblings[i] != el)
			siblings[i].oldChecked = false;
	}
	if (el.oldChecked)
		el.checked = false;
	el.oldChecked = el.checked;
}


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
