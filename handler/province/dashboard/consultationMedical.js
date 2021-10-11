// SET UP
const provinceData = require('../../../data/province');
const consultationMedicalData = require('../../../data/csr/rapport/consultationMedical');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// CARTE PROVINCE
async function carteConsultationMedicalProvince(province, csrList) {
	try {
		var data = {
				consultationRealiseMMoins5ans: {
					data: carte.initCsrData(csrList),
				},
				consultationRealiseMEntre5ans18ans: {
					data: carte.initCsrData(csrList),
				},
				consultationRealiseMPlus18ans: {
					data: carte.initCsrData(csrList),
				},

				consultationRealiseFMoins5ans: {
					data: carte.initCsrData(csrList),
				},
				consultationRealiseFEntre5ans18ans: {
					data: carte.initCsrData(csrList),
				},
				consultationRealiseFPlus18ans: {
					data: carte.initCsrData(csrList),
				},

				pecParPemMoins5ans: {
					data: carte.initCsrData(csrList),
				},
				pecParPemEntre5ans18ans: {
					data: carte.initCsrData(csrList),
				},
				pecParPemPlus18ans: {
					data: carte.initCsrData(csrList),
				},

				referenceConsSpecMoins5ans: {
					data: carte.initCsrData(csrList),
				},
				referenceConsSpecEntre5ans18ans: {
					data: carte.initCsrData(csrList),
				},
				referenceConsSpecPlus18ans: {
					data: carte.initCsrData(csrList),
				},

				referenceUrgenceMoins5ans: {
					data: carte.initCsrData(csrList),
				},
				referenceUrgenceEntre5ans18ans: {
					data: carte.initCsrData(csrList),
				},
				referenceUrgencePlus18ans: {
					data: carte.initCsrData(csrList),
				},

				referenceExLaboMoins5ans: {
					data: carte.initCsrData(csrList),
				},
				referenceExLaboEntre5ans18ans: {
					data: carte.initCsrData(csrList),
				},
				referenceExLaboPlus18ans: {
					data: carte.initCsrData(csrList),
				},

				referenceExRadioMoins5ans: {
					data: carte.initCsrData(csrList),
				},
				referenceExRadioEntre5ans18ans: {
					data: carte.initCsrData(csrList),
				},
				referenceExRadioPlus18ans: {
					data: carte.initCsrData(csrList),
				},

				budgetMedicamentDispenseEm: {
					data: carte.initCsrData(csrList),
				},
			},
			consultationMedical =
				await consultationMedicalData.getConsultationMedicalByProvince(
					province
				);
		// consultationMedical
		for (let j = 0; j < consultationMedical.length; j++) {
			// consultationMedical element
			const consultationMedicalElement = consultationMedical[j];
			// sum
			// consultationRealiseMMoins5ans
			data.consultationRealiseMMoins5ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.consultationRealise.m.moins5ans
			// consultationRealiseMEntre5ans18ans
			data.consultationRealiseMEntre5ans18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.consultationRealise.m.entre5ans18ans
			// consultationRealiseMPlus18ans
			data.consultationRealiseMPlus18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.consultationRealise.m.plus18ans
			// consultationRealiseFMoins5ans
			data.consultationRealiseFMoins5ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.consultationRealise.f.moins5ans
			// consultationRealiseFEntre5ans18ans
			data.consultationRealiseFEntre5ans18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.consultationRealise.f.entre5ans18ans
			// consultationRealiseFPlus18ans
			data.consultationRealiseFPlus18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.consultationRealise.f.plus18ans
			// pecParPemMoins5ans
			data.pecParPemMoins5ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.pecParPem.moins5ans
			// pecParPemEntre5ans18ans
			data.pecParPemEntre5ans18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.pecParPem.entre5ans18ans
			// pecParPemPlus18ans
			data.pecParPemPlus18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.pecParPem.plus18ans
			// referenceConsSpecMoins5ans
			data.referenceConsSpecMoins5ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.consSpec.moins5ans
			// referenceConsSpecEntre5ans18ans
			data.referenceConsSpecEntre5ans18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.consSpec.entre5ans18ans
			// referenceConsSpecPlus18ans
			data.referenceConsSpecPlus18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.consSpec.plus18ans
			// referenceUrgenceMoins5ans
			data.referenceUrgenceMoins5ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.urgence.moins5ans
			// referenceUrgenceEntre5ans18ans
			data.referenceUrgenceEntre5ans18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.urgence.entre5ans18ans
			// referenceUrgencePlus18ans
			data.referenceUrgencePlus18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.urgence.plus18ans
			// referenceExLaboMoins5ans
			data.referenceExLaboMoins5ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.exLabo.moins5ans
			// referenceExLaboEntre5ans18ans
			data.referenceExLaboEntre5ans18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.exLabo.entre5ans18ans
			// referenceExLaboPlus18ans
			data.referenceExLaboPlus18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.exLabo.plus18ans
			// referenceExRadioMoins5ans
			data.referenceExRadioMoins5ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.exRadio.moins5ans
			// referenceExRadioEntre5ans18ans
			data.referenceExRadioEntre5ans18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.exRadio.entre5ans18ans
			// referenceExRadioPlus18ans
			data.referenceExRadioPlus18ans.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.reference.exRadio.plus18ans
			// budgetMedicamentDispenseEm
			data.budgetMedicamentDispenseEm.data[consultationMedicalElement.csr.csr].value += consultationMedicalElement.budgetMedicamentDispenseEm
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function consultationMedical(req, res, next) {
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
		data.provinceData = await carteConsultationMedicalProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/consultationMedical', {
			title:
				'Tableau de bord | Consultations médicales | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'prestation',
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
