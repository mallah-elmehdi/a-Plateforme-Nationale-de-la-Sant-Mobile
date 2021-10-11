// SET UP
const fs = require('fs');
const provinceData = require('../../data/province');
const rapportData = require('../../data/csr/rapport/rapport');
const programmeData = require('../../data/csr/planAction/programme');
const ressourceHumainData = require('../../data/csr/planAction/ressourceHumain');
const { GlobalTable } = require('../../class/trimestre');
const { Carte } = require('../../class/carte');
const global = new GlobalTable();
const carte = new Carte();

// ERROR
const { newError } = require('../../util/error');

const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../static/json/province.json`)
);
const csr = JSON.parse(
	fs.readFileSync(`${__dirname}/../../static/json/csr.json`)
);

function getProvince(code) {
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.codeProvince === code) {
			return provinceElement.province;
		}
	}
}
function getProvinceCode(pro) {
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.province === pro) {
			return provinceElement.codeProvince;
		}
	}
}
async function getGlobalPdrVisiteProvince(item, trimestre, province) {
	var objOut = {},
		programme = await programmeData.getProgrammeByProvince(province);
	for (let i = 0; i < programme.length; i++) {
		const pdrElement = programme[i];
		if (!objOut[pdrElement.csr.commune]) {
			objOut[pdrElement.csr.commune] = {};
		}
		objOut[pdrElement.csr.commune][pdrElement.id] = {
			pdr: pdrElement.pdr,
			realise: 0,
			programme: pdrElement['t' + trimestre],
		};
	}
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].pdrVisite) {
			const element = item[i].pdrVisite;
			objOut[element.csr.commune][element.pdrVisite.id].realise += 1;
		}
	}
	return objOut;
}
// DATA REGION
async function dataProvince(trimestre, province) {
	try {
		var codeProvince = getProvinceCode(province),
			data = { [codeProvince]: 0 },
			rapport = await rapportData.getRapportByProvince(
				trimestre,
				province
			);
		var item = [];
		// rapport
		for (let j = 0; j < rapport.length; j++) {
			const rapportElement = rapport[j];
			for (let k = 0; k < rapportElement.sortie.length; k++) {
				const sortieElement = rapportElement.sortie[k];
				item.push(sortieElement);
			}
		}
		var ressourceHumain =
			await ressourceHumainData.getRessourceHumainByProvince(province);
		data[codeProvince] = {
			pdrVisite: await getGlobalPdrVisiteProvince(item, trimestre, province),
			populationCible: global.globalPopulationCible(item),
			ressourceHumainMobile:
				global.globalRessourceHumain(ressourceHumain),
			santeMaternelle: global.globalSanteMaternelle(item),
			santeInfantile: global.globalSanteInfantile(item),
			planificationFamiliale: global.globalPlanificationFamiliale(item),
			santeScolaire: global.globalSanteScolaire(item),
			detectionPrecoceCancer: global.globalDetectionPrecoceCancer(item),
			consultationMedical: global.globalConsultationMedical(item),
			maladieDepiste: global.globalMaladieDepiste(item),
			autreActivite: global.globalAutreActiviteAll(item),
		};
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

async function tauxDataProvince(trimestre, province) {
	try {
		var codeProvince = getProvinceCode(province),
			data = {},
			rapport = await rapportData.getRapportByProvince(
				trimestre,
				province
			),
			listData = {
				[codeProvince]: [],
			};
		for (let i = 0; i < csr.length; i++) {
			const csrElement = csr[i];
			var exist = false;
			if (csrElement.codeProvince == codeProvince) {
				// rapport
				for (let j = 0; j < rapport.length; j++) {
					const rapportElement = rapport[j];
					// -----------------------------------
					if (
						rapportElement.csr.region === csrElement.region &&
						rapportElement.csr.province === csrElement.province &&
						rapportElement.csr.csr === csrElement.name
					) {
						exist = true;
					}
				}
				if (exist) {
					listData[csrElement.codeProvince].push(100);
				} else {
					listData[csrElement.codeProvince].push(0);
				}
			}
		}
		for (const key in listData) {
			const array = listData[key];
			var res,
				total = 0;
			if (!array.length) listData[key].push(0);
			for (let a = 0; a < array.length; a++) {
				total += array[a];
			}
			res = parseFloat(total / array.length);
			if (res === 0) {
				data[key] = 0;
			} else if (res < 1) {
				data[key] = res.toFixed(1);
			} else {
				data[key] = parseInt(res);
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// get the dashbord
async function rapport(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the region
		data.document = await provinceData.getDocument(req.params.id);
		var csrList = carte.getCsrListByProvince(data.document.province)
		// taux
		data.carte = {
			province: await tauxDataProvince(
				parseInt(req.params.trimestre),
				data.document.province,
			),
		};
		// rapport
		data.rapport = {
			province: await dataProvince(
				req.params.trimestre,
				data.document.province
			),
		};
		// render the page
		res.status(200).render('province/rapport', {
			title:
				'Tableau de bord | Rapport | Trimestre ' +
				req.params.trimestre +
				' | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince: getProvinceCode(data.document.province),
			trimestre: req.params.trimestre,
			csrList,
			page: 'rapport',
			listItem: req.params.trimestre.toString(),
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	rapport,
};
