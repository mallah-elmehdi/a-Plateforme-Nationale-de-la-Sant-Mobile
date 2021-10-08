// SET UP
const santeScolaire = require('../../../model/csr/rapport/santeScolaire');

// ERROR
const { newError } = require('../../../util/error');

async function getSanteScolaireBySortie(sortie) {
	try {
		return await santeScolaire.findOne({
			sortie,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getSanteScolaireById(id) {
	try {
		// get documet
		var document = await santeScolaire.findById(id).select('-csr');
		// get validated document
		return document;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addSanteScolaire(csr, sortie, trimestre, body) {
	try {
		// update the body
		body.csr = csr;
		body.trimestre = trimestre;
		body.sortie = sortie;
		// add document
		var document = await santeScolaire.create(body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// EDIT
async function editSanteScolaireById(id, body) {
	try {
		// edit document
		var document = await santeScolaire.findByIdAndUpdate(id, body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deleteSanteScolaireById(id) {
	try {
		// delete document
		return await santeScolaire.findByIdAndDelete(id);


	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	getSanteScolaireBySortie,
	addSanteScolaire,
	getSanteScolaireById,
	editSanteScolaireById,
	deleteSanteScolaireById
};
