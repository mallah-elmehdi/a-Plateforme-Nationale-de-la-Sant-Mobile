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
				diabeteCas: {
					data: { [codeProvince]: 0 },
				},
				diabeteCasPec: {
					data: { [codeProvince]: 0 },
				},
				diabeteReference: {
					data: { [codeProvince]: 0 },
				},
				htaCas: {
					data: { [codeProvince]: 0 },
				},
				htaCasPec: {
					data: { [codeProvince]: 0 },
				},
				htaReference: {
					data: { [codeProvince]: 0 },
				},
				angineCas: {
					data: { [codeProvince]: 0 },
				},
				angineCasPec: {
					data: { [codeProvince]: 0 },
				},
				angineReference: {
					data: { [codeProvince]: 0 },
				},
				carieCas: {
					data: { [codeProvince]: 0 },
				},
				carieCasPec: {
					data: { [codeProvince]: 0 },
				},
				carieReference: {
					data: { [codeProvince]: 0 },
				},
				parodontopathieCas: {
					data: { [codeProvince]: 0 },
				},
				parodontopathieCasPec: {
					data: { [codeProvince]: 0 },
				},
				parodontopathieReference: {
					data: { [codeProvince]: 0 },
				},
				maladieMentaleCas: {
					data: { [codeProvince]: 0 },
				},
				maladieMentaleCasPec: {
					data: { [codeProvince]: 0 },
				},
				maladieMentaleReference: {
					data: { [codeProvince]: 0 },
				},
				istCas: {
					data: { [codeProvince]: 0 },
				},
				istCasPec: {
					data: { [codeProvince]: 0 },
				},
				istReference: {
					data: { [codeProvince]: 0 },
				},
				raaAvecCarditesCas: {
					data: { [codeProvince]: 0 },
				},
				raaAvecCarditesCasPec: {
					data: { [codeProvince]: 0 },
				},
				raaAvecCarditesReference: {
					data: { [codeProvince]: 0 },
				},
				raaSansCarditesCas: {
					data: { [codeProvince]: 0 },
				},
				raaSansCarditesCasPec: {
					data: { [codeProvince]: 0 },
				},
				raaSansCarditesReference: {
					data: { [codeProvince]: 0 },
				},
				cancerSeinCas: {
					data: { [codeProvince]: 0 },
				},
				cancerSeinCasPec: {
					data: { [codeProvince]: 0 },
				},
				cancerSeinReference: {
					data: { [codeProvince]: 0 },
				},
				cancerColCas: {
					data: { [codeProvince]: 0 },
				},
				cancerColCasPec: {
					data: { [codeProvince]: 0 },
				},
				cancerColReference: {
					data: { [codeProvince]: 0 },
				},
				tuberculosePolmonaireCas: {
					data: { [codeProvince]: 0 },
				},
				tuberculosePolmonaireCasPec: {
					data: { [codeProvince]: 0 },
				},
				tuberculosePolmonaireReference: {
					data: { [codeProvince]: 0 },
				},
				tuberculoseExtraPolmonaireCas: {
					data: { [codeProvince]: 0 },
				},
				tuberculoseExtraPolmonaireCasPec: {
					data: { [codeProvince]: 0 },
				},
				tuberculoseExtraPolmonaireReference: {
					data: { [codeProvince]: 0 },
				},

				visiteEtablissementVisite: {
					data: { [codeProvince]: 0 },
				},
				visiteEleveVue: {
					data: { [codeProvince]: 0 },
				},
				eleveExamineVmsCible: {
					data: { [codeProvince]: 0 },
				},
				eleveExamineVmsRealisation: {
					data: { [codeProvince]: 0 },
				},
				lutteContreDeficienceVisuelleEchelleMetriqueCible: {
					data: { [codeProvince]: 0 },
				},
				lutteContreDeficienceVisuelleEchelleMetriqueRealisation: {
					data: { [codeProvince]: 0 },
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueCible: {
					data: { [codeProvince]: 0 },
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation: {
					data: { [codeProvince]: 0 },
				},
			},
			maladieDepiste = await rapportData.getRapportByProvinceAndYear(
				province,
				'maladieDepiste'
			);
		// ------------------------
		// province

		// maladieDepiste
		for (let j = 0; j < maladieDepiste.length; j++) {
			const maladieDepisteElement = maladieDepiste[j];
			data.diabeteCas.data[codeProvince] =
				maladieDepisteElement.diabete.cas;
			data.diabeteCasPec.data[codeProvince] =
				maladieDepisteElement.diabete.casPec;
			data.diabeteReference.data[codeProvince] =
				maladieDepisteElement.diabete.reference;
			data.htaCas.data[codeProvince] = maladieDepisteElement.hta.cas;
			data.htaCasPec.data[codeProvince] =
				maladieDepisteElement.hta.casPec;
			data.htaReference.data[codeProvince] =
				maladieDepisteElement.hta.reference;
			data.angineCas.data[codeProvince] =
				maladieDepisteElement.angine.cas;
			data.angineCasPec.data[codeProvince] =
				maladieDepisteElement.angine.casPec;
			data.angineReference.data[codeProvince] =
				maladieDepisteElement.angine.reference;
			data.carieCas.data[codeProvince] = maladieDepisteElement.carie.cas;
			data.carieCasPec.data[codeProvince] =
				maladieDepisteElement.carie.casPec;
			data.carieReference.data[codeProvince] =
				maladieDepisteElement.carie.reference;
			data.parodontopathieCas.data[codeProvince] =
				maladieDepisteElement.parodontopathie.cas;
			data.parodontopathieCasPec.data[codeProvince] =
				maladieDepisteElement.parodontopathie.casPec;
			data.parodontopathieReference.data[codeProvince] =
				maladieDepisteElement.parodontopathie.reference;
			data.maladieMentaleCas.data[codeProvince] =
				maladieDepisteElement.maladieMentale.cas;
			data.maladieMentaleCasPec.data[codeProvince] =
				maladieDepisteElement.maladieMentale.casPec;
			data.maladieMentaleReference.data[codeProvince] =
				maladieDepisteElement.maladieMentale.reference;
			data.istCas.data[codeProvince] = maladieDepisteElement.ist.cas;
			data.istCasPec.data[codeProvince] =
				maladieDepisteElement.ist.casPec;
			data.istReference.data[codeProvince] =
				maladieDepisteElement.ist.reference;
			data.raaAvecCarditesCas.data[codeProvince] =
				maladieDepisteElement.raa.avecCardites.cas;
			data.raaAvecCarditesCasPec.data[codeProvince] =
				maladieDepisteElement.raa.avecCardites.casPec;
			data.raaAvecCarditesReference.data[codeProvince] =
				maladieDepisteElement.raa.avecCardites.reference;
			data.raaSansCarditesCas.data[codeProvince] =
				maladieDepisteElement.raa.sansCardites.cas;
			data.raaSansCarditesCasPec.data[codeProvince] =
				maladieDepisteElement.raa.sansCardites.casPec;
			data.raaSansCarditesReference.data[codeProvince] =
				maladieDepisteElement.raa.sansCardites.reference;
			data.cancerSeinCas.data[codeProvince] =
				maladieDepisteElement.cancer.sein.cas;
			data.cancerSeinCasPec.data[codeProvince] =
				maladieDepisteElement.cancer.sein.casPec;
			data.cancerSeinReference.data[codeProvince] =
				maladieDepisteElement.cancer.sein.reference;
			data.cancerColCas.data[codeProvince] =
				maladieDepisteElement.cancer.col.cas;
			data.cancerColCasPec.data[codeProvince] =
				maladieDepisteElement.cancer.col.casPec;
			data.cancerColReference.data[codeProvince] =
				maladieDepisteElement.cancer.col.reference;
			data.tuberculosePolmonaireCas.data[codeProvince] =
				maladieDepisteElement.tuberculose.polmonaire.cas;
			data.tuberculosePolmonaireCasPec.data[codeProvince] =
				maladieDepisteElement.tuberculose.polmonaire.casPec;
			data.tuberculosePolmonaireReference.data[codeProvince] =
				maladieDepisteElement.tuberculose.polmonaire.reference;
			data.tuberculoseExtraPolmonaireCas.data[codeProvince] =
				maladieDepisteElement.tuberculose.extraPolmonaire.cas;
			data.tuberculoseExtraPolmonaireCasPec.data[codeProvince] =
				maladieDepisteElement.tuberculose.extraPolmonaire.casPec;
			data.tuberculoseExtraPolmonaireReference.data[codeProvince] =
				maladieDepisteElement.tuberculose.extraPolmonaire.reference;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// get the dashbord
async function maladieDepiste(req, res, next) {
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
		res.status(200).render('province/dashboard/maladieDepiste', {
			title:
				'Tableau de bord | Maladies dépistées | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			codeProvince: getProvinceCode(data.document.province),
			page: 'dashboard',
			listItem: 'maladieDepiste',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	maladieDepiste,
};
