// SET UP
const provinceData = require('../../../data/province');
const santeInfantileData = require('../../../data/csr/rapport/santeInfantile');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// CARTE PROVINCE
async function carteSanteInfantileProvince(province, csrList) {
	try {
		var data = {
				enfantPrisesCharge: {
					data: carte.initCsrData(csrList),
				},
				vaccinationRr: {
					data: carte.initCsrData(csrList),
				},
				vaccinationPentavalent: {
					data: carte.initCsrData(csrList),
				},
				vaccinationBcg: {
					data: carte.initCsrData(csrList),
				},
				vitamineA: {
					data: carte.initCsrData(csrList),
				},
				vitamineD: {
					data: carte.initCsrData(csrList),
				},
				enfantsAvecInsuffisancePonderale: {
					data: carte.initCsrData(csrList),
				},
				enfantsAvecRetardCroissance: {
					data: carte.initCsrData(csrList),
				},
				diarrhe: {
					data: carte.initCsrData(csrList),
				},
				ira: {
					data: carte.initCsrData(csrList),
				},
				reference: {
					data: carte.initCsrData(csrList),
				},
			},
			santeInfantile =
				await santeInfantileData.getSanteInfantileByProvince(province);
		// santeInfantile
		for (let j = 0; j < santeInfantile.length; j++) {
			// santeInfantile element
			const santeInfantileElement = santeInfantile[j];
			// sum
			// enfantPrisesCharge
			data.enfantPrisesCharge.data[santeInfantileElement.csr.csr].value += santeInfantileElement.enfantPrisesCharge
			// vaccinationRr
			data.vaccinationRr.data[santeInfantileElement.csr.csr].value += santeInfantileElement.vaccination.pentavalent
			// vaccinationPentavalent
			data.vaccinationPentavalent.data[santeInfantileElement.csr.csr].value += santeInfantileElement.vaccination.rr
			// vaccinationBcg
			data.vaccinationBcg.data[santeInfantileElement.csr.csr].value += santeInfantileElement.vaccination.bcg
			// vitamineA
			data.vitamineA.data[santeInfantileElement.csr.csr].value += santeInfantileElement.vitamineA
			// vitamineD
			data.vitamineD.data[santeInfantileElement.csr.csr].value += santeInfantileElement.vitamineD
			// enfantsAvecInsuffisancePonderale
			data.enfantsAvecInsuffisancePonderale.data[santeInfantileElement.csr.csr].value += santeInfantileElement.enfantsAvecInsuffisancePonderale
			// enfantsAvecRetardCroissance
			data.enfantsAvecRetardCroissance.data[santeInfantileElement.csr.csr].value += santeInfantileElement.enfantsAvecRetardCroissance
			// diarrhe
			data.diarrhe.data[santeInfantileElement.csr.csr].value += santeInfantileElement.diarrhe
			// ira
			data.ira.data[santeInfantileElement.csr.csr].value += santeInfantileElement.ira
			// reference
			data.reference.data[santeInfantileElement.csr.csr].value += santeInfantileElement.reference
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function santeInfantile(req, res, next) {
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
		data.provinceData = await carteSanteInfantileProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/santeInfantile', {
			title:
				'Tableau de bord | Santé infantile | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'prestation',
			listItem: 'santeInfantile',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	santeInfantile,
};
