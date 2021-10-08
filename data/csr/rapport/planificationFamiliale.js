// SET UP
const planificationFamiliale = require('../../../model/csr/rapport/planificationFamiliale');

// ERROR
const { newError } = require('../../../util/error');

// REDIRECT
async function getPlanificationFamilialeBySortie(sortie) {
	try {
		return await planificationFamiliale.findOne({
			sortie,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getPlanificationFamilialeById(id) {
	try {
		return await planificationFamiliale.findById(id).select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addPlanificationFamiliale(csr, sortie, trimestre, body) {
	try {
		// update the body
		body.csr = csr;
		body.trimestre = trimestre;
		body.sortie = sortie;
		// add document
		var document = await planificationFamiliale.create(body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// EDIT
async function editPlanificationFamilialeById(id, body) {
	try {
		// edit document
		var document = await planificationFamiliale.findByIdAndUpdate(id, body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deletePlanificationFamilialeById(id) {
	try {
		// delete document
		return await planificationFamiliale.findByIdAndDelete(id);


	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	getPlanificationFamilialeBySortie,
	addPlanificationFamiliale,
	getPlanificationFamilialeById,
	editPlanificationFamilialeById,
	deletePlanificationFamilialeById,
};
