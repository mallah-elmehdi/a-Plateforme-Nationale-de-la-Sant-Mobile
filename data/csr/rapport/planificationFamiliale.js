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

// GET BY PROVINCE
async function getPlanificationFamilialeByProvince(province) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await planificationFamiliale
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
async function getPlanificationFamilialeByRegion(region) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await planificationFamiliale
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
async function getPlanificationFamiliale() {
	try {
		// variable
		var today = new Date();
		// get query
		return await planificationFamiliale
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
	getPlanificationFamilialeBySortie,
	addPlanificationFamiliale,
	getPlanificationFamilialeById,
	editPlanificationFamilialeById,
	deletePlanificationFamilialeById,
	getPlanificationFamilialeByProvince,
	getPlanificationFamilialeByRegion,
	getPlanificationFamiliale
};
