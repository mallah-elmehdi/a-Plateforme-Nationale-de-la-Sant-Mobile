// SET UP
const pdrVisite = require('../../../model/csr/rapport/pdrVisite');

// ERROR
const { newError } = require('../../../util/error');

// GET
async function getPdrVisiteByCsrAndTrimestre(csr, trimestre) {
	try {
		var today = new Date();
		return await pdrVisite
			.find({
				csr,
				trimestre,
				year: today.getFullYear(),
			})
			.populate('pdrVisite')
			.select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addPdrVisite(csr, sortie, trimestre, body) {
	try {
		// update the body
		body.csr = csr;
		body.trimestre = trimestre;
		body.sortie = sortie;
		body.budgetCarburantEmConsomme = parseFloat(body.kmParcouru * 1.5);
		// add document
		var document = await pdrVisite.create(body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getPdrVisiteById(id) {
	try {
		return await pdrVisite
			.findById(id)
			.populate('pdrVisite')
			.select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// EDIT
async function editPdrVisiteById(id, body) {
	try {
		// edit document
		body.budgetCarburantEmConsomme = parseFloat(body.kmParcouru * 1.5);
		var document = await pdrVisite.findByIdAndUpdate(id, body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getPdrVisiteBySortie(sortie) {
	try {
		return await pdrVisite.findOne({
			sortie,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deletePdrVisiteById(id) {
	try {
		// delete document
		return await pdrVisite.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getPdrVisiteByRegion(region) {
	try {
		var today = new Date(),
			all = await pdrVisite
				.find({
					year: today.getFullYear(),
				})
				.populate({
					path: 'pdrVisite csr',
					select: '-email',
				});
		out = [];
		for (let i = 0; i < all.length; i++) {
			const element = all[i];
			if (element.csr.region === region) {
				out.push(element);
			}
		}
		return out;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getPdrVisite() {
	try {
		var today = new Date();
		return await pdrVisite
			.find({
				year: today.getFullYear(),
			})
			.populate({ path: 'pdrVisite csr', select: '-email' });
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}



// OUTPUT
module.exports = {
	getPdrVisiteByCsrAndTrimestre,
	addPdrVisite,
	getPdrVisiteById,
	editPdrVisiteById,
	getPdrVisiteBySortie,
	deletePdrVisiteById,
	getPdrVisiteByRegion,
	getPdrVisite
};
