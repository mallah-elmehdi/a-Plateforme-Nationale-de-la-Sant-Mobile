// SET UP
const csrData = require('../../../data/csr/csr');
const rapportData = require('../../../data/csr/rapport/rapport');

// GET
async function rapport(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the cs
		data.document = await csrData.getDocument(req.params.id);
		// init rapport
		data.rapport = {};
		// get the trimestre 1 of this year
		data.rapport.trimestre1 = await rapportData.getRapportByTrimestre(
			req.params.id,
			1
		);
		// get the trimestre 2 of this year
		data.rapport.trimestre2 = await rapportData.getRapportByTrimestre(
			req.params.id,
			2
		);
		// get the trimestre 3 of this year
		data.rapport.trimestre3 = await rapportData.getRapportByTrimestre(
			req.params.id,
			3
		);
		// get the trimestre 4 of this year
		data.rapport.trimestre4 = await rapportData.getRapportByTrimestre(
			req.params.id,
			4
		);
		// render the page
		res.status(200).render('csr/rapport/rapport', {
			// title
			title:
				data.document.csr +
				' | Rapport des activités des Unités Médical Mobile (UMM) | ' +
				today.getFullYear(),
			// url
			url: req.originalUrl,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	rapport,
};
