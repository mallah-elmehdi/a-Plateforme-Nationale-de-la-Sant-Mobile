// SET UP
const ressourceHumainMobile = require('../../../model/csr/rapport/ressourceHumainMobile');

// ERROR
const { newError } = require('../../../util/error');

// GET
async function getRessourceHumainMobileById(id) {
	try {
		return await ressourceHumainMobile.findById(id).select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

async function getRessourceHumainMobileBySortie(sortie) {
	try {
		return await ressourceHumainMobile.findOne({
			sortie,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addRessourceHumainMobile(csr, sortie, trimestre, body) {
	try {
		// update the body
		body.csr = csr;
		body.trimestre = trimestre;
		body.sortie = sortie;
		// add document
		var document = await ressourceHumainMobile.create(body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// EDIT
async function editRessourceHumainMobileById(id, body) {
	try {
		// edit document
		var document = await ressourceHumainMobile.findByIdAndUpdate(id, body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deleteRessourceHumainMobileById(id) {
	try {
		// delete document
		return await ressourceHumainMobile.findByIdAndDelete(id);

	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	getRessourceHumainMobileBySortie,
	addRessourceHumainMobile,
	getRessourceHumainMobileById,
	editRessourceHumainMobileById,
	deleteRessourceHumainMobileById
};
