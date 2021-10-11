// SET UP
const provinceData = require('../../../data/province');
const planificationFamilialeData = require('../../../data/csr/rapport/planificationFamiliale');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// CARTE PROVINCE
async function cartePlanificationFamilialeProvince(province, csrList) {
	try {
		var data = {
				piluleNa: {
					data: carte.initCsrData(csrList),
				},
				piluleAa: {
					data: carte.initCsrData(csrList),
				},
				injectableNa: {
					data: carte.initCsrData(csrList),
				},
				injectableAa: {
					data: carte.initCsrData(csrList),
				},
				diuNa: {
					data: carte.initCsrData(csrList),
				},
				diuAa: {
					data: carte.initCsrData(csrList),
				},
				condomNa: {
					data: carte.initCsrData(csrList),
				},
				condomAa: {
					data: carte.initCsrData(csrList),
				},
				referenceDiu: {
					data: carte.initCsrData(csrList),
				},
				referenceLt: {
					data: carte.initCsrData(csrList),
				},
			},
			planificationFamiliale =
				await planificationFamilialeData.getPlanificationFamilialeByProvince(
					province
				);
		// planificationFamiliale
		for (let j = 0; j < planificationFamiliale.length; j++) {
			// planificationFamiliale element
			const planificationFamilialeElement = planificationFamiliale[j];
			// sum
			// piluleNa
			data.piluleNa.data[planificationFamilialeElement.csr.csr].value += planificationFamilialeElement.pilule.na
			// piluleAa
			data.piluleAa.data[planificationFamilialeElement.csr.csr].value += planificationFamilialeElement.pilule.aa
			// injectableNa
			data.injectableNa.data[planificationFamilialeElement.csr.csr].value += planificationFamilialeElement.injectable.na
			// injectableAa
			data.injectableAa.data[planificationFamilialeElement.csr.csr].value += planificationFamilialeElement.injectable.aa
			// diuNa
			data.diuNa.data[planificationFamilialeElement.csr.csr].value += planificationFamilialeElement.diu.na
			// diuAa
			data.diuAa.data[planificationFamilialeElement.csr.csr].value += planificationFamilialeElement.diu.aa
			// condomNa
			data.condomNa.data[planificationFamilialeElement.csr.csr].value += planificationFamilialeElement.condom.na
			// condomAa
			data.condomAa.data[planificationFamilialeElement.csr.csr].value += planificationFamilialeElement.condom.aa
			// referenceDiu
			data.referenceDiu.data[planificationFamilialeElement.csr.csr].value += planificationFamilialeElement.reference.diu
			// referenceLt
			data.referenceLt.data[planificationFamilialeElement.csr.csr].value += planificationFamilialeElement.reference.lt
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function planificationFamiliale(req, res, next) {
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
		data.provinceData = await cartePlanificationFamilialeProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/planificationFamiliale', {
			title:
				'Tableau de bord | Planification familiale | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'prestation',
			listItem: 'planificationFamiliale',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	planificationFamiliale,
};
