let fio = document.getElementById('name'),
	age = document.getElementById('age'),
	male = document.getElementById('male'),
	female = document.getElementById('female'),
	select = document.getElementById('select'),
	biography = document.getElementById('bio'),
	readyBtn = document.getElementById('ready');

let personSkin = document.getElementById('person-skin'),
	personHair = document.getElementById('person-hair'),
	personClothes = document.getElementById('person-clothes');

let fioVal = '',
	ageVal = '',
	sexVal = 'Мужской',
	selectVal = 'Либеральные',
	biographyVal = '';

let skinPrev = document.getElementsByClassName('prev')[0],
	skinNext = document.getElementsByClassName('next')[0],
	hairPrev = document.getElementsByClassName('prev')[1],
	hairNext = document.getElementsByClassName('next')[1],
	clothesPrev = document.getElementsByClassName('prev')[2],
	clothesNext = document.getElementsByClassName('next')[2];

let skinImgs = ['img/skin/skin-1.png',
			'img/skin/skin-2.png',
			'img/skin/skin-3.png',
			'img/skin/skin-4.png',
			'img/skin/skin-5.png',
			'img/skin/skin-6.png'],
	skinIndex = 0;

let hairImgs = ['img/hair/construct/hair-1.png',
			'img/hair/construct/hair-2.png',
			'img/hair/construct/hair-3.png',
			'img/hair/construct/hair-4.png',
			'img/hair/construct/hair-5.png',
			'img/hair/construct/hair-6.png'],
	hairIndex = 0;

let clothesImgs = ['img/clothes/construct/clothes-1.png',
				'img/clothes/construct/clothes-2.png',
				'img/clothes/construct/clothes-3.png',
				'img/clothes/construct/clothes-4.png',
				'img/clothes/construct/clothes-5.png',
				'img/clothes/construct/clothes-6.png'],
	clothesIndex = 0;

let skinColor = document.getElementsByClassName('skin-color');

fio.addEventListener('change', function() {
	fioVal = this.value;
});

age.addEventListener('change', function() {
	ageVal = this.value;
});

male.addEventListener('change', function() {
	sexVal = this.value;

	skinColor[skinIndex - 3].style.display = 'none';
	skinColor[0].style.display = 'flex';

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
});

readyBtn.addEventListener('click', function() {
	console.log(fioVal);
	console.log(ageVal);
	console.log(sexVal);
	console.log(selectVal);
	console.log(biographyVal);
});

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
	personHair.style.backgroundImage = `url('${hairImgs[hairIndex]}')`;
});

hairNext.addEventListener('click', () => {
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
	personHair.style.backgroundImage = `url('${hairImgs[hairIndex]}')`;
});

clothesPrev.addEventListener('click', () => {
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
	personClothes.style.backgroundImage = `url('${clothesImgs[clothesIndex]}')`;
});

clothesNext.addEventListener('click', () => {
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
	personClothes.style.backgroundImage = `url('${clothesImgs[clothesIndex]}')`;
});