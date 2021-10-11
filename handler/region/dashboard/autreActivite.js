// SET UP
const regionData = require('../../../data/region');
const autreActiviteData = require('../../../data/csr/rapport/autreActivite');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');
const csr = require('../../../model/csr/csr');

// CARTE PROVINCE
async function carteAutreActiviteRegion(region, provinceList) {
	try {
		var data = {
				autreActivite: {
					data: carte.initCsrData(provinceList),
				},
			},
			autreActivite = await autreActiviteData.getAutreActiviteByRegion(
				region
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
		data.document = await regionData.getDocument(req.params.id);
		// variable
		var provinceList = carte.getProvinceListByRegion(data.document.region),
			codeRegion = carte.getCodeRegion(data.document.region);
		// carte
		data.regionData = await carteAutreActiviteRegion(
			data.document.region,
			provinceList
		);
		// render the page
		res.status(200).render('region/dashboard/autreActivite', {
			title: 'Tableau de bord | Autre activités | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			codeRegion,
			provinceList,
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
