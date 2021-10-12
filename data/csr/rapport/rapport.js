// SET UP
const rapport = require('../../../model/csr/rapport/rapport');

// ERROR
const { newError } = require('../../../util/error');

// GET RAPPORT BY TRIMESTRE
async function getRapportByCsr(csr, trimestre) {
	try {
		// variables
		var today = new Date();
		// get submited trimestre
		return await rapport
			.findOne({
				csr,
				trimestre,
				year: today.getFullYear(),
			})
			.select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET SUBMITED RAPPORT
async function getRapportByProvince(trimestre, province) {
	try {
		// variables
		var today = new Date(),
			query = await rapport
				.find({
					trimestre,
					year: today.getFullYear(),
				})
				.populate({
					path: 'sortie csr',
					populate: {
						path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire detectionPrecoceCancer consultationMedical maladieDepiste autreActivite',
						select: '-email',
						populate: {
							path: 'pdrVisite csr',
							select: '-email',
						},
					},
					select: '-email',
				}),
			out = [];
		for (let i = 0; i < query.length; i++) {
			const element = query[i];
			if (element.csr.province === province) {
				out.push(element);
			}
		}
		return out;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET RAPPORT
async function getRapportByRegion(trimestre, region) {
	try {
		// variables
		var today = new Date(),
			query = await rapport
				.find({
					trimestre,
					year: today.getFullYear(),
				})
				.populate({
					path: 'sortie csr',
					populate: {
						path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire detectionPrecoceCancer consultationMedical maladieDepiste autreActivite',
						select: '-email',
						populate: {
							path: 'pdrVisite csr',
							select: '-email',
						},
					},
					select: '-email',
				}),
			out = [];
		for (let i = 0; i < query.length; i++) {
			const element = query[i];
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

// GET RAPPORT
async function getRapport(trimestre) {
	try {
		// variables
		var today = new Date();
		return await rapport
			.find({
				trimestre,
				year: today.getFullYear(),
			})
			.populate({
				path: 'sortie csr',
				populate: {
					path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire detectionPrecoceCancer consultationMedical maladieDepiste autreActivite',
					select: '-email',
					populate: {
						path: 'pdrVisite csr',
						select: '-email',
					},
				},
				select: '-email',
			});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	getRapportByCsr,
	getRapportByProvince,
	getRapportByRegion,
	getRapport,
};
