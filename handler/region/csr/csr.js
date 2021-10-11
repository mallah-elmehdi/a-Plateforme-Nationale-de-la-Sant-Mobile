// SET UP
const regionData = require('../../../data/region');
const csrData = require('../../../data/csr/csr');

// ERROR
const { newError } = require('../../../util/error');

// GET
async function csrList(req, res, next) {
	try {
		// variable
		var data = {},
			today = new Date();
		// get the document
		data.document = await regionData.getDocument(req.params.id);
		// get csr
		data.csr = await csrData.getCsrByRegion(data.document.region);
		// render the page
		res.status(200).render('region/csr/csr', {
			title: 'Tableau de bord | Centre de santé | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	csrList,
};
