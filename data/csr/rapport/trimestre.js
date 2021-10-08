// --- SET UP
const rapport = require('../../../model/csr/rapport/rapport');

// --- ERROR
const { newError } = require('../../../util/error');

// ADD
async function addDataToTrimestre(csr, trimestre, body) {
	try {
		// update the body
		var today = new Date();
		// create a document
		var document = await rapport.findOneAndUpdate(
			{ csr, year: today.getFullYear(), trimestre },
			body,
			{
				upsert: true,
				new: true,
				setDefaultsOnInsert: true,
			}
		);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getTrimestreByCsr(csr, trimestre) {
	try {
		// variables
		var today = new Date();
		// return document
		return await rapport
			.findOne({
				csr,
				trimestre,
				year: today.getFullYear(),
			})
			.select('-csr')
			.populate({
				path: 'sortie',
				populate: [
					{
						path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire consultationMedical detectionPrecoceCancer maladieDepiste autreActivite',
						populate: 'pdrVisite',
					},
				],
			});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// SUBMIT
async function editTrimestreByCsr(csr, trimestre, sortie) {
	try {
		var today = new Date();
		// update the plan action
		return await rapport.findOneAndUpdate(
			{ csr, trimestre, year: today.getFullYear() },
			{
				$pullAll: {
					sortie: [sortie],
				},
			}
		);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	addDataToTrimestre,
	getTrimestreByCsr,
	editTrimestreByCsr,
};
