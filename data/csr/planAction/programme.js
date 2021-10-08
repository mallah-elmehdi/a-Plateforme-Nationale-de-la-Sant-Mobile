// SET UP
const programme = require('../../../model/csr/planAction/programme');

// ERROR
const { newError } = require('../../../util/error');

// GET
async function getProgrammeByCsr(csr) {
	try {
		var today = new Date();
		return await programme
			.find({ csr, year: today.getFullYear() })
			.select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addUpdateProgramme(body, csr, id) {
	try {
		// add csr to the body object
		body.csr = csr;
		// check if the id is null
		if (id) {
			var document = await programme.findByIdAndUpdate(id, body);
		}
		// check if the id is not null
		else {
			var document = await programme.create(body);
		}
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deleteProgrammeById(id) {
	try {
		return await programme.findByIdAndDelete(id)
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// async function getProgrammeByYear() {
// 	try {
// 		var today = new Date();
// 		return await programme
// 			.find({
// 				year: today.getFullYear(),
// 			})
// 			.populate({
// 				path: 'csr',
// 				select: '-email -password',
// 			});
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// async function getProgrammeByRegionAndYear(region) {
// 	try {
// 		var today = new Date(),
// 			all = await programme
// 				.find({
// 					year: today.getFullYear(),
// 				})
// 				.populate({
// 					path: 'csr',
// 					select: '-email -password',
// 				}),
// 			out = [];
// 		for (let i = 0; i < all.length; i++) {
// 			const element = all[i];
// 			if (element.csr.region === region) {
// 				out.push(element);
// 			}
// 		}
// 		return out
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// async function getProgrammeByProvinceAndYear(province) {
// 	try {
// 		var today = new Date(),
// 			all = await programme
// 				.find({
// 					year: today.getFullYear(),
// 				})
// 				.populate({
// 					path: 'csr',
// 					select: '-email -password',
// 				}),
// 			out = [];
// 		for (let i = 0; i < all.length; i++) {
// 			const element = all[i];
// 			if (element.csr.province === province) {
// 				out.push(element);
// 			}
// 		}
// 		return out
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET BY LOCALITE
// async function getProgrammeByCsrAndLocaliteAndYear(csr, localite, year) {
// 	try {
// 		return await programme
// 			.find({
// 				csr,
// 				year,
// 				localite,
// 			})
// 			.select('-csr')
// 			.populate('localite');
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // ADD LOCALTE
// async function addUpdateLocalite(body, csr, id) {
// 	try {
// 		var today = new Date();
// 		// add csr to the body object
// 		body.csr = csr;
// 		body.year = today.getFullYear();
// 		// check if the id is null
// 		if (id) {
// 			return await localite.findByIdAndUpdate(id, body);
// 		}
// 		// check if the id is not null
// 		return await localite.create(body);
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // DELETE LOCALTE
// async function deleteLocaliteById(id) {
// 	try {
// 		// delete the localite
// 		return await localite.findByIdAndDelete(id);
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// OUTPUT
module.exports = {
	getProgrammeByCsr,
	addUpdateProgramme,
	deleteProgrammeById,
	// getProgrammeByCsrAndLocaliteAndYear,
	// getProgrammeByRegionAndYear,
	// getProgrammeByProvinceAndYear,
	// getProgrammeByYear,
	// addUpdateLocalite,
};
