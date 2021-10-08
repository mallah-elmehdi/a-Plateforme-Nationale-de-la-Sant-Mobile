// SET UP
const santeInfantile = require('../../../model/csr/rapport/santeInfantile');

// ERROR
const { newError } = require('../../../util/error');

// GET
async function getSanteInfantileBySortie(sortie) {
	try {
		return await santeInfantile.findOne({
			sortie,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET;
async function getSanteInfantileById(id) {
	try {
		return await santeInfantile.findById(id).select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addSanteInfantile(csr, sortie, trimestre, body) {
	try {
		// update the body
		body.csr = csr;
		body.trimestre = trimestre;
		body.sortie = sortie;
		body.enfantPrisesCharge =
			parseInt(body.vitamineA) +
			parseInt(body.vitamineD) +
			parseInt(body.enfantsAvecInsuffisancePonderale) +
			parseInt(body.enfantsAvecRetardCroissance) +
			parseInt(body.diarrhe) +
			parseInt(body.ira) +
			parseInt(body.vaccination.pentavalent) +
			parseInt(body.vaccination.rr) +
			parseInt(body.vaccination.bcg);
		// add document
		var document = await santeInfantile.create(body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// EDIT
async function editSanteInfantileById(id, body) {
	try {
		body.enfantPrisesCharge =
			parseInt(body.vitamineA) +
			parseInt(body.vitamineD) +
			parseInt(body.enfantsAvecInsuffisancePonderale) +
			parseInt(body.enfantsAvecRetardCroissance) +
			parseInt(body.diarrhe) +
			parseInt(body.ira) +
			parseInt(body.vaccination.pentavalent) +
			parseInt(body.vaccination.rr) +
			parseInt(body.vaccination.bcg);
		// edit document
		var document = await santeInfantile.findByIdAndUpdate(id, body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deleteSanteInfantileById(id) {
	try {
		// delete document
		return await santeInfantile.findByIdAndDelete(id);

	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	getSanteInfantileBySortie,
	addSanteInfantile,
	getSanteInfantileById,
	editSanteInfantileById,
	deleteSanteInfantileById,
};
