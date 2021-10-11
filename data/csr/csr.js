// SET UP
const csr = require('../../model/csr/csr')

// ERROR
const { newError } = require('../../util/error')

// DOCUMENT
async function getDocument(id) {
    try {
        return await csr.findById(id);
    } catch (error) {
        throw newError(500, 'quelque chose s\'est mal passé')
    }
}

// PROVINCE
async function getCsrByProvince(province) {
    try {
        return await csr.find({province}).select('-email');
    } catch (error) {
        throw newError(500, 'quelque chose s\'est mal passé')
    }
}

// REGION
async function getCsrByRegion(region) {
    try {
        return await csr.find({region}).select('-email');
    } catch (error) {
        throw newError(500, 'quelque chose s\'est mal passé')
    }
}

// OUTPUT
module.exports = {
    getDocument,
	getCsrByProvince,
	getCsrByRegion
};
