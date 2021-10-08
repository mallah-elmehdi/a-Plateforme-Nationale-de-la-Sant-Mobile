// SET UP
const fs = require('fs');
const provinceData = require('../../../data/province');
const rapportData = require('../../../data/csr/rapport/rapport');

// ERROR
const { newError } = require('../../../util/error');

// JSON
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/province.json`)
);

function getProvinceCode(pro) {
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.province === pro) {
			return provinceElement.codeProvince;
		}
	}
}

// DATA REGION
async function dataProvince(province) {
	try {
		var codeProvince = getProvinceCode(province),
			data = {
				piluleNa: {
					data: { [codeProvince]: 0 },
				},
				piluleAa: {
					data: { [codeProvince]: 0 },
				},
				injectableNa: {
					data: { [codeProvince]: 0 },
				},
				injectableAa: {
					data: { [codeProvince]: 0 },
				},
				diuNa: {
					data: { [codeProvince]: 0 },
				},
				diuAa: {
					data: { [codeProvince]: 0 },
				},
				condomNa: {
					data: { [codeProvince]: 0 },
				},
				condomAa: {
					data: { [codeProvince]: 0 },
				},
				referenceDiu: {
					data: { [codeProvince]: 0 },
				},
				referenceLt: {
					data: { [codeProvince]: 0 },
				},
			},
			planificationFamiliale =
				await rapportData.getRapportByProvinceAndYear(
				province,
					'planificationFamiliale'
				);
		// planificationFamiliale
		for (let j = 0; j < planificationFamiliale.length; j++) {
			const planificationFamilialeElement = planificationFamiliale[j];
			data.piluleNa.data[codeProvince] +=
				planificationFamilialeElement.pilule.na;
			data.piluleAa.data[codeProvince] +=
				planificationFamilialeElement.pilule.aa;
			data.injectableNa.data[codeProvince] +=
				planificationFamilialeElement.injectable.na;
			data.injectableAa.data[codeProvince] +=
				planificationFamilialeElement.injectable.aa;
			data.diuNa.data[codeProvince] +=
				planificationFamilialeElement.diu.na;
			data.diuAa.data[codeProvince] +=
				planificationFamilialeElement.diu.aa;
			data.condomNa.data[codeProvince] +=
				planificationFamilialeElement.condom.na;
			data.condomAa.data[codeProvince] +=
				planificationFamilialeElement.condom.aa;
			data.referenceDiu.data[codeProvince] +=
				planificationFamilialeElement.reference.diu;
			data.referenceLt.data[codeProvince] +=
				planificationFamilialeElement.reference.lt;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// get the dashbord
async function planificationFamiliale(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the region
		data.document = await provinceData.getDocument(req.params.id);
		// list province

		// taux pdr visite
		data.carte = {
			province: await dataProvince(data.document.province),
		};
		// render the page
		res.status(200).render('province/dashboard/planificationFamiliale', {
			title:
				'Tableau de bord | Consultations médicales | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			codeProvince: getProvinceCode(data.document.province),
			page: 'dashboard',
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
