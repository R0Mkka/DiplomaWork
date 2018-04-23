function createCandidate() {

	let flag = false;

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
				'img/skin/skin-6.png',
				'img/skin/skin-7.png',
				'img/skin/skin-8.png',
				'img/skin/skin-9.png',
				'img/skin/skin-10.png',
				'img/skin/skin-11.png',
				'img/skin/skin-12.png'],
		skinIndex = 0;

	// Изображения волос + индекс текущего изображения
	let hairImgs = ['img/hair/construct/hair-1.png',
				'img/hair/construct/hair-2.png',
				'img/hair/construct/hair-3.png',
				'img/hair/construct/hair-4.png',
				'img/hair/construct/hair-5.png',
				'img/hair/construct/hair-6.png',
				'img/hair/construct/hair-7.png',
				'img/hair/construct/hair-8.png'],
		hairIndex = 0;

	// Изображения одежды + индекс текущего изображения
	let clothesImgs = ['img/clothes/construct/clothes-1.png',
					'img/clothes/construct/clothes-2.png',
					'img/clothes/construct/clothes-3.png',
					'img/clothes/construct/clothes-4.png',
					'img/clothes/construct/clothes-5.png',
					'img/clothes/construct/clothes-6.png',
					'img/clothes/construct/clothes-7.png',
					'img/clothes/construct/clothes-8.png'],
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
	let isReadyFio = false,
		isReadyAge = false;
		isReadyBio = false;

	fio.addEventListener('change', function() {
		fioVal = this.value;
		fio.style.backgroundColor = '';
		isReadyFio = true;
	});

	age.addEventListener('change', function() {
		ageVal = this.value;
		age.style.backgroundColor = '';
		isReadyAge = true;
	});

	male.addEventListener('change', function() {
		sexVal = this.value;

		skinColor[skinIndex - 6].style.display = 'none';
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
		hairStyle[5].style.display = 'flex';

		clothesStyle[clothesIndex].style.display = 'none';
		clothesStyle[4].style.display = 'flex';

		skinIndex = 6;
		hairIndex = 5;
		clothesIndex = 4;
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
		isReadyBio = true;
	});

		readyBtn.addEventListener('click', function() {

		if (fio.value.length < 2 ||
			fio.value.length > 35 ||
			!isNaN(fio.value)){

			fio.style.backgroundColor = '#c23e3e';
			isReadyFio = false;

			if (fio.value == ''){
				fio.value = "Это обязательное поле";
			} else if(fio.value.length < 2){
					fio.value = "Введено слишком мало символов";
				} else if (fio.value.length > 35){
					fio.value = "Введено слишком много символов";
					} else {
						fio.value = "Некорректный ввод";
					}

			fio.onfocus = function () {
				this.select();
			}
		}

		if (age.value == '' ||
			isNaN(age.value) ||
			age.value < 35 ||
			age.value > 65 ||
			parseFloat(age.value) > parseInt(age.value)){

			age.style.backgroundColor = '#c23e3e';
			isReadyAge = false;

			if (age.value == ''){
				age.value = "Это обязательное поле";
			} else if(age.value < 35){
					age.value = "Минимальный возраст 35 лет";
				} else if (age.value > 65) {
						age.value = "Максимальный возраст 65 лет";
					} else {
						age.value = "Некорректный ввод";
					}

			age.onfocus = function () {
				this.select();
			}
		}

		if (biography.value.length < 10 ||
			biography.value > 120 ||
			!isNaN(biography.value)){

			biography.style.backgroundColor = '#c23e3e';
			isReadyBio = false;

			if (biography.value == ''){
				biography.value = "Это обязательное поле";
			} else if(biography.value.length < 10){
					biography.value = "Введено меньше 10 символов";
				} else if (biography.value > 120){
						biography.value = "Введено слишком много символов";
					} else {
						biography.value = "Некорректный ввод";
					}

			biography.onfocus = function () {
				this.select();
			}
		}

		if (isReadyFio && isReadyAge && isReadyBio){

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

			if (flag == false) {
				createNewCard(personImg);
				flag = true;
			}
			else recreate(personImg);

			setTimeout(() => {

				let mainCards = document.getElementsByClassName('main-cards-item'),
					progressBlocks = document.getElementsByClassName('progress-bar');

				for (let i = 0; i < mainCards.length; i++){
					mainCards[i].classList.remove('main-cards-item-active');
					progressBlocks[i].style.height = '0%';
				}

				custom.style.display = 'none';
				customInfo.style.display = 'none';
				customStyle.style.display = 'none';
				customChar.style.display = 'none';

				main.classList.remove('main-disappearance');
				main.classList.add('main-appearance');
				main.style.display = 'block';

				personSkin.style.backgroundImage = `url('${skinImgs[0]}')`;
				personHair.style.backgroundImage = `url('${hairImgs[0]}')`;
				personClothes.style.backgroundImage = `url('${clothesImgs[0]}')`;

				if(female.checked) skinColor[skinIndex - 6].style.display = 'none';
				else skinColor[skinIndex].style.display = 'none';
				skinIndex = 0;
				skinColor[0].style.display = 'flex';

				hairStyle[hairIndex].style.display = 'none';
				hairIndex = 0;
				hairStyle[0].style.display = 'flex';

				clothesStyle[clothesIndex].style.display = 'none';
				clothesIndex = 0;
				clothesStyle[0].style.display = 'flex';

				fio.value = '';
				age.value = '';
				male.checked = true;
				female.checked = false;
				select.selectedIndex = 0;
				biography.value = '';

				sexVal = 'Мужской';
				selectVal = 'Либеральные';

				setTimeout(() => {
					customInfo.classList.remove('custom-info-disappearance');
					customChar.classList.remove('custom-char-disappearance');
					customStyle.classList.remove('custom-style-disappearance');
				}, 1100);

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
			rogueDiv = document.createElement('div'),
			resultBlock = document.createElement('div'),
			resultCountBlock = document.createElement('div'),
			progressBlock = document.createElement('div'),
			progressBarBlock = document.createElement('div'),
			nameBlock = document.createElement('div'),
			ageBlock = document.createElement('div'),
			sexBlock = document.createElement('div'),
			viewsBlock = document.createElement('div'),
			bioBlock = document.createElement('div');

		skinDiv.id = "skin-div";
		hairDiv.id = "hair-div";
		clothesDiv.id = "clothes-div";
		shoesDiv.id = "shoes-div";
		rogueDiv.id = "rogue-div";
		resultCountBlock.id = "result-count-block",
		nameBlock.id = "name-block",
		ageBlock.id = "age-block",
		sexBlock.id = "sex-block",
		viewsBlock.id = "views-block",
		bioBlock.id = "bio-block";

		candidateBlock.classList.add('candidate-block');
			photoBlock.classList.add('photo');
			skinDiv.classList.add('photo');
			hairDiv.classList.add('photo');
			clothesDiv.classList.add('photo');
			shoesDiv.classList.add('photo');
			rogueDiv.classList.add('photo');
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
		rogueDiv.style.cssText = 'background-image: url("img/rogue.png"); position: absolute;';

		rogueDiv.style.display = 'none';

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
				photoBlock.appendChild(rogueDiv);

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

	function recreate(personImg) {
		let skinDiv = document.getElementById("skin-div");
			hairDiv = document.getElementById("hair-div");
			clothesDiv = document.getElementById("clothes-div");
			shoesDiv = document.getElementById("shoes-div");
			resultCountBlock = document.getElementById("result-count-block"),
			nameBlock = document.getElementById("name-block"),
			ageBlock = document.getElementById("age-block"),
			sexBlock = document.getElementById("sex-block"),
			viewsBlock = document.getElementById("views-block"),
			bioBlock = document.getElementById("bio-block");

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
	}

	skinPrev.addEventListener('click', () => {

		if (sexVal == 'Мужской'){

			skinColor[skinIndex].style.display = 'none';

			if (skinIndex == 0){
				skinIndex = 5;
			} else {
				skinIndex--;
			}

			skinColor[skinIndex].style.display = 'flex';

		} else {

			skinColor[skinIndex - 6].style.display = 'none';

			if (skinIndex == 6){
				skinIndex = 11;
			} else {
				skinIndex--;
			}

			skinColor[skinIndex - 6].style.display = 'flex';

		}
		personSkin.style.backgroundImage = `url('${skinImgs[skinIndex]}')`;
	});

	skinNext.addEventListener('click', () => {

		if (sexVal == 'Мужской'){

			skinColor[skinIndex].style.display = 'none';
			
			if (skinIndex == 5){
				skinIndex = 0;
			} else {
				skinIndex++;
			}

			skinColor[skinIndex].style.display = 'flex';

		} else {

			skinColor[skinIndex - 6].style.display = 'none';

			if (skinIndex == 11){
				skinIndex = 6;
			} else {
				skinIndex++;
			}

			skinColor[skinIndex - 6].style.display = 'flex';

		}
		personSkin.style.backgroundImage = `url('${skinImgs[skinIndex]}')`;
	});

	hairPrev.addEventListener('click', () => {

		hairStyle[hairIndex].style.display = 'none';

		if (sexVal == 'Мужской'){

			if (hairIndex == 0){
				hairIndex = 4;
			} else {
				hairIndex--;
			}

		} else {

			if (hairIndex == 5){
				hairIndex = 7;
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
			
			if (hairIndex == 4){
				hairIndex = 0;
			} else {
				hairIndex++;
			}

		} else {

			if (hairIndex == 7){
				hairIndex = 5;
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
				clothesIndex = 3;
			} else {
				clothesIndex--;
			}

		} else {

			if (clothesIndex == 4){
				clothesIndex = 7;
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
			
			if (clothesIndex == 3){
				clothesIndex = 0;
			} else {
				clothesIndex++;
			}

		} else {

			if (clothesIndex == 7){
				clothesIndex = 4;
			} else {
				clothesIndex++;
			}

		}
		clothesStyle[clothesIndex].style.display = 'flex';
		personClothes.style.backgroundImage = `url('${clothesImgs[clothesIndex]}')`;
	});

}

module.exports = createCandidate;