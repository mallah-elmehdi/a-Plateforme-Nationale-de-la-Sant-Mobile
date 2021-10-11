// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const detectionPrecoceCancerData = require('../../../data/csr/rapport/detectionPrecoceCancer');

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
				femmeExamineCancerSein: {
					data: { [codeRegion]: 0 },
				},
				femmeExamineCancerCol: {
					data: { [codeRegion]: 0 },
				},
				femmeRefereCancerSein: {
					data: { [codeRegion]: 0 },
				},
				femmeRefereCancerCol: {
					data: { [codeRegion]: 0 },
				},
			},
			detectionPrecoceCancer =
				await detectionPrecoceCancerData.getDetectionPrecoceCancerByRegion(
					region
				);
		// ------------------------
		// detectionPrecoceCancer
		for (let j = 0; j < detectionPrecoceCancer.length; j++) {
			const detectionPrecoceCancerElement = detectionPrecoceCancer[j];
			
			data.femmeExamineCancerSein.data[codeRegion] +=
				detectionPrecoceCancerElement.femmeExamine.cancerSein;
			data.femmeExamineCancerCol.data[codeRegion] +=
				detectionPrecoceCancerElement.femmeExamine.cancerCol;
			data.femmeRefereCancerSein.data[codeRegion] +=
				detectionPrecoceCancerElement.femmeRefere.cancerSein;
			data.femmeRefereCancerCol.data[codeRegion] +=
				detectionPrecoceCancerElement.femmeRefere.cancerCol;
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
				femmeExamineCancerSein: {
					data: getDataInit(provinceList),
				},
				femmeExamineCancerCol: {
					data: getDataInit(provinceList),
				},
				femmeRefereCancerSein: {
					data: getDataInit(provinceList),
				},
				femmeRefereCancerCol: {
					data: getDataInit(provinceList),
				},
			},
			detectionPrecoceCancer =
				await detectionPrecoceCancerData.getDetectionPrecoceCancerByRegion(
					region
				);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			// detectionPrecoceCancer
			for (let j = 0; j < detectionPrecoceCancer.length; j++) {
				const detectionPrecoceCancerElement = detectionPrecoceCancer[j];
				if (
					provinceListElement ===
					getProvinceCode(detectionPrecoceCancerElement.csr.province)
				) {
					data.femmeExamineCancerSein.data[provinceListElement] +=
						detectionPrecoceCancerElement.femmeExamine.cancerSein;
					data.femmeExamineCancerCol.data[provinceListElement] +=
						detectionPrecoceCancerElement.femmeExamine.cancerCol;
					data.femmeRefereCancerSein.data[provinceListElement] +=
						detectionPrecoceCancerElement.femmeRefere.cancerSein;
					data.femmeRefereCancerCol.data[provinceListElement] +=
						detectionPrecoceCancerElement.femmeRefere.cancerCol;
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
async function detectionPrecoceCancer(req, res, next) {
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
		res.status(200).render('region/dashboard/detectionPrecoceCancer', {
			title:
				'Tableau de bord | Détection précoce des cancers du sein et du col de l’utérus | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
			page: 'prestation',
			listItem: 'detectionPrecoceCancer',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	detectionPrecoceCancer,
};
