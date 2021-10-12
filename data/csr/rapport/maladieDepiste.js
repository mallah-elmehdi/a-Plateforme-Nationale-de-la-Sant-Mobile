// SET UP
const maladieDepiste = require('../../../model/csr/rapport/maladieDepiste');

// ERROR
const { newError } = require('../../../util/error');

// REDIRECT
async function getMaladieDepisteBySortie(sortie) {
	try {
		return await maladieDepiste.findOne({
			sortie,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getMaladieDepisteById(id) {
	try {
		return await maladieDepiste.findById(id).select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addMaladieDepiste(csr, sortie, trimestre, body) {
	try {
		// update the body
		body.csr = csr;
		body.trimestre = trimestre;
		body.sortie = sortie;
		// add document
		var document = await maladieDepiste.create(body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// EDIT
async function editMaladieDepisteById(id, body) {
	try {
		// edit document
		var document = await maladieDepiste.findByIdAndUpdate(id, body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deleteMaladieDepisteById(id) {
	try {
		// delete document
		return await maladieDepiste.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET BY PROVINCE
async function getMaladieDepisteByProvince(province) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await maladieDepiste
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
async function getMaladieDepisteByRegion(region) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await maladieDepiste
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
async function getMaladieDepiste() {
	try {
		// variable
		var today = new Date();
		return await maladieDepiste
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
	getMaladieDepisteBySortie,
	addMaladieDepiste,
	getMaladieDepisteById,
	editMaladieDepisteById,
	deleteMaladieDepisteById,
	getMaladieDepisteByProvince,
	getMaladieDepisteByRegion,
	getMaladieDepiste
};
