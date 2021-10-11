// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const planificationFamilialeData = require('../../../data/csr/rapport/planificationFamiliale');

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
				piluleNa: {
					data: { [codeRegion]: 0 },
				},
				piluleAa: {
					data: { [codeRegion]: 0 },
				},
				injectableNa: {
					data: { [codeRegion]: 0 },
				},
				injectableAa: {
					data: { [codeRegion]: 0 },
				},
				diuNa: {
					data: { [codeRegion]: 0 },
				},
				diuAa: {
					data: { [codeRegion]: 0 },
				},
				condomNa: {
					data: { [codeRegion]: 0 },
				},
				condomAa: {
					data: { [codeRegion]: 0 },
				},
				referenceDiu: {
					data: { [codeRegion]: 0 },
				},
				referenceLt: {
					data: { [codeRegion]: 0 },
				},
			},
			planificationFamiliale =
				await planificationFamilialeData.getPlanificationFamilialeByRegion(
					region,
				);
		// ------------------------
		// planificationFamiliale
		for (let j = 0; j < planificationFamiliale.length; j++) {
			const planificationFamilialeElement = planificationFamiliale[j];
			data.piluleNa.data[codeRegion] +=
				planificationFamilialeElement.pilule.na;
			data.piluleAa.data[codeRegion] +=
				planificationFamilialeElement.pilule.aa;
			data.injectableNa.data[codeRegion] +=
				planificationFamilialeElement.injectable.na;
			data.injectableAa.data[codeRegion] +=
				planificationFamilialeElement.injectable.aa;
			data.diuNa.data[codeRegion] += planificationFamilialeElement.diu.na;
			data.diuAa.data[codeRegion] += planificationFamilialeElement.diu.aa;
			data.condomNa.data[codeRegion] +=
				planificationFamilialeElement.condom.na;
			data.condomAa.data[codeRegion] +=
				planificationFamilialeElement.condom.aa;
			data.referenceDiu.data[codeRegion] +=
				planificationFamilialeElement.reference.diu;
			data.referenceLt.data[codeRegion] +=
				planificationFamilialeElement.reference.lt;
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
				piluleNa: {
					data: getDataInit(provinceList),
				},
				piluleAa: {
					data: getDataInit(provinceList),
				},
				injectableNa: {
					data: getDataInit(provinceList),
				},
				injectableAa: {
					data: getDataInit(provinceList),
				},
				diuNa: {
					data: getDataInit(provinceList),
				},
				diuAa: {
					data: getDataInit(provinceList),
				},
				condomNa: {
					data: getDataInit(provinceList),
				},
				condomAa: {
					data: getDataInit(provinceList),
				},
				referenceDiu: {
					data: getDataInit(provinceList),
				},
				referenceLt: {
					data: getDataInit(provinceList),
				},
			},
			planificationFamiliale =
				await planificationFamilialeData.getPlanificationFamilialeByRegion(
					region,
				);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			// planificationFamiliale
			for (let j = 0; j < planificationFamiliale.length; j++) {
				const planificationFamilialeElement = planificationFamiliale[j];
				if (
					provinceListElement ===
					getProvinceCode(planificationFamilialeElement.csr.province)
				) {
					data.piluleNa.data[provinceListElement] +=
						planificationFamilialeElement.pilule.na;
					data.piluleAa.data[provinceListElement] +=
						planificationFamilialeElement.pilule.aa;
					data.injectableNa.data[provinceListElement] +=
						planificationFamilialeElement.injectable.na;
					data.injectableAa.data[provinceListElement] +=
						planificationFamilialeElement.injectable.aa;
					data.diuNa.data[provinceListElement] +=
						planificationFamilialeElement.diu.na;
					data.diuAa.data[provinceListElement] +=
						planificationFamilialeElement.diu.aa;
					data.condomNa.data[provinceListElement] +=
						planificationFamilialeElement.condom.na;
					data.condomAa.data[provinceListElement] +=
						planificationFamilialeElement.condom.aa;
					data.referenceDiu.data[provinceListElement] +=
						planificationFamilialeElement.reference.diu;
					data.referenceLt.data[provinceListElement] +=
						planificationFamilialeElement.reference.lt;
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
async function planificationFamiliale(req, res, next) {
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
		res.status(200).render('region/dashboard/planificationFamiliale', {
			title:
				'Tableau de bord | Planification Familiale | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
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
