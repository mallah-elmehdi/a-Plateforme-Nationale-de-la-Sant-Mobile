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
				enfantPrisesCharge: {
					data: { [codeRegion]: 0 },
				},
				vaccinationDtc3Hib3: {
					data: { [codeRegion]: 0 },
				},
				vaccinationVar: {
					data: { [codeRegion]: 0 },
				},
				vitamineA: {
					data: { [codeRegion]: 0 },
				},
				vitamineD: {
					data: { [codeRegion]: 0 },
				},
				pesee: {
					data: { [codeRegion]: 0 },
				},
				diarrhe: {
					data: { [codeRegion]: 0 },
				},
				ira: {
					data: { [codeRegion]: 0 },
				},
				reference: {
					data: { [codeRegion]: 0 },
				},
			},
			santeInfantile = await rapportData.getRapportByRegionAndYear(
				region,
				'santeInfantile'
			);
		// ------------------------

		// santeInfantile
		for (let j = 0; j < santeInfantile.length; j++) {
			const santeInfantileElement = santeInfantile[j];
				data.enfantPrisesCharge.data[codeRegion] +=
					santeInfantileElement.enfantPrisesCharge;
				data.vaccinationDtc3Hib3.data[codeRegion] +=
					santeInfantileElement.vaccination.dtc3Hib3;
				data.vaccinationVar.data[codeRegion] +=
					santeInfantileElement.vaccination.var;
				data.vitamineA.data[codeRegion] +=
					santeInfantileElement.vitamineA;
				data.vitamineD.data[codeRegion] +=
					santeInfantileElement.vitamineD;
				data.pesee.data[codeRegion] += santeInfantileElement.pesee;
				data.diarrhe.data[codeRegion] += santeInfantileElement.diarrhe;
				data.ira.data[codeRegion] += santeInfantileElement.ira;
				data.reference.data[codeRegion] +=
					santeInfantileElement.reference;
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
				enfantPrisesCharge: {
					data: getDataInit(provinceList),
				},
				vaccinationDtc3Hib3: {
					data: getDataInit(provinceList),
				},
				vaccinationVar: {
					data: getDataInit(provinceList),
				},
				vitamineA: {
					data: getDataInit(provinceList),
				},
				vitamineD: {
					data: getDataInit(provinceList),
				},
				pesee: {
					data: getDataInit(provinceList),
				},
				diarrhe: {
					data: getDataInit(provinceList),
				},
				ira: {
					data: getDataInit(provinceList),
				},
				reference: {
					data: getDataInit(provinceList),
				},
			},
			santeInfantile = await rapportData.getRapportByRegionAndYear(
				region,
				'santeInfantile'
			);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			// santeInfantile
			for (let j = 0; j < santeInfantile.length; j++) {
				const santeInfantileElement = santeInfantile[j];
				if (
					provinceListElement ===
					getProvinceCode(santeInfantileElement.csr.province)
				) {
					data.enfantPrisesCharge.data[
						provinceListElement
					] += santeInfantileElement.enfantPrisesCharge;
					data.vaccinationDtc3Hib3.data[
						provinceListElement
					] += santeInfantileElement.vaccination.dtc3Hib3;
					data.vaccinationVar.data[provinceListElement] +=
						santeInfantileElement.vaccination.var;
					data.vitamineA.data[provinceListElement] +=
						santeInfantileElement.vitamineA;
					data.vitamineD.data[provinceListElement] +=
						santeInfantileElement.vitamineD;
					data.pesee.data[provinceListElement] +=
						santeInfantileElement.pesee;
					data.diarrhe.data[provinceListElement] +=
						santeInfantileElement.diarrhe;
					data.ira.data[provinceListElement] +=
						santeInfantileElement.ira;
					data.reference.data[provinceListElement] +=
						santeInfantileElement.reference;
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
async function santeInfantile(req, res, next) {
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
		res.status(200).render('region/dashboard/santeInfantile', {
			title:
				'Tableau de bord | Santé infantile | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
			page: 'dashboard',
			listItem: 'santeInfantile',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	santeInfantile,
};
