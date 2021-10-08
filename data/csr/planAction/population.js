// SET UP
const population = require('../../../model/csr/planAction/population');

// ERROR
const { newError } = require('../../../util/error');

// GET
async function getPopulationByCsr(csr) {
	try {
		var today = new Date();
		return await population
			.findOne({ csr, year: today.getFullYear() })
			.select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// ADD
async function addUpdatePopulation(body, csr, id) {
	try {
		// add csr to the body object
		body.csr = csr;
		// update
		if (id) {
			var document = await population.findByIdAndUpdate(id, body);
		}
		// add
		else {
			var document = await population.create(body);
		}
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}


// // GET
// async function getPopulationByYear() {
// 	try {
// 		var today = new Date();
// 		return await population
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
// async function getPopulationByRegionYear(region) {
// 	try {
// 		var today = new Date(),
// 			all = await population
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
// async function getPopulationByProvinceYear(province) {
// 	try {
// 		var today = new Date(),
// 			all = await population
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
	getPopulationByCsr,
	addUpdatePopulation,
	// getPopulationByYear,
	// getPopulationByRegionYear,
	// getPopulationByProvinceYear
};
