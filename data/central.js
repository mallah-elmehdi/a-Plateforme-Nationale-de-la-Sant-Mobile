// --- SET UP
const central = require('../model/central');
// --- ERROR
const { newError } = require('../util/error');
// ==================================================================== GENERAL
// get the user document
async function getDocument(id) {
	try {
		return await central.findById(id);
	} catch (error) {
		throw newError(500, "quelque chose s'est mal passé");
	}
}
module.exports = {
	getDocument,
};
