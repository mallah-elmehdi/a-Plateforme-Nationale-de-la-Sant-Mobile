// --- SET UP
const user = require('../model/user');
// --- ERROR
const { newError } = require('../util/error');
// ==================================================================== GENERAL
// get the user
async function getUserByEmailAndPassword(email, password) {
	try {
		return await user.findOne({ email, password }).select('-password');
	} catch (error) {
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// update user password
async function updatePassword(document, password) {
	try {
		return await user
			.findOneAndUpdate(
				{ document },
				{
					password,
				}
			)
			.select('-password');
	} catch (error) {
		throw newError(500, "quelque chose s'est mal passé");
	}
}
module.exports = {
	getUserByEmailAndPassword,
	updatePassword,
};
