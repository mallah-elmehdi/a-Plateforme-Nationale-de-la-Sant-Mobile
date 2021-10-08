// SET UP
const planAction = require('../../../model/csr/planAction/planAction');

// ERROR
const { newError } = require('../../../util/error');

// GET
async function getPlanActionByCsr(csr) {
	try {
		var today = new Date();
		return await planAction
			.findOne({ csr, year: today.getFullYear() })
			.populate('population ressource ressourceHumain programme');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET SUBMITED
async function getPlanActionSubmitedByCsr(csr) {
	try {
		var today = new Date();
		return await planAction.findOne({
			csr,
			year: today.getFullYear(),
			submit: true,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD DATA
async function addDataToPlanAction(csr, body) {
	try {
		var today = new Date();
		return await planAction.findOneAndUpdate(
			{
				csr,
				year: today.getFullYear(),
			},
			body,
			{ upsert: true, new: true, setDefaultsOnInsert: true }
		);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// SUBMIT
async function submitPlanAction(csr) {
	try {
		// update the plan action
		return await planAction.findOneAndUpdate(
			{ csr },
			{
				submit: true,
			}
		);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// // GET
// async function getPlanActionByYear() {
// 	try {
// 		var today = new Date();
// 		return await planAction
// 			.find({ year: today.getFullYear() })
// 			.populate({
// 				path: 'csr population programme ressource ressourceHumain',
// 				select: '-password -email -_id -__v -createdAt -updatedAt',
// 				populate: {
// 					path: 'localite',
// 					select: '-password -email -_id -__v -createdAt -updatedAt -csr',
// 				},
// 			})
// 			.select('-__v -_id -createdAt -updatedAt');
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// // GET
// async function getPlanActionByRegionAndYear(region) {
// 	try {
// 		var today = new Date(),
// 			all = await planAction
// 				.find({ year: today.getFullYear() })
// 				.populate({
// 					path: 'csr population programme ressource ressourceHumain',
// 					select: '-password -email -_id -__v -createdAt -updatedAt',
// 					populate: {
// 						path: 'localite',
// 						select: '-password -email -_id -__v -createdAt -updatedAt -csr',
// 					},
// 				})
// 				.select('-__v -_id -createdAt -updatedAt'),
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

// // GET
// async function getPlanActionByProvinceAndYear(province) {
// 	try {
// 		var today = new Date(),
// 			all = await planAction
// 				.find({ year: today.getFullYear() })
// 				.populate({
// 					path: 'csr population programme ressource ressourceHumain',
// 					select: '-password -email -_id -__v -createdAt -updatedAt',
// 					populate: {
// 						path: 'localite',
// 						select: '-password -email -_id -__v -createdAt -updatedAt -csr',
// 					},
// 				})
// 				.select('-__v -_id -createdAt -updatedAt'),
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

// OUTPUT
module.exports = {
	getPlanActionByCsr,
	getPlanActionSubmitedByCsr,
	addDataToPlanAction,
	submitPlanAction,
	// addPlanAction,
	// getPlanActionByYear,
	// getPlanActionByRegionAndYear,
	// getPlanActionByProvinceAndYear
};
