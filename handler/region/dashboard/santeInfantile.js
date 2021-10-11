// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const santeInfantileData = require('../../../data/csr/rapport/santeInfantile');

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
				vaccinationPentavalent: {
					data: { [codeRegion]: 0 },
				},
				vaccinationRr: {
					data: { [codeRegion]: 0 },
				},
				vaccinationBcg: {
					data: { [codeRegion]: 0 },
				},
				vitamineA: {
					data: { [codeRegion]: 0 },
				},
				vitamineD: {
					data: { [codeRegion]: 0 },
				},
				enfantsAvecInsuffisancePonderale: {
					data: { [codeRegion]: 0 },
				},
				enfantsAvecRetardCroissance: {
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
			santeInfantile = await santeInfantileData.getSanteInfantileByRegion(
				region
			);
		// ------------------------

		// santeInfantile
		for (let j = 0; j < santeInfantile.length; j++) {
			const santeInfantileElement = santeInfantile[j];
			data.enfantPrisesCharge.data[codeRegion] +=
				santeInfantileElement.enfantPrisesCharge;
			data.vaccinationPentavalent.data[codeRegion] +=
				santeInfantileElement.vaccination.pentavalent;
			data.vaccinationRr.data[codeRegion] +=
				santeInfantileElement.vaccination.rr;
			data.vaccinationBcg.data[codeRegion] +=
				santeInfantileElement.vaccination.bcg;
			data.vitamineA.data[codeRegion] += santeInfantileElement.vitamineA;
			data.vitamineD.data[codeRegion] += santeInfantileElement.vitamineD;
			data.enfantsAvecInsuffisancePonderale.data[codeRegion] +=
				santeInfantileElement.enfantsAvecInsuffisancePonderale;
			data.enfantsAvecRetardCroissance.data[codeRegion] +=
				santeInfantileElement.enfantsAvecRetardCroissance;
			data.diarrhe.data[codeRegion] += santeInfantileElement.diarrhe;
			data.ira.data[codeRegion] += santeInfantileElement.ira;
			data.reference.data[codeRegion] += santeInfantileElement.reference;
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
				vaccinationPentavalent: {
					data: getDataInit(provinceList),
				},
				vaccinationRr: {
					data: getDataInit(provinceList),
				},
				vaccinationBcg: {
					data: getDataInit(provinceList),
				},
				vitamineA: {
					data: getDataInit(provinceList),
				},
				vitamineD: {
					data: getDataInit(provinceList),
				},
				enfantsAvecInsuffisancePonderale: {
					data: getDataInit(provinceList),
				},
				enfantsAvecRetardCroissance: {
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
			santeInfantile = await santeInfantileData.getSanteInfantileByRegion(
				region
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
					data.enfantPrisesCharge.data[provinceListElement] +=
						santeInfantileElement.enfantPrisesCharge;
					data.vaccinationPentavalent.data[provinceListElement] +=
						santeInfantileElement.vaccination.pentavalent;
					data.vaccinationRr.data[provinceListElement] +=
						santeInfantileElement.vaccination.rr;
					data.vaccinationBcg.data[provinceListElement] +=
						santeInfantileElement.vaccination.bcg;
					data.vitamineA.data[provinceListElement] +=
						santeInfantileElement.vitamineA;
					data.vitamineD.data[provinceListElement] +=
						santeInfantileElement.vitamineD;
					data.enfantsAvecInsuffisancePonderale.data[
						provinceListElement
					] += santeInfantileElement.enfantsAvecInsuffisancePonderale;
					data.enfantsAvecRetardCroissance.data[
						provinceListElement
					] += santeInfantileElement.enfantsAvecRetardCroissance;
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
			title: 'Tableau de bord | Santé infantile | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
			page: 'prestation',
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
