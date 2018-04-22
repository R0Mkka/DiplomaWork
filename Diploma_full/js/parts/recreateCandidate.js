function recreateCandidate() {

	let resetBtn = document.getElementById('reset');

	resetBtn.addEventListener('click', () => {

		let main = document.querySelector('.main'),
			custom = document.querySelector('.custom'),
			customInfo = document.querySelector('.custom-info'),
			customStyle = document.querySelector('.custom-style'),
			customChar = document.querySelector('.custom-char'),
			mainCards = document.querySelector('.main-cards');

		customInfo.classList.add('custom-info-appearance');
		customChar.classList.add('custom-char-appearance');
		customStyle.classList.add('custom-style-appearance');

		main.classList.add('main-disappearance');

		setTimeout(() => {
			main.style.display = 'none';

			custom.style.display = 'flex';
			customInfo.style.display = 'block';
			customStyle.style.display = 'block';
			customChar.style.display = 'block';
		}, 1100);
	});

}

module.exports = recreateCandidate;