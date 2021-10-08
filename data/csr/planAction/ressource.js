// SET UP
const ressource = require('../../../model/csr/planAction/ressource');

// ERROR
const { newError } = require('../../../util/error');

// GET
async function getRessourceByCsr(csr) {
	try {
		var today = new Date()
		return await ressource
			.findOne({ csr, year: today.getFullYear() })
			.select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// ADD
async function addUpdateRessource(body, csr, id) {
	try {
		// add csr to the body object
		body.csr = csr;
		body.budget = {
			besoinCarburant: parseFloat(
				parseInt(body.budget.kmsParcourir) * 1.5
			),
			kmsParcourir: parseInt(body.budget.kmsParcourir),
		};
		// check if the id is null
		if (id) {
			var document = await ressource.findByIdAndUpdate(id, body);
		}
		// check if the id is not null
		else {
			var document = await ressource.create(body);
		}
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// // DELETE
// async function deleteRessourceById(id) {
// 	try {
// 		// delete the localite
// 		return await ressource.findByIdAndDelete(id);
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET
// async function getRessourceByYear() {
// 	try {
// 		var today = new Date();
// 		return await ressource
// 			.find({ year: today.getFullYear() })
// 			.populate({
// 				path: 'csr',
// 				select: '-password -email',
// 			});
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET
// async function getRessourceByRegionYear(region) {
// 	try {
// 		var today = new Date(),
// 			all = await ressource
// 				.find({ year: today.getFullYear() })
// 				.populate({
// 					path: 'csr',
// 					select: '-password -email',
// 				}),
// 			out = [];
// 		for (let i = 0; i < all.length; i++) {
// 			const element = all[i];
// 			if (element.csr.region === region) {
// 				out.push(element)
// 			}
// 		}
// 		return out
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET
// async function getRessourceByProvinceYear(province) {
// 	try {
// 		var today = new Date(),
// 			all = await ressource
// 				.find({ year: today.getFullYear() })
// 				.populate({
// 					path: 'csr',
// 					select: '-password -email',
// 				}),
// 			out = [];
// 		for (let i = 0; i < all.length; i++) {
// 			const element = all[i];
// 			if (element.csr.province === province) {
// 				out.push(element)
// 			}
// 		}
// 		return out
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// OUTPUT
module.exports = {
	getRessourceByCsr,
	addUpdateRessource,
	// deleteRessourceById,
	// getRessourceByYear,
	// getRessourceByRegionYear,
	// getRessourceByProvinceYear
};
