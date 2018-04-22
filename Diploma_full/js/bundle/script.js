window.addEventListener('DOMContentLoaded', function() {

	let modal = require('../parts/modal.js');
	let newCandidate = require('../parts/newCandidate.js');
	let fairVoting = require('../parts/fairVoting.js');
	let intervene = require('../parts/intervene.js');
	let recreateCandidate = require('../parts/recreateCandidate.js');

	modal();
	newCandidate();
	fairVoting();
	intervene();
	recreateCandidate();

});