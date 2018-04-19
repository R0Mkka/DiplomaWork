// Поля для ввода информации + кнока ГОТОВО
let fio = document.getElementById('name'),
	age = document.getElementById('age'),
	male = document.getElementById('male'),
	female = document.getElementById('female'),
	select = document.getElementById('select'),
	biography = document.getElementById('bio'),
	readyBtn = document.getElementById('ready');

// Элементы отображения персонажа в центре
let personSkin = document.getElementById('person-skin'),
	personHair = document.getElementById('person-hair'),
	personClothes = document.getElementById('person-clothes');

// Переменные с информацией для будущей карточки
let fioVal = '',
	ageVal = '',
	sexVal = 'Мужской',
	selectVal = 'Либеральные',
	biographyVal = '';

// Кнопки слайдеров "вперед" и "назад"
let skinPrev = document.getElementsByClassName('prev')[0],
	skinNext = document.getElementsByClassName('next')[0],
	hairPrev = document.getElementsByClassName('prev')[1],
	hairNext = document.getElementsByClassName('next')[1],
	clothesPrev = document.getElementsByClassName('prev')[2],
	clothesNext = document.getElementsByClassName('next')[2];

// Изображения кожи + индекс текущего изображения
let skinImgs = ['img/skin/skin-1.png',
			'img/skin/skin-2.png',
			'img/skin/skin-3.png',
			'img/skin/skin-4.png',
			'img/skin/skin-5.png',
			'img/skin/skin-6.png'],
	skinIndex = 0;

// Изображения волос + индекс текущего изображения
let hairImgs = ['img/hair/construct/hair-1.png',
			'img/hair/construct/hair-2.png',
			'img/hair/construct/hair-3.png',
			'img/hair/construct/hair-4.png',
			'img/hair/construct/hair-5.png',
			'img/hair/construct/hair-6.png'],
	hairIndex = 0;

// Изображения одежды + индекс текущего изображения
let clothesImgs = ['img/clothes/construct/clothes-1.png',
				'img/clothes/construct/clothes-2.png',
				'img/clothes/construct/clothes-3.png',
				'img/clothes/construct/clothes-4.png',
				'img/clothes/construct/clothes-5.png',
				'img/clothes/construct/clothes-6.png'],
	clothesIndex = 0;

// Элементы отображения изображений слайдера
let skinColor = document.getElementsByClassName('skin-color'),
	hairStyle = document.getElementsByClassName('hair-style'),
	clothesStyle = document.getElementsByClassName('clothes-style');

biography.style.cssText = "max-width: 270px;\
						  max-height: 125px;\
						  min-width: 270px;\
						  min-height: 125px;";

// Переменная для проверки корректности информации в полях для заполнения
let isReady = true;

fio.addEventListener('change', function() {
	fioVal = this.value;
	fio.style.backgroundColor = '';
	isReady = true;
});

age.addEventListener('change', function() {
	ageVal = this.value;
	age.style.backgroundColor = '';
	isReady = true;
});

male.addEventListener('change', function() {
	sexVal = this.value;

	skinColor[skinIndex - 3].style.display = 'none';
	skinColor[0].style.display = 'flex';

	hairStyle[hairIndex].style.display = 'none';
	hairStyle[0].style.display = 'flex';

	clothesStyle[clothesIndex].style.display = 'none';
	clothesStyle[0].style.display = 'flex';

	skinIndex = 0;
	hairIndex = 0;
	clothesIndex = 0;

	personSkin.style.backgroundImage = `url('${skinImgs[skinIndex]}')`;
	personHair.style.backgroundImage = `url('${hairImgs[hairIndex]}')`;
	personClothes.style.backgroundImage = `url('${clothesImgs[clothesIndex]}')`;
});

female.addEventListener('change', function() {
	sexVal = this.value;

	skinColor[skinIndex].style.display = 'none';
	skinColor[0].style.display = 'flex';

	hairStyle[hairIndex].style.display = 'none';
	hairStyle[3].style.display = 'flex';

	clothesStyle[clothesIndex].style.display = 'none';
	clothesStyle[3].style.display = 'flex';

	skinIndex = 3;
	hairIndex = 3;
	clothesIndex = 3;
	personSkin.style.backgroundImage = `url('${skinImgs[skinIndex]}')`;
	personHair.style.backgroundImage = `url('${hairImgs[hairIndex]}')`;
	personClothes.style.backgroundImage = `url('${clothesImgs[clothesIndex]}')`;
});

select.addEventListener('change', function() {
	selectVal = this.options[this.selectedIndex].value;
});

biography.addEventListener('change', function() {
	biographyVal = biography.value;
	biography.style.backgroundColor = '';
	isReady = true;
});

readyBtn.addEventListener('click', function() {

	if (fio.value == '' || !isNaN(fio.value)){
		fio.style.backgroundColor = '#c23e3e';
		isReady = false;
	}

	if (age.value == '' ||
		isNaN(age.value) ||
		age.value < 10 ||
		age.value > 110 ||
		parseFloat(age.value) > parseInt(age.value)){
		age.style.backgroundColor = '#c23e3e';
		isReady = false;
	}

	if (biography.value == '' || !isNaN(biography.value)){
		biography.style.backgroundColor = '#c23e3e';
		isReady = false;
	}

	if (isReady == true){
		let main = document.querySelector('.main'),
			custom = document.querySelector('.custom'),
			customInfo = document.querySelector('.custom-info'),
			customStyle = document.querySelector('.custom-style'),
			customChar = document.querySelector('.custom-char');

		customInfo.classList.add('custom-info-disappearance');
		customChar.classList.add('custom-char-disappearance');
		customStyle.classList.add('custom-style-disappearance');

		let personImg = {
			personSkin: skinImgs[skinIndex],
			personHair: hairImgs[hairIndex],
			personClothes: clothesImgs[clothesIndex],
			personShoes: 'img/clothes/construct/shoes.png'
		}

		createNewCard(personImg);

		setTimeout(() => {
			custom.style.display = 'none';
			customInfo.style.display = 'none';
			customStyle.style.display = 'none';
			customChar.style.display = 'none';

			main.classList.remove('main-disappearance');
			main.classList.add('main-appearance');
			main.style.display = 'block';
		}, 1100);
	}
});

function createNewCard(personImg) {

	let mainCards = document.querySelector('.main-cards');

	let newCard = document.createElement('div');

	newCard.classList.add('main-cards-item');

	let candidateBlock = document.createElement('div'),
		photoBlock = document.createElement('div'),
		skinDiv = document.createElement('div'),
		hairDiv = document.createElement('div'),
		clothesDiv = document.createElement('div'),
		shoesDiv = document.createElement('div'),
		resultBlock = document.createElement('div'),
		resultCountBlock = document.createElement('div'),
		progressBlock = document.createElement('div'),
		progressBarBlock = document.createElement('div'),
		nameBlock = document.createElement('div'),
		ageBlock = document.createElement('div'),
		sexBlock = document.createElement('div'),
		viewsBlock = document.createElement('div'),
		bioBlock = document.createElement('div');

	candidateBlock.classList.add('candidate-block');
		photoBlock.classList.add('photo');
		skinDiv.classList.add('photo');
		hairDiv.classList.add('photo');
		clothesDiv.classList.add('photo');
		shoesDiv.classList.add('photo');
		resultBlock.classList.add('result');
			resultCountBlock.classList.add('result-count');
			progressBlock.classList.add('progress');
				progressBarBlock.classList.add('progress-bar');
	nameBlock.classList.add('name');
	ageBlock.classList.add('age');
	sexBlock.classList.add('sex');
	viewsBlock.classList.add('views');
	bioBlock.classList.add('bio');

	skinDiv.style.cssText = `background-image: url('${personImg.personSkin}'); position: absolute;`;
	hairDiv.style.cssText = `background-image: url('${personImg.personHair}'); position: absolute;`;
	clothesDiv.style.cssText = `background-image: url('${personImg.personClothes}'); position: absolute;`;
	shoesDiv.style.cssText = `background-image: url('${personImg.personShoes}'); position: absolute;`;

	let countBlocks = document.getElementsByClassName('result-count'),
		progressBlocks = document.getElementsByClassName('progress-bar');

	countBlocks[0].innerHTML = '0%';
	countBlocks[1].innerHTML = '0%';

	progressBlocks[0].classList.remove('progress-bar-1');
	progressBlocks[1].classList.remove('progress-bar-2');
	
	resultCountBlock.innerHTML = '0%';
	nameBlock.innerHTML = fioVal;

	if (ageVal % 100 >= 10 && ageVal % 100 <= 20) ageBlock.innerHTML = ageVal + ' лет';
	else if (ageVal % 10 == 0) ageBlock.innerHTML = ageVal + ' лет';
	else if (ageVal % 10 == 1) ageBlock.innerHTML = ageVal + ' год';
	else if ((ageVal % 10) > 1 && (ageVal % 10) < 5) ageBlock.innerHTML = ageVal + ' года';
	else if ((ageVal % 10) > 4 && (ageVal % 10) < 10) ageBlock.innerHTML = ageVal + ' лет';
	else ageBlock.innerHTML = ageVal + ' лет';

	sexBlock.innerHTML = sexVal;
	viewsBlock.innerHTML = selectVal;
	bioBlock.innerHTML = biographyVal;

	let sexText = document.createTextNode('Пол:'),
		viewsText = document.createTextNode('Полит. взгляды:'),
		bioText = document.createTextNode('Биграфия');

	newCard.appendChild(candidateBlock);

		candidateBlock.appendChild(photoBlock);

			photoBlock.appendChild(skinDiv);
			photoBlock.appendChild(hairDiv);
			photoBlock.appendChild(clothesDiv);
			photoBlock.appendChild(shoesDiv);

		candidateBlock.appendChild(resultBlock);

			resultBlock.appendChild(resultCountBlock);
			resultBlock.appendChild(progressBlock);

				progressBlock.appendChild(progressBarBlock);

	newCard.appendChild(nameBlock);
	newCard.appendChild(ageBlock);
	newCard.appendChild(sexText);
	newCard.appendChild(sexBlock);
	newCard.appendChild(viewsText);
	newCard.appendChild(viewsBlock);
	newCard.appendChild(bioText);
	newCard.appendChild(bioBlock);

	mainCards.appendChild(newCard);
}

skinPrev.addEventListener('click', () => {

	if (sexVal == 'Мужской'){

		skinColor[skinIndex].style.display = 'none';

		if (skinIndex == 0){
			skinIndex = 2;
		} else {
			skinIndex--;
		}

		skinColor[skinIndex].style.display = 'flex';

	} else {

		skinColor[skinIndex - 3].style.display = 'none';

		if (skinIndex == 3){
			skinIndex = 5;
		} else {
			skinIndex--;
		}

		skinColor[skinIndex - 3].style.display = 'flex';

	}
	personSkin.style.backgroundImage = `url('${skinImgs[skinIndex]}')`;
});

skinNext.addEventListener('click', () => {

	if (sexVal == 'Мужской'){

		skinColor[skinIndex].style.display = 'none';
		
		if (skinIndex == 2){
			skinIndex = 0;
		} else {
			skinIndex++;
		}

		skinColor[skinIndex].style.display = 'flex';

	} else {

		skinColor[skinIndex - 3].style.display = 'none';

		if (skinIndex == 5){
			skinIndex = 3;
		} else {
			skinIndex++;
		}

		skinColor[skinIndex - 3].style.display = 'flex';

	}
	personSkin.style.backgroundImage = `url('${skinImgs[skinIndex]}')`;
});

hairPrev.addEventListener('click', () => {

	hairStyle[hairIndex].style.display = 'none';

	if (sexVal == 'Мужской'){

		if (hairIndex == 0){
			hairIndex = 2;
		} else {
			hairIndex--;
		}

	} else {

		if (hairIndex == 3){
			hairIndex = 5;
		} else {
			hairIndex--;
		}

	}
	hairStyle[hairIndex].style.display = 'flex';
	personHair.style.backgroundImage = `url('${hairImgs[hairIndex]}')`;
});

hairNext.addEventListener('click', () => {

	hairStyle[hairIndex].style.display = 'none';

	if (sexVal == 'Мужской'){
		
		if (hairIndex == 2){
			hairIndex = 0;
		} else {
			hairIndex++;
		}

	} else {

		if (hairIndex == 5){
			hairIndex = 3;
		} else {
			hairIndex++;
		}

	}
	hairStyle[hairIndex].style.display = 'flex';
	personHair.style.backgroundImage = `url('${hairImgs[hairIndex]}')`;
});

clothesPrev.addEventListener('click', () => {

	clothesStyle[clothesIndex].style.display = 'none';

	if (sexVal == 'Мужской'){

		if (clothesIndex == 0){
			clothesIndex = 2;
		} else {
			clothesIndex--;
		}

	} else {

		if (clothesIndex == 3){
			clothesIndex = 5;
		} else {
			clothesIndex--;
		}

	}
	clothesStyle[clothesIndex].style.display = 'flex';
	personClothes.style.backgroundImage = `url('${clothesImgs[clothesIndex]}')`;
});

clothesNext.addEventListener('click', () => {

	clothesStyle[clothesIndex].style.display = 'none';

	if (sexVal == 'Мужской'){
		
		if (clothesIndex == 2){
			clothesIndex = 0;
		} else {
			clothesIndex++;
		}

	} else {

		if (clothesIndex == 5){
			clothesIndex = 3;
		} else {
			clothesIndex++;
		}

	}
	clothesStyle[clothesIndex].style.display = 'flex';
	personClothes.style.backgroundImage = `url('${clothesImgs[clothesIndex]}')`;
});