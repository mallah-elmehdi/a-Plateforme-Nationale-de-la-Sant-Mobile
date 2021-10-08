// SET UP
const ressourceHumain = require('../../../model/csr/planAction/ressourceHumain');

// ERROR
const { newError } = require('../../../util/error');

// GET
async function getRessourceHumainByCsr(csr) {
	try {
		var today = new Date();
		return await ressourceHumain
			.findOne({ csr, year: today.getFullYear() })
			.select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addUpdateRessourceHumain(body, csr, id) {
	try {
		// add csr to the body object
		body.csr = csr;
		// check if the id is null
		if (id) {
			var document = await ressourceHumain.findByIdAndUpdate(id, body);
		}
		// check if the id is not null
		else {
			var document = await ressourceHumain.create(body);
		}
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// // GET
// async function getRessourceHumainByProvinceYear(province) {
// 	try {
// 		var today = new Date(),
// 			all = await ressourceHumain
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
	getRessourceHumainByCsr,
	addUpdateRessourceHumain,
	// getRessourceHumainByProvinceYear,
};
