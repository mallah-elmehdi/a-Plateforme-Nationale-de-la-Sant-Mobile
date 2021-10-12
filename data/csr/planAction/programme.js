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
		return await programme.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET BY PROVINCE
async function getProgrammeByProvince(province) {
	try {
		// variable
		var today = new Date(),
			result = [];
		// get query
		var query = await programme
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

async function getProgrammeByRegion(region) {
	try {
		var today = new Date(),
			all = await programme
				.find({
					year: today.getFullYear(),
				})
				.populate({
					path: 'csr',
					select: '-email',
				}),
			out = [];
		for (let i = 0; i < all.length; i++) {
			const element = all[i];
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

// R
async function getProgramme() {
	try {
		var today = new Date();
		return await programme
			.find({
				year: today.getFullYear(),
			})
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
	getProgrammeByCsr,
	addUpdateProgramme,
	deleteProgrammeById,
	getProgrammeByProvince,
	getProgrammeByRegion,
	getProgramme
};
