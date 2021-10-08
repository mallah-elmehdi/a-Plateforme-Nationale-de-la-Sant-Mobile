// SET UP
const sortie = require('../../../model/csr/rapport/sortie');

// ERROR
const { newError } = require('../../../util/error');

// GET
async function getSortieById(id) {
	try {
		// get the document
		return await sortie
			.findById(id)
			.select('-csr')
			.populate({
				path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire consultationMedical detectionPrecoceCancer maladieDepiste autreActivite',
				populate: {
					path: 'pdrVisite',
				},
			});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// NEW
async function newSortie(csr, trimestre) {
	try {
		// add document
		var document = await sortie.create({
			csr,
			trimestre,
		});
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getSortieSubmitedById(id) {
	try {
		return await sortie.findOne({ _id: id, submit: true });
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// SUBMIT
async function submitSortieById(id) {
	try {
		return await sortie.findByIdAndUpdate(id, { submit: true });
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addDataToSortie(id, body) {
	try {
		// create the document
		var document = await sortie.findByIdAndUpdate(id, body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// SUBMIT
async function deleteSortieById(id) {
	try {
		return await sortie.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	getSortieById,
	newSortie,
	getSortieSubmitedById,
	addDataToSortie,
	submitSortieById,
	deleteSortieById
};
