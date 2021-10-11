// SET UP
const detectionPrecoceCancer = require('../../../model/csr/rapport/detectionPrecoceCancer');

// ERROR
const { newError } = require('../../../util/error');

// REDIRECT
async function getDetectionPrecoceCancerBySortie(sortie) {
	try {
		return await detectionPrecoceCancer.findOne({
			sortie,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getDetectionPrecoceCancerById(id) {
	try {
		return await detectionPrecoceCancer.findById(id).select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addDetectionPrecoceCancer(csr, sortie, trimestre, body) {
	try {
		// update the body
		body.csr = csr;
		body.trimestre = trimestre;
		body.sortie = sortie;
		// add document
		var document = await detectionPrecoceCancer.create(body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// EDIT
async function editDetectionPrecoceCancerById(id, body) {
	try {
		// edit document
		var document = await detectionPrecoceCancer.findByIdAndUpdate(id, body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deleteDetectionPrecoceCancerById(id) {
	try {
		// delete document
		return await detectionPrecoceCancer.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET BY PROVINCE
async function getDetectionPrecoceCancerByProvince(province) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await detectionPrecoceCancer
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

// OUTPUT
module.exports = {
	getDetectionPrecoceCancerBySortie,
	addDetectionPrecoceCancer,
	getDetectionPrecoceCancerById,
	editDetectionPrecoceCancerById,
	deleteDetectionPrecoceCancerById,
	getDetectionPrecoceCancerByProvince
};
