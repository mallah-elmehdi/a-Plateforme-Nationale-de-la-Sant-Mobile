// SET UP
const rapport = require('../../../model/csr/rapport/rapport');

// ERROR
const { newError } = require('../../../util/error');

// GET RAPPORT BY TRIMESTRE
async function getRapportByTrimestre(csr, trimestre) {
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

// // ADD
// async function addRapport(csr, trimestre, body) {
// 	try {
// 		// update the body
// 		body.csr = csr;
// 		body.trimestre = trimestre;
// 		body.$addToSet = { sortie: body.sortie };
// 		// create the document
// 		return await rapport.create(body);
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // EDIT
// async function editRapport(csr, trimestre, body) {
// 	try {
// 		// variables
// 		var today = new Date();
// 		// update the document
// 		return await rapport.findOneAndUpdate(
// 			{
// 				csr,
// 				trimestre,
// 				year: today.getFullYear(),
// 			},
// 			body
// 		);
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET SUBMITED RAPPORT
// async function getSubmitedRapportByYear(trimestre) {
// 	try {
// 		// variables
// 		var today = new Date();
// 		// get submited trimestre
// 		return await rapport
// 			.find({
// 				trimestre,
// 				year: today.getFullYear(),
// 				submit: true,
// 			})
// 			.populate({
// 				path: 'sortie csr',
// 				populate: {
// 					path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire consultationMedical maladieDepiste autreActivite',
// 				},
// 				select: '-password -_id -email -updatedAt -createdAt',
// 			});
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET SUBMITED RAPPORT
// async function getRapportByYear(populateFeild) {
// 	try {
// 		// variables
// 		var today = new Date(),
// 			out = [];
// 		// get submited trimestre

// 		var all = await rapport
// 			.find({
// 				year: today.getFullYear(),
// 				submit: true,
// 			})
// 			.populate({
// 				path: 'sortie',
// 				populate: {
// 					path: populateFeild,
// 					populate: {
// 						path: 'csr',
// 						select: '-password -_id -email -updatedAt -createdAt',
// 					},
// 				},
// 			});
// 		for (let i = 0; i < all.length; i++) {
// 			var allElement = all[i];
// 			for (let j = 0; j < allElement.sortie.length; j++) {
// 				var feildElement = allElement.sortie[j];
// 				out.push(feildElement[populateFeild]);
// 			}
// 		}
// 		return out;
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET SUBMITED RAPPORT
// async function getRapportByRegionAndYear(region, populateFeild) {
// 	try {
// 		// variables
// 		var today = new Date(),
// 			out = [];
// 		// get submited trimestre
// 		var all = await rapport
// 			.find({
// 				year: today.getFullYear(),
// 				submit: true,
// 			})
// 			.populate({
// 				path: 'sortie',
// 				populate: {
// 					path: populateFeild,
// 					populate: {
// 						path: 'csr',
// 						select: '-password -_id -email -updatedAt -createdAt',
// 					},
// 				},
// 			});
// 		for (let i = 0; i < all.length; i++) {
// 			var allElement = all[i];
// 			for (let j = 0; j < allElement.sortie.length; j++) {
// 				var feildElement = allElement.sortie[j];
// 				if (feildElement[populateFeild].csr.region === region) {
// 					out.push(feildElement[populateFeild]);
// 				}
// 			}
// 		}
// 		return out;
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// async function getRapportByProvinceAndYear(province, populateFeild) {
// 	try {
// 		// variables
// 		var today = new Date(),
// 			out = [];
// 		// get submited trimestre
// 		var all = await rapport
// 			.find({
// 				year: today.getFullYear(),
// 				submit: true,
// 			})
// 			.populate({
// 				path: 'sortie',
// 				populate: {
// 					path: populateFeild,
// 					populate: {
// 						path: 'csr',
// 						select: '-password -_id -email -updatedAt -createdAt',
// 					},
// 				},
// 			});
// 		for (let i = 0; i < all.length; i++) {
// 			var allElement = all[i];
// 			for (let j = 0; j < allElement.sortie.length; j++) {
// 				var feildElement = allElement.sortie[j];
// 				if (feildElement[populateFeild].csr.province === province) {
// 					out.push(feildElement[populateFeild]);
// 				}
// 			}
// 		}
// 		return out;
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET SUBMITED RAPPORT
// async function getSubmitedRapportByYearDash(trimestre) {
// 	try {
// 		// variables
// 		var today = new Date();
// 		// get submited trimestre
// 		return await rapport
// 			.find({
// 				trimestre,
// 				year: today.getFullYear(),
// 				submit: true,
// 			})
// 			.populate({
// 				path: 'sortie csr',
// 				populate: {
// 					path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire consultationMedical maladieDepiste autreActivite',
// 					select: '-password -_id -email -updatedAt -createdAt',
// 					populate: {
// 						path: 'pdrVisite csr',
// 						select: '-password  -email -updatedAt -createdAt',
// 					},
// 				},
// 				select: '-password -_id -email -updatedAt -createdAt',
// 			});
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET SUBMITED RAPPORT
// async function getSubmitedRapportByRegionAndYearDash(trimestre, region) {
// 	try {
// 		// variables
// 		var today = new Date(),
// 			all = await rapport
// 				.find({
// 					trimestre,
// 					year: today.getFullYear(),
// 					submit: true,
// 				})
// 				.populate({
// 					path: 'sortie csr',
// 					populate: {
// 						path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire consultationMedical maladieDepiste autreActivite',
// 						select: '-password -_id -email -updatedAt -createdAt',
// 						populate: {
// 							path: 'pdrVisite csr',
// 							select: '-password  -email -updatedAt -createdAt',
// 						},
// 					},
// 					select: '-password -_id -email -updatedAt -createdAt',
// 				}),
// 			out = [];
// 		for (let i = 0; i < all.length; i++) {
// 			const element = all[i];
// 			if (element.csr.region === region) {
// 				out.push(element);
// 			}
// 		}
// 		return out;
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET SUBMITED RAPPORT
// async function getSubmitedRapportByProvinceAndYearDash(trimestre, province) {
// 	try {
// 		// variables
// 		var today = new Date(),
// 			all = await rapport
// 				.find({
// 					trimestre,
// 					year: today.getFullYear(),
// 					submit: true,
// 				})
// 				.populate({
// 					path: 'sortie csr',
// 					populate: {
// 						path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire consultationMedical maladieDepiste autreActivite',
// 						select: '-password -_id -email -updatedAt -createdAt',
// 						populate: {
// 							path: 'pdrVisite csr',
// 							select: '-password  -email -updatedAt -createdAt',
// 						},
// 					},
// 					select: '-password -_id -email -updatedAt -createdAt',
// 				}),
// 			out = [];
// 		for (let i = 0; i < all.length; i++) {
// 			const element = all[i];
// 			if (element.csr.province === province) {
// 				out.push(element);
// 			}
// 		}
// 		return out;
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// OUTPUT
module.exports = {
	getRapportByTrimestre,
	getRapportByProvince,
	getRapportByRegion
};
