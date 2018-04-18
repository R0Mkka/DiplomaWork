window.addEventListener('DOMContentLoaded', () => {

	let createBtn = document.getElementById('popup-btn'),
		overlay = document.querySelector('.overlay'),
		popup = document.querySelector('.popup'),
		main = document.querySelector('.main'),
		custom = document.querySelector('.custom');

	overlay.classList.add('overlay-appearance');
	popup.classList.add('popup-appearance');
	main.classList.add('main-appearance');

	setTimeout(() => {
		createBtn.addEventListener('click', () => {

			overlay.classList.add('overlay-disappearance');
			popup.classList.add('popup-disappearance');
			main.classList.add('main-disappearance');

			setTimeout(() => {
				overlay.style.display = 'none';
				popup.style.display = 'none';
				main.style.display = 'none';
				custom.style.display= 'flex';
			}, 1000);
		});
	}, 1100);

});