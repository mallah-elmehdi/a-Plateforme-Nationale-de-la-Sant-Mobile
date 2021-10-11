// SET UP
const consultationMedical = require('../../../model/csr/rapport/consultationMedical');

// ERROR
const { newError } = require('../../../util/error');

// REDIRECT
async function getConsultationMedicalBySortie(sortie) {
	try {
		return await consultationMedical.findOne({
			sortie,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getConsultationMedicalById(id) {
	try {
		return await consultationMedical.findById(id).select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addConsultationMedical(csr, sortie, trimestre, body) {
	try {
		// update the body
		body.csr = csr;
		body.trimestre = trimestre;
		body.sortie = sortie;
		// add document
		var document = await consultationMedical.create(body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// EDIT
async function editConsultationMedicalById(id, body) {
	try {
		// edit document
		var document = await consultationMedical.findByIdAndUpdate(id, body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deleteConsultationMedicalById(id) {
	try {
		// delete document
		return await consultationMedical.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET BY PROVINCE
async function getConsultationMedicalByProvince(province) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await consultationMedical
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
async function getConsultationMedicalByRegion(region) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await consultationMedical
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

// OUTPUT
module.exports = {
	getConsultationMedicalBySortie,
	addConsultationMedical,
	getConsultationMedicalById,
	editConsultationMedicalById,
	deleteConsultationMedicalById,
	getConsultationMedicalByProvince,
	getConsultationMedicalByRegion
};
