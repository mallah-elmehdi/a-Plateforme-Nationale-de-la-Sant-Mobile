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

// OUTPUT
module.exports = {
    getDocument,
};
