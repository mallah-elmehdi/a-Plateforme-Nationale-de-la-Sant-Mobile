// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const santeMaternelleData = require('../../../data/csr/rapport/santeMaternelle');

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
				femmePriseCharge: {
					data: { [codeRegion]: 0 },
				},
				cpnNouvelleInscriteT1: {
					data: { [codeRegion]: 0 },
				},
				cpnNouvelleInscriteT2: {
					data: { [codeRegion]: 0 },
				},
				cpnNouvelleInscriteT3: {
					data: { [codeRegion]: 0 },
				},
				cpnAncienneInscriteT1: {
					data: { [codeRegion]: 0 },
				},
				cpnAncienneInscriteT2: {
					data: { [codeRegion]: 0 },
				},
				cpnAncienneInscriteT3: {
					data: { [codeRegion]: 0 },
				},
				autreConsultation: {
					data: { [codeRegion]: 0 },
				},
				femmeExaminePostNatal: {
					data: { [codeRegion]: 0 },
				},
				garDepiste: {
					data: { [codeRegion]: 0 },
				},
				vat: {
					data: { [codeRegion]: 0 },
				},
				reference: {
					data: { [codeRegion]: 0 },
				},
			},
			santeMaternelle =
				await santeMaternelleData.getSanteMaternelleByRegion(region);
		// ------------------------

		// santeMaternelle
		for (let j = 0; j < santeMaternelle.length; j++) {
			const santeMaternelleElement = santeMaternelle[j];
			data.femmePriseCharge.data[codeRegion] +=
				santeMaternelleElement.femmePriseCharge;
			// ---
			data.cpnNouvelleInscriteT1.data[codeRegion] +=
				santeMaternelleElement.cpn.nouvelleInscrite.t1;
			// ---
			data.cpnNouvelleInscriteT2.data[codeRegion] +=
				santeMaternelleElement.cpn.nouvelleInscrite.t2;
			// ---
			data.cpnNouvelleInscriteT3.data[codeRegion] +=
				santeMaternelleElement.cpn.nouvelleInscrite.t3;
			// ---
			data.cpnAncienneInscriteT1.data[codeRegion] +=
				santeMaternelleElement.cpn.ancienneInscrite.t1;
			// ---
			data.cpnAncienneInscriteT2.data[codeRegion] +=
				santeMaternelleElement.cpn.ancienneInscrite.t2;
			// ---
			data.cpnAncienneInscriteT3.data[codeRegion] +=
				santeMaternelleElement.cpn.ancienneInscrite.t3;
			// ---
			data.autreConsultation.data[codeRegion] +=
				santeMaternelleElement.autreConsultation;
			// ---
			data.femmeExaminePostNatal.data[codeRegion] +=
				santeMaternelleElement.femmeExaminePostNatal;
			// ---
			data.garDepiste.data[codeRegion] +=
				santeMaternelleElement.garDepiste;
			// ---
			data.vat.data[codeRegion] += santeMaternelleElement.vat;
			// ---
			data.reference.data[codeRegion] += santeMaternelleElement.reference;
			// ---
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
				femmePriseCharge: {
					data: getDataInit(provinceList),
				},
				cpnNouvelleInscriteT1: {
					data: getDataInit(provinceList),
				},
				cpnNouvelleInscriteT2: {
					data: getDataInit(provinceList),
				},
				cpnNouvelleInscriteT3: {
					data: getDataInit(provinceList),
				},
				cpnAncienneInscriteT1: {
					data: getDataInit(provinceList),
				},
				cpnAncienneInscriteT2: {
					data: getDataInit(provinceList),
				},
				cpnAncienneInscriteT3: {
					data: getDataInit(provinceList),
				},
				autreConsultation: {
					data: getDataInit(provinceList),
				},
				femmeExaminePostNatal: {
					data: getDataInit(provinceList),
				},
				garDepiste: {
					data: getDataInit(provinceList),
				},
				vat: {
					data: getDataInit(provinceList),
				},
				reference: {
					data: getDataInit(provinceList),
				},
			},
			santeMaternelle =
				await santeMaternelleData.getSanteMaternelleByRegion(region);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			// santeMaternelle
			for (let j = 0; j < santeMaternelle.length; j++) {
				const santeMaternelleElement = santeMaternelle[j];
				if (
					provinceListElement ===
					getProvinceCode(santeMaternelleElement.csr.province)
				) {
					data.femmePriseCharge.data[provinceListElement] +=
						santeMaternelleElement.femmePriseCharge;
					// ---
					data.cpnNouvelleInscriteT1.data[provinceListElement] +=
						santeMaternelleElement.cpn.nouvelleInscrite.t1;
					// ---
					data.cpnNouvelleInscriteT2.data[provinceListElement] +=
						santeMaternelleElement.cpn.nouvelleInscrite.t2;
					// ---
					data.cpnNouvelleInscriteT3.data[provinceListElement] +=
						santeMaternelleElement.cpn.nouvelleInscrite.t3;
					// ---
					data.cpnAncienneInscriteT1.data[provinceListElement] +=
						santeMaternelleElement.cpn.ancienneInscrite.t1;
					// ---
					data.cpnAncienneInscriteT2.data[provinceListElement] +=
						santeMaternelleElement.cpn.ancienneInscrite.t2;
					// ---
					data.cpnAncienneInscriteT3.data[provinceListElement] +=
						santeMaternelleElement.cpn.ancienneInscrite.t3;
					// ---
					data.autreConsultation.data[provinceListElement] +=
						santeMaternelleElement.autreConsultation;
					// ---
					data.femmeExaminePostNatal.data[provinceListElement] +=
						santeMaternelleElement.femmeExaminePostNatal;
					// ---
					data.garDepiste.data[provinceListElement] +=
						santeMaternelleElement.garDepiste;
					// ---
					data.vat.data[provinceListElement] +=
						santeMaternelleElement.vat;
					// ---
					data.reference.data[provinceListElement] +=
						santeMaternelleElement.reference;
					// ---
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
async function santeMaternelle(req, res, next) {
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
		res.status(200).render('region/dashboard/santeMaternelle', {
			title:
				'Tableau de bord | Santé maternelle | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
			page: 'prestation',
			listItem: 'santeMaternelle',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	santeMaternelle,
};
