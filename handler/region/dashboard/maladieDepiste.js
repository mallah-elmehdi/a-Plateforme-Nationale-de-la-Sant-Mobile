// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const rapportData = require('../../../data/csr/rapport/rapport');

// ERROR
const { newError } = require('../../../util/error');

// JSON
const region = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/region.json`)
);
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/province.json`)
);

function getRegionCode(reg) {
	for (let i = 0; i < region.length; i++) {
		const regElement = region[i];
		if (regElement.region === reg) {
			return regElement.codeRegion;
		}
	}
}

function getProvinceList(reg) {
	var list = [];
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.region === reg) {
			list.push(provinceElement.codeProvince);
		}
	}
	return list;
}

function getDataInit(list) {
	var datainit = {};
	for (let i = 0; i < list.length; i++) {
		const listElement = list[i];
		datainit[listElement] = 0;
	}
	return datainit;
}

function getProvinceCode(pro) {
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.province === pro) {
			return provinceElement.codeProvince;
		}
	}
}
// DATA REGION
async function dataRegion(region) {
	try {
		var codeRegion = getRegionCode(region),
			data = {
				diabeteCas: {
					data: { [codeRegion]: 0 },
				},
				diabeteCasPec: {
					data: { [codeRegion]: 0 },
				},
				diabeteReference: {
					data: { [codeRegion]: 0 },
				},
				htaCas: {
					data: { [codeRegion]: 0 },
				},
				htaCasPec: {
					data: { [codeRegion]: 0 },
				},
				htaReference: {
					data: { [codeRegion]: 0 },
				},
				angineCas: {
					data: { [codeRegion]: 0 },
				},
				angineCasPec: {
					data: { [codeRegion]: 0 },
				},
				angineReference: {
					data: { [codeRegion]: 0 },
				},
				carieCas: {
					data: { [codeRegion]: 0 },
				},
				carieCasPec: {
					data: { [codeRegion]: 0 },
				},
				carieReference: {
					data: { [codeRegion]: 0 },
				},
				parodontopathieCas: {
					data: { [codeRegion]: 0 },
				},
				parodontopathieCasPec: {
					data: { [codeRegion]: 0 },
				},
				parodontopathieReference: {
					data: { [codeRegion]: 0 },
				},
				maladieMentaleCas: {
					data: { [codeRegion]: 0 },
				},
				maladieMentaleCasPec: {
					data: { [codeRegion]: 0 },
				},
				maladieMentaleReference: {
					data: { [codeRegion]: 0 },
				},
				istCas: {
					data: { [codeRegion]: 0 },
				},
				istCasPec: {
					data: { [codeRegion]: 0 },
				},
				istReference: {
					data: { [codeRegion]: 0 },
				},
				raaAvecCarditesCas: {
					data: { [codeRegion]: 0 },
				},
				raaAvecCarditesCasPec: {
					data: { [codeRegion]: 0 },
				},
				raaAvecCarditesReference: {
					data: { [codeRegion]: 0 },
				},
				raaSansCarditesCas: {
					data: { [codeRegion]: 0 },
				},
				raaSansCarditesCasPec: {
					data: { [codeRegion]: 0 },
				},
				raaSansCarditesReference: {
					data: { [codeRegion]: 0 },
				},
				cancerSeinCas: {
					data: { [codeRegion]: 0 },
				},
				cancerSeinCasPec: {
					data: { [codeRegion]: 0 },
				},
				cancerSeinReference: {
					data: { [codeRegion]: 0 },
				},
				cancerColCas: {
					data: { [codeRegion]: 0 },
				},
				cancerColCasPec: {
					data: { [codeRegion]: 0 },
				},
				cancerColReference: {
					data: { [codeRegion]: 0 },
				},
				tuberculosePolmonaireCas: {
					data: { [codeRegion]: 0 },
				},
				tuberculosePolmonaireCasPec: {
					data: { [codeRegion]: 0 },
				},
				tuberculosePolmonaireReference: {
					data: { [codeRegion]: 0 },
				},
				tuberculoseExtraPolmonaireCas: {
					data: { [codeRegion]: 0 },
				},
				tuberculoseExtraPolmonaireCasPec: {
					data: { [codeRegion]: 0 },
				},
				tuberculoseExtraPolmonaireReference: {
					data: { [codeRegion]: 0 },
				},

				visiteEtablissementVisite: {
					data: { [codeRegion]: 0 },
				},
				visiteEleveVue: {
					data: { [codeRegion]: 0 },
				},
				eleveExamineVmsCible: {
					data: { [codeRegion]: 0 },
				},
				eleveExamineVmsRealisation: {
					data: { [codeRegion]: 0 },
				},
				lutteContreDeficienceVisuelleEchelleMetriqueCible: {
					data: { [codeRegion]: 0 },
				},
				lutteContreDeficienceVisuelleEchelleMetriqueRealisation: {
					data: { [codeRegion]: 0 },
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueCible: {
					data: { [codeRegion]: 0 },
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation: {
					data: { [codeRegion]: 0 },
				},
			},
			maladieDepiste = await rapportData.getRapportByRegionAndYear(
				region,
				'maladieDepiste'
			);
		// ------------------------
		// maladieDepiste
		for (let j = 0; j < maladieDepiste.length; j++) {
			const maladieDepisteElement = maladieDepiste[j];

			data.diabeteCas.data[codeRegion] =
				maladieDepisteElement.diabete.cas;
			data.diabeteCasPec.data[codeRegion] =
				maladieDepisteElement.diabete.casPec;
			data.diabeteReference.data[codeRegion] =
				maladieDepisteElement.diabete.reference;
			data.htaCas.data[codeRegion] = maladieDepisteElement.hta.cas;
			data.htaCasPec.data[codeRegion] = maladieDepisteElement.hta.casPec;
			data.htaReference.data[codeRegion] =
				maladieDepisteElement.hta.reference;
			data.angineCas.data[codeRegion] = maladieDepisteElement.angine.cas;
			data.angineCasPec.data[codeRegion] =
				maladieDepisteElement.angine.casPec;
			data.angineReference.data[codeRegion] =
				maladieDepisteElement.angine.reference;
			data.carieCas.data[codeRegion] = maladieDepisteElement.carie.cas;
			data.carieCasPec.data[codeRegion] =
				maladieDepisteElement.carie.casPec;
			data.carieReference.data[codeRegion] =
				maladieDepisteElement.carie.reference;
			data.parodontopathieCas.data[codeRegion] =
				maladieDepisteElement.parodontopathie.cas;
			data.parodontopathieCasPec.data[codeRegion] =
				maladieDepisteElement.parodontopathie.casPec;
			data.parodontopathieReference.data[codeRegion] =
				maladieDepisteElement.parodontopathie.reference;
			data.maladieMentaleCas.data[codeRegion] =
				maladieDepisteElement.maladieMentale.cas;
			data.maladieMentaleCasPec.data[codeRegion] =
				maladieDepisteElement.maladieMentale.casPec;
			data.maladieMentaleReference.data[codeRegion] =
				maladieDepisteElement.maladieMentale.reference;
			data.istCas.data[codeRegion] = maladieDepisteElement.ist.cas;
			data.istCasPec.data[codeRegion] = maladieDepisteElement.ist.casPec;
			data.istReference.data[codeRegion] =
				maladieDepisteElement.ist.reference;
			data.raaAvecCarditesCas.data[codeRegion] =
				maladieDepisteElement.raa.avecCardites.cas;
			data.raaAvecCarditesCasPec.data[codeRegion] =
				maladieDepisteElement.raa.avecCardites.casPec;
			data.raaAvecCarditesReference.data[codeRegion] =
				maladieDepisteElement.raa.avecCardites.reference;
			data.raaSansCarditesCas.data[codeRegion] =
				maladieDepisteElement.raa.sansCardites.cas;
			data.raaSansCarditesCasPec.data[codeRegion] =
				maladieDepisteElement.raa.sansCardites.casPec;
			data.raaSansCarditesReference.data[codeRegion] =
				maladieDepisteElement.raa.sansCardites.reference;
			data.cancerSeinCas.data[codeRegion] =
				maladieDepisteElement.cancer.sein.cas;
			data.cancerSeinCasPec.data[codeRegion] =
				maladieDepisteElement.cancer.sein.casPec;
			data.cancerSeinReference.data[codeRegion] =
				maladieDepisteElement.cancer.sein.reference;
			data.cancerColCas.data[codeRegion] =
				maladieDepisteElement.cancer.col.cas;
			data.cancerColCasPec.data[codeRegion] =
				maladieDepisteElement.cancer.col.casPec;
			data.cancerColReference.data[codeRegion] =
				maladieDepisteElement.cancer.col.reference;
			data.tuberculosePolmonaireCas.data[codeRegion] =
				maladieDepisteElement.tuberculose.polmonaire.cas;
			data.tuberculosePolmonaireCasPec.data[codeRegion] =
				maladieDepisteElement.tuberculose.polmonaire.casPec;
			data.tuberculosePolmonaireReference.data[codeRegion] =
				maladieDepisteElement.tuberculose.polmonaire.reference;
			data.tuberculoseExtraPolmonaireCas.data[codeRegion] =
				maladieDepisteElement.tuberculose.extraPolmonaire.cas;
			data.tuberculoseExtraPolmonaireCasPec.data[codeRegion] =
				maladieDepisteElement.tuberculose.extraPolmonaire.casPec;
			data.tuberculoseExtraPolmonaireReference.data[codeRegion] =
				maladieDepisteElement.tuberculose.extraPolmonaire.reference;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DATA REGION
async function dataProvince(region, provinceList) {
	try {
		var dataInit = getDataInit(provinceList),
			data = {
				diabeteCas: {
					data: getDataInit(provinceList),
				},
				diabeteCasPec: {
					data: getDataInit(provinceList),
				},
				diabeteReference: {
					data: getDataInit(provinceList),
				},
				htaCas: {
					data: getDataInit(provinceList),
				},
				htaCasPec: {
					data: getDataInit(provinceList),
				},
				htaReference: {
					data: getDataInit(provinceList),
				},
				angineCas: {
					data: getDataInit(provinceList),
				},
				angineCasPec: {
					data: getDataInit(provinceList),
				},
				angineReference: {
					data: getDataInit(provinceList),
				},
				carieCas: {
					data: getDataInit(provinceList),
				},
				carieCasPec: {
					data: getDataInit(provinceList),
				},
				carieReference: {
					data: getDataInit(provinceList),
				},
				parodontopathieCas: {
					data: getDataInit(provinceList),
				},
				parodontopathieCasPec: {
					data: getDataInit(provinceList),
				},
				parodontopathieReference: {
					data: getDataInit(provinceList),
				},
				maladieMentaleCas: {
					data: getDataInit(provinceList),
				},
				maladieMentaleCasPec: {
					data: getDataInit(provinceList),
				},
				maladieMentaleReference: {
					data: getDataInit(provinceList),
				},
				istCas: {
					data: getDataInit(provinceList),
				},
				istCasPec: {
					data: getDataInit(provinceList),
				},
				istReference: {
					data: getDataInit(provinceList),
				},
				raaAvecCarditesCas: {
					data: getDataInit(provinceList),
				},
				raaAvecCarditesCasPec: {
					data: getDataInit(provinceList),
				},
				raaAvecCarditesReference: {
					data: getDataInit(provinceList),
				},
				raaSansCarditesCas: {
					data: getDataInit(provinceList),
				},
				raaSansCarditesCasPec: {
					data: getDataInit(provinceList),
				},
				raaSansCarditesReference: {
					data: getDataInit(provinceList),
				},
				cancerSeinCas: {
					data: getDataInit(provinceList),
				},
				cancerSeinCasPec: {
					data: getDataInit(provinceList),
				},
				cancerSeinReference: {
					data: getDataInit(provinceList),
				},
				cancerColCas: {
					data: getDataInit(provinceList),
				},
				cancerColCasPec: {
					data: getDataInit(provinceList),
				},
				cancerColReference: {
					data: getDataInit(provinceList),
				},
				tuberculosePolmonaireCas: {
					data: getDataInit(provinceList),
				},
				tuberculosePolmonaireCasPec: {
					data: getDataInit(provinceList),
				},
				tuberculosePolmonaireReference: {
					data: getDataInit(provinceList),
				},
				tuberculoseExtraPolmonaireCas: {
					data: getDataInit(provinceList),
				},
				tuberculoseExtraPolmonaireCasPec: {
					data: getDataInit(provinceList),
				},
				tuberculoseExtraPolmonaireReference: {
					data: getDataInit(provinceList),
				},

				visiteEtablissementVisite: {
					data: getDataInit(provinceList),
				},
				visiteEleveVue: {
					data: getDataInit(provinceList),
				},
				eleveExamineVmsCible: {
					data: getDataInit(provinceList),
				},
				eleveExamineVmsRealisation: {
					data: getDataInit(provinceList),
				},
				lutteContreDeficienceVisuelleEchelleMetriqueCible: {
					data: getDataInit(provinceList),
				},
				lutteContreDeficienceVisuelleEchelleMetriqueRealisation: {
					data: getDataInit(provinceList),
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueCible: {
					data: getDataInit(provinceList),
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation: {
					data: getDataInit(provinceList),
				},
			},
			maladieDepiste = await rapportData.getRapportByRegionAndYear(
				region,
				'maladieDepiste'
			);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			// maladieDepiste
			for (let j = 0; j < maladieDepiste.length; j++) {
				const maladieDepisteElement = maladieDepiste[j];
				if (
					provinceListElement ===
					getProvinceCode(maladieDepisteElement.csr.province)
				) {
					data.diabeteCas.data[provinceListElement] =
						maladieDepisteElement.diabete.cas;
					data.diabeteCasPec.data[provinceListElement] =
						maladieDepisteElement.diabete.casPec;
					data.diabeteReference.data[provinceListElement] =
						maladieDepisteElement.diabete.reference;
					data.htaCas.data[provinceListElement] =
						maladieDepisteElement.hta.cas;
					data.htaCasPec.data[provinceListElement] =
						maladieDepisteElement.hta.casPec;
					data.htaReference.data[provinceListElement] =
						maladieDepisteElement.hta.reference;
					data.angineCas.data[provinceListElement] =
						maladieDepisteElement.angine.cas;
					data.angineCasPec.data[provinceListElement] =
						maladieDepisteElement.angine.casPec;
					data.angineReference.data[provinceListElement] =
						maladieDepisteElement.angine.reference;
					data.carieCas.data[provinceListElement] =
						maladieDepisteElement.carie.cas;
					data.carieCasPec.data[provinceListElement] =
						maladieDepisteElement.carie.casPec;
					data.carieReference.data[provinceListElement] =
						maladieDepisteElement.carie.reference;
					data.parodontopathieCas.data[provinceListElement] =
						maladieDepisteElement.parodontopathie.cas;
					data.parodontopathieCasPec.data[
						provinceListElement
					] = maladieDepisteElement.parodontopathie.casPec;
					data.parodontopathieReference.data[
						provinceListElement
					] = maladieDepisteElement.parodontopathie.reference;
					data.maladieMentaleCas.data[provinceListElement] =
						maladieDepisteElement.maladieMentale.cas;
					data.maladieMentaleCasPec.data[
						provinceListElement
					] = maladieDepisteElement.maladieMentale.casPec;
					data.maladieMentaleReference.data[
						provinceListElement
					] = maladieDepisteElement.maladieMentale.reference;
					data.istCas.data[provinceListElement] =
						maladieDepisteElement.ist.cas;
					data.istCasPec.data[provinceListElement] =
						maladieDepisteElement.ist.casPec;
					data.istReference.data[provinceListElement] =
						maladieDepisteElement.ist.reference;
					data.raaAvecCarditesCas.data[provinceListElement] =
						maladieDepisteElement.raa.avecCardites.cas;
					data.raaAvecCarditesCasPec.data[
						provinceListElement
					] = maladieDepisteElement.raa.avecCardites.casPec;
					data.raaAvecCarditesReference.data[
						provinceListElement
					] = maladieDepisteElement.raa.avecCardites.reference;
					data.raaSansCarditesCas.data[provinceListElement] =
						maladieDepisteElement.raa.sansCardites.cas;
					data.raaSansCarditesCasPec.data[
						provinceListElement
					] = maladieDepisteElement.raa.sansCardites.casPec;
					data.raaSansCarditesReference.data[
						provinceListElement
					] = maladieDepisteElement.raa.sansCardites.reference;
					data.cancerSeinCas.data[provinceListElement] =
						maladieDepisteElement.cancer.sein.cas;
					data.cancerSeinCasPec.data[provinceListElement] =
						maladieDepisteElement.cancer.sein.casPec;
					data.cancerSeinReference.data[
						provinceListElement
					] = maladieDepisteElement.cancer.sein.reference;
					data.cancerColCas.data[provinceListElement] =
						maladieDepisteElement.cancer.col.cas;
					data.cancerColCasPec.data[provinceListElement] =
						maladieDepisteElement.cancer.col.casPec;
					data.cancerColReference.data[provinceListElement] =
						maladieDepisteElement.cancer.col.reference;
					data.tuberculosePolmonaireCas.data[
						provinceListElement
					] = maladieDepisteElement.tuberculose.polmonaire.cas;
					data.tuberculosePolmonaireCasPec.data[
						provinceListElement
					] = maladieDepisteElement.tuberculose.polmonaire.casPec;
					data.tuberculosePolmonaireReference.data[
						provinceListElement
					] = maladieDepisteElement.tuberculose.polmonaire.reference;
					data.tuberculoseExtraPolmonaireCas.data[
						provinceListElement
					] = maladieDepisteElement.tuberculose.extraPolmonaire.cas;
					data.tuberculoseExtraPolmonaireCasPec.data[
						provinceListElement
					] =
						maladieDepisteElement.tuberculose.extraPolmonaire.casPec;
					data.tuberculoseExtraPolmonaireReference.data[
						provinceListElement
					] =
						maladieDepisteElement.tuberculose.extraPolmonaire.reference;
				}
			}
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
			today = new Date(),
			provinceList;
		// get the document of the region
		data.document = await regionData.getDocument(req.params.id);
		// list province
		provinceList = getProvinceList(data.document.region);
		// taux pdr visite
		data.carte = {
			region: await dataRegion(data.document.region),
			province: await dataProvince(data.document.region, provinceList),
		};
		// render the page
		res.status(200).render('region/dashboard/maladieDepiste', {
			title:
				'Tableau de bord | Maladies dépistées | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
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
