// SET UP
const provinceData = require('../../../data/province');
const autreActiviteData = require('../../../data/csr/rapport/autreActivite');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');
const csr = require('../../../model/csr/csr');

// CARTE PROVINCE
async function carteAutreActiviteProvince(province, csrList) {
	try {
		var data = {
				autreActivite: {
					data: carte.initCsrData(csrList),
				},
			},
			autreActivite = await autreActiviteData.getAutreActiviteByProvince(
				province
			);
		// autreActivite
		for (let j = 0; j < autreActivite.length; j++) {
			// autreActivite element
			const autreActiviteElement = autreActivite[j];
			// sum
			if (!autreActiviteElement.ignore) {
				data.autreActivite.data[autreActiviteElement.csr.csr].value +=
					autreActiviteElement.activity.length;
				data.autreActivite.data[autreActiviteElement.csr.csr].activity =
					autreActiviteElement.activity;
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function autreActivite(req, res, next) {
	try {
		// variable
		var data = {},
			today = new Date();
		// get the document
		data.document = await provinceData.getDocument(req.params.id);
		// variable
		var csrList = carte.getCsrListByProvince(data.document.province),
			codeProvince = carte.getCodeProvince(data.document.province);
		// carte
		data.provinceData = await carteAutreActiviteProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/autreActivite', {
			title: 'Tableau de bord | Autre activités | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'prestation',
			listItem: 'autreActivite',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	autreActivite,
};
