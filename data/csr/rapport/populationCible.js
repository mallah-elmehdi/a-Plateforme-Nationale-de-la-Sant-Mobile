// SET UP
const populationCible = require('../../../model/csr/rapport/populationCible');

// ERROR
const { newError } = require('../../../util/error');

// REDIRECT
async function getPopulationCibleBySortie(sortie) {
	try {
		return await populationCible.findOne({
			sortie,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// GET
async function getPopulationCibleById(id) {
	try {
		return await populationCible.findById(id).select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addPopulationCible(csr, sortie, trimestre, body) {
	try {
		// update the body
		body.csr = csr;
		body.trimestre = trimestre;
		body.sortie = sortie;
		// add document
		var document = await populationCible.create(body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// EDIT
async function editPopulationCibleById(id, body) {
	try {
		// edit document
		var document = await populationCible.findByIdAndUpdate(id, body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deletePopulationCibleById(id) {
	try {
		// delete document
		return await populationCible.findByIdAndDelete(id);

	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	getPopulationCibleBySortie,
	getPopulationCibleById,
	addPopulationCible,
	editPopulationCibleById,
	deletePopulationCibleById,
};
