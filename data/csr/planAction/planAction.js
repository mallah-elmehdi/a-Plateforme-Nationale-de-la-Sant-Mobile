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

// GET
// async function getPlanActionByRegion(region) {
// 	try {
// 		var today = new Date(),
// 			query = await planAction
// 				.find({ year: today.getFullYear() })
// 				.populate('csr population programme ressource ressourceHumain')
// 				.select('-email');
// 		resule = [];
// 		for (let i = 0; i < query.length; i++) {
// 			const element = query[i];
// 			if (element.csr.region === region) {
// 				resule.push(element);
// 			}
// 		}
// 		return resule;
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }

// GET BY PROVINCE
async function getPlanActionByProvince(province) {
	try {
		var today = new Date(),
			query = await planAction
				.find({ year: today.getFullYear() })
				.populate('csr population programme ressource ressourceHumain')
				.select('-email');
		resule = [];
		for (let i = 0; i < query.length; i++) {
			const element = query[i];
			if (element.csr.province === province) {
				resule.push(element);
			}
		}
		return resule;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	getPlanActionByCsr,
	getPlanActionSubmitedByCsr,
	addDataToPlanAction,
	submitPlanAction,
	getPlanActionByProvince,
	// addPlanAction,
	// getPlanActionByYear,
	// getPlanActionByRegionAndYear,
	// getPlanActionByProvinceAndYear
};
