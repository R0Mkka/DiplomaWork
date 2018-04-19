let crimeBtn = document.getElementById('crime');

crimeBtn.addEventListener('click', () => {

	let first = 0.0,
		second = 0.0,
		third = 0.0,
		total = 0.0;

	first = rand();
	second = rand();
	third = rand();

	function rand() {
		return Math.round(Math.random() * 100);
	}

	total = first + second + third;

	let firstCandidate = getPercent(first),
		secondCandidate = getPercent(second),
		thirdCandidate = getPercent(third + (total * 0.25));

	function getPercent(number){
		return Math.round((100 / (total * 1.25)) * number);
	}

	let temp = 0;

	if (firstCandidate + secondCandidate + thirdCandidate == 99){

		temp = Math.random();

		if (temp <= 0.333) firstCandidate++;
		else if (temp <= 0.666) secondCandidate++;
		else thirdCandidate++;

	} else if (firstCandidate + secondCandidate + thirdCandidate == 101){

		temp = Math.random();

		if (temp <= 0.333) firstCandidate--;
		else if (temp <= 0.666) secondCandidate--;
		else thirdCandidate--;

	}

	countBlocks[0].innerHTML = firstCandidate + '%';
	countBlocks[1].innerHTML = secondCandidate + '%';
	countBlocks[2].innerHTML = thirdCandidate + '%';

	for (let i = 0; i < mainCards.length; i++){
		mainCards[i].classList.remove('main-cards-item-active');
	}

	if (firstCandidate > secondCandidate) {
		if (firstCandidate > thirdCandidate) mainCards[0].classList.add('main-cards-item-active');
		else mainCards[2].classList.add('main-cards-item-active');
	} else {
		if (secondCandidate > thirdCandidate) mainCards[1].classList.add('main-cards-item-active');
		else mainCards[2].classList.add('main-cards-item-active');
	}

	progressBlocks[0].style.height = `${firstCandidate}%`;
	progressBlocks[1].style.height = `${secondCandidate}%`;
	progressBlocks[2].style.height = `${thirdCandidate}%`;
});