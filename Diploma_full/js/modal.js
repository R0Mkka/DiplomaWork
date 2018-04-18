window.addEventListener('DOMContentLoaded', () => {

	let createBtn = document.getElementById('popup-btn'),
		overlay = document.querySelector('.overlay'),
		popup = document.querySelector('.popup'),
		main = document.querySelector('.main'),
		custom = document.querySelector('.custom'),
		customInfo = document.querySelector('.custom-info'),
		customStyle = document.querySelector('.custom-style'),
		customChar = document.querySelector('.custom-char');

	overlay.classList.add('overlay-appearance');
	popup.classList.add('popup-appearance');
	main.classList.add('main-appearance');

	setTimeout(() => {
		createBtn.addEventListener('click', () => {

			overlay.classList.add('overlay-disappearance');
			popup.classList.add('popup-disappearance');
			main.classList.add('main-disappearance');

			customInfo.classList.add('custom-info-appearance');
			customChar.classList.add('custom-char-appearance');
			customStyle.classList.add('custom-style-appearance');

			setTimeout(() => {
				overlay.style.display = 'none';
				popup.style.display = 'none';
				main.style.display = 'none';

				custom.style.display= 'flex';
				customInfo.style.display= 'block';
				customStyle.style.display= 'block';
				customChar.style.display= 'block';
			}, 1000);
		});
	}, 1100);

});