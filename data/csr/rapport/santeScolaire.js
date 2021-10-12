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

// GET BY PROVINCE
async function getSanteScolaireByProvince(province) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await santeScolaire
			.find({ year: today.getFullYear() })
			.populate({
				path: 'csr',
				select: '-email',
			});
		// get only result fo the province
		for (let i = 0; i < query.length; i++) {
			const element = query[i];
			if (element.csr.province === province) {
				result.push(element);
			}
		}
		return result;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET BY REGION
async function getSanteScolaireByRegion(region) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await santeScolaire
			.find({ year: today.getFullYear() })
			.populate({
				path: 'csr',
				select: '-email',
			});
		// get only result fo the region
		for (let i = 0; i < query.length; i++) {
			const element = query[i];
			if (element.csr.region === region) {
				result.push(element);
			}
		}
		return result;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET BY REGION
async function getSanteScolaire() {
	try {
		// variable
		var today = new Date();
		return await santeScolaire
			.find({ year: today.getFullYear() })
			.populate({
				path: 'csr',
				select: '-email',
			});
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
	deleteSanteScolaireById,
	getSanteScolaireByProvince,
	getSanteScolaireByRegion,
	getSanteScolaire,
};
