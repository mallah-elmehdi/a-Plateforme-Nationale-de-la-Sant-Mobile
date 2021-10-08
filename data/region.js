// --- SET UP
const region = require('../model/region');
// --- ERROR
const { newError } = require('../util/error');
// ==================================================================== GENERAL
// get the user document
async function getDocument(id) {
	try {
		return await region.findById(id).select('-password');
	} catch (error) {
		throw newError(500, "quelque chose s'est mal passé");
	}
}
module.exports = {
	getDocument,
};
