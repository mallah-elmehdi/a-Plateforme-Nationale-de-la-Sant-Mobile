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

// GET BY PROVINCE
async function getRessourceHumainByProvince(province) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await ressourceHumain
			.find({ year: today.getFullYear() })
			.populate({
				path: 'csr',
				select: '-email',
			});
		// get only result fo the province
		for (let i = 0; i < query.length; i++) {
			const element = query[i];
			if (element.csr.province === province) {
				result.push(element);
			}
		}
		return result;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET BY REGION
async function getRessourceHumainByRegion(region) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await ressourceHumain
			.find({ year: today.getFullYear() })
			.populate({
				path: 'csr',
				select: '-email',
			});
		// get only result fo the region
		for (let i = 0; i < query.length; i++) {
			const element = query[i];
			if (element.csr.region === region) {
				result.push(element);
			}
		}
		return result;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET BY REGION
async function getRessourceHumain() {
	try {
		// variable
		var today = new Date();
		// get query
		return await ressourceHumain
			.find({ year: today.getFullYear() })
			.populate({
				path: 'csr',
				select: '-email',
			});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	getRessourceHumainByCsr,
	addUpdateRessourceHumain,
	getRessourceHumainByProvince,
	getRessourceHumainByRegion,
	getRessourceHumain
};
