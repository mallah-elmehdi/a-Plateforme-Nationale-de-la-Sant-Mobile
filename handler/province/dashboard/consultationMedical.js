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
				consultationRealiseMMoins5ans: {
					data: { [codeProvince]: 0 },
				},
				consultationRealiseMPlus5ans: {
					data: { [codeProvince]: 0 },
				},
				consultationRealiseFMoins5ans: {
					data: { [codeProvince]: 0 },
				},
				consultationRealiseFPlus5ans: {
					data: { [codeProvince]: 0 },
				},
				pecParPemMoins5ans: {
					data: { [codeProvince]: 0 },
				},
				pecParPemPlus5ans: {
					data: { [codeProvince]: 0 },
				},
				referenceConsSpecMoins5ans: {
					data: { [codeProvince]: 0 },
				},
				referenceConsSpecPlus5ans: {
					data: { [codeProvince]: 0 },
				},
				referenceHospMoins5ans: {
					data: { [codeProvince]: 0 },
				},
				referenceHospPlus5ans: {
					data: { [codeProvince]: 0 },
				},
				referenceExLaboMoins5ans: {
					data: { [codeProvince]: 0 },
				},
				referenceExLaboPlus5ans: {
					data: { [codeProvince]: 0 },
				},
				referenceExRadioMoins5ans: {
					data: { [codeProvince]: 0 },
				},
				referenceExRadioPlus5ans: {
					data: { [codeProvince]: 0 },
				},
				budgetMedicamentDispenseEm: {
					data: { [codeProvince]: 0 },
				},
			},
			consultationMedical = await rapportData.getRapportByProvinceAndYear(
				province,
				'consultationMedical'
			);
		// ------------------------
		// province

		// consultationMedical
		for (let j = 0; j < consultationMedical.length; j++) {
			const consultationMedicalElement = consultationMedical[j];

			data.consultationRealiseMMoins5ans.data[codeProvince] +=
				consultationMedicalElement.consultationRealise.m.moins5ans;
			data.consultationRealiseMPlus5ans.data[codeProvince] +=
				consultationMedicalElement.consultationRealise.m.plus5ans;
			data.consultationRealiseFMoins5ans.data[codeProvince] +=
				consultationMedicalElement.consultationRealise.f.moins5ans;
			data.consultationRealiseFPlus5ans.data[codeProvince] +=
				consultationMedicalElement.consultationRealise.f.plus5ans;
			data.pecParPemMoins5ans.data[codeProvince] +=
				consultationMedicalElement.pecParPem.moins5ans;
			data.pecParPemPlus5ans.data[codeProvince] +=
				consultationMedicalElement.pecParPem.plus5ans;
			data.referenceConsSpecMoins5ans.data[codeProvince] +=
				consultationMedicalElement.reference.consSpec.moins5ans;
			data.referenceConsSpecPlus5ans.data[codeProvince] +=
				consultationMedicalElement.reference.consSpec.plus5ans;
			data.referenceHospMoins5ans.data[codeProvince] +=
				consultationMedicalElement.reference.hosp.moins5ans;
			data.referenceHospPlus5ans.data[codeProvince] +=
				consultationMedicalElement.reference.hosp.plus5ans;
			data.referenceExLaboMoins5ans.data[codeProvince] +=
				consultationMedicalElement.reference.exLabo.moins5ans;
			data.referenceExLaboPlus5ans.data[codeProvince] +=
				consultationMedicalElement.reference.exLabo.plus5ans;
			data.referenceExRadioMoins5ans.data[codeProvince] +=
				consultationMedicalElement.reference.exRadio.moins5ans;
			data.referenceExRadioPlus5ans.data[codeProvince] +=
				consultationMedicalElement.reference.exRadio.plus5ans;
			data.budgetMedicamentDispenseEm.data[codeProvince] +=
				consultationMedicalElement.budgetMedicamentDispenseEm;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// get the dashbord
async function consultationMedical(req, res, next) {
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
		res.status(200).render('province/dashboard/consultationMedical', {
			title:
				'Tableau de bord | Consultations médicales | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			codeProvince: getProvinceCode(data.document.province),
			page: 'dashboard',
			listItem: 'consultationMedical',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	consultationMedical,
};
