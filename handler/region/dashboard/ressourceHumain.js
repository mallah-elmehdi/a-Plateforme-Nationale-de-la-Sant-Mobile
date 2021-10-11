// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const ressourceHumainData = require('../../../data/csr/planAction/ressourceHumain');

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
				fixeMedecin: {
					data: { [codeRegion]: 0 },
				},
				fixeInfirmier: {
					data: { [codeRegion]: 0 },
				},
				fixeSageFemme: {
					data: { [codeRegion]: 0 },
				},
				fixeTechnicien: {
					data: { [codeRegion]: 0 },
				},
				fixeChauffeur: {
					data: { [codeRegion]: 0 },
				},
				fixeAppuie: {
					data: { [codeRegion]: 0 },
				},
				mobileMedecin: {
					data: { [codeRegion]: 0 },
				},
				mobileInfirmier: {
					data: { [codeRegion]: 0 },
				},
				mobileSageFemme: {
					data: { [codeRegion]: 0 },
				},
				mobileTechnicien: {
					data: { [codeRegion]: 0 },
				},
				mobileChauffeur: {
					data: { [codeRegion]: 0 },
				},
				mobileAppuie: {
					data: { [codeRegion]: 0 },
				},
				mobileEmOperationnelle: {
					data: { [codeRegion]: 0 },
				},
			},
			ressourceHumain =
				await ressourceHumainData.getRessourceHumainByRegion(region);
		// ------------------------
		// ressourceHumain
		for (let j = 0; j < ressourceHumain.length; j++) {
			const ressourceHumainElement = ressourceHumain[j];
			// fixeMedecin
			data.fixeMedecin.data[codeRegion] +=
				ressourceHumainElement.fixe.medecin;
			// fixeInfirmier
			data.fixeInfirmier.data[codeRegion] +=
				ressourceHumainElement.fixe.infirmier;
			// fixeSageFemme
			data.fixeSageFemme.data[codeRegion] +=
				ressourceHumainElement.fixe.sageFemme;
			// fixeTechnicien
			data.fixeTechnicien.data[codeRegion] +=
				ressourceHumainElement.fixe.technicien;
			// fixeChauffeur
			data.fixeChauffeur.data[codeRegion] +=
				ressourceHumainElement.fixe.chauffeur;
			// fixeAppuie
			data.fixeAppuie.data[codeRegion] +=
				ressourceHumainElement.fixe.appuie;
			// mobileMedecin
			data.mobileMedecin.data[codeRegion] +=
				ressourceHumainElement.mobile.medecin;
			// mobileInfirmier
			data.mobileInfirmier.data[codeRegion] +=
				ressourceHumainElement.mobile.infirmier;
			// mobileSageFemme
			data.mobileSageFemme.data[codeRegion] +=
				ressourceHumainElement.mobile.sageFemme;
			// mobileTechnicien
			data.mobileTechnicien.data[codeRegion] +=
				ressourceHumainElement.mobile.technicien;
			// mobileChauffeur
			data.mobileChauffeur.data[codeRegion] +=
				ressourceHumainElement.mobile.chauffeur;
			// mobileAppuie
			data.mobileAppuie.data[codeRegion] +=
				ressourceHumainElement.mobile.appuie;
			// mobileEmOperationnelle
			data.mobileEmOperationnelle.data[codeRegion] +=
				ressourceHumainElement.mobile.emOperationnelle;
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
				fixeMedecin: {
					data: getDataInit(provinceList),
				},
				fixeInfirmier: {
					data: getDataInit(provinceList),
				},
				fixeSageFemme: {
					data: getDataInit(provinceList),
				},
				fixeTechnicien: {
					data: getDataInit(provinceList),
				},
				fixeChauffeur: {
					data: getDataInit(provinceList),
				},
				fixeAppuie: {
					data: getDataInit(provinceList),
				},
				mobileMedecin: {
					data: getDataInit(provinceList),
				},
				mobileInfirmier: {
					data: getDataInit(provinceList),
				},
				mobileSageFemme: {
					data: getDataInit(provinceList),
				},
				mobileTechnicien: {
					data: getDataInit(provinceList),
				},
				mobileChauffeur: {
					data: getDataInit(provinceList),
				},
				mobileAppuie: {
					data: getDataInit(provinceList),
				},
				mobileEmOperationnelle: {
					data: getDataInit(provinceList),
				},
			},
			ressourceHumain =
				await ressourceHumainData.getRessourceHumainByRegion(region);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			// ressourceHumain
			for (let j = 0; j < ressourceHumain.length; j++) {
				const ressourceHumainElement = ressourceHumain[j];
				if (
					provinceListElement ===
					getProvinceCode(ressourceHumainElement.csr.province)
				) {
					// fixeMedecin
					data.fixeMedecin.data[provinceListElement] +=
						ressourceHumainElement.fixe.medecin;
					// fixeInfirmier
					data.fixeInfirmier.data[provinceListElement] +=
						ressourceHumainElement.fixe.infirmier;
					// fixeSageFemme
					data.fixeSageFemme.data[provinceListElement] +=
						ressourceHumainElement.fixe.sageFemme;
					// fixeTechnicien
					data.fixeTechnicien.data[provinceListElement] +=
						ressourceHumainElement.fixe.technicien;
					// fixeChauffeur
					data.fixeChauffeur.data[provinceListElement] +=
						ressourceHumainElement.fixe.chauffeur;
					// fixeAppuie
					data.fixeAppuie.data[provinceListElement] +=
						ressourceHumainElement.fixe.appuie;
					// mobileMedecin
					data.mobileMedecin.data[provinceListElement] +=
						ressourceHumainElement.mobile.medecin;
					// mobileInfirmier
					data.mobileInfirmier.data[provinceListElement] +=
						ressourceHumainElement.mobile.infirmier;
					// mobileSageFemme
					data.mobileSageFemme.data[provinceListElement] +=
						ressourceHumainElement.mobile.sageFemme;
					// mobileTechnicien
					data.mobileTechnicien.data[provinceListElement] +=
						ressourceHumainElement.mobile.technicien;
					// mobileChauffeur
					data.mobileChauffeur.data[provinceListElement] +=
						ressourceHumainElement.mobile.chauffeur;
					// mobileAppuie
					data.mobileAppuie.data[provinceListElement] +=
						ressourceHumainElement.mobile.appuie;
					// mobileEmOperationnelle
					data.mobileEmOperationnelle.data[provinceListElement] +=
						ressourceHumainElement.mobile.emOperationnelle;
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
async function ressourceHumain(req, res, next) {
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
		res.status(200).render('region/dashboard/ressourceHumain', {
			title:
				'Tableau de bord | Ressources humaines | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
			page: 'ressource',
			listItem: 'ressourceHumain',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	ressourceHumain,
};
