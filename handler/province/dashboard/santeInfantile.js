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
				enfantPrisesCharge: {
					data: { [codeProvince]: 0 },
				},
				vaccinationDtc3Hib3: {
					data: { [codeProvince]: 0 },
				},
				vaccinationVar: {
					data: { [codeProvince]: 0 },
				},
				vitamineA: {
					data: { [codeProvince]: 0 },
				},
				vitamineD: {
					data: { [codeProvince]: 0 },
				},
				pesee: {
					data: { [codeProvince]: 0 },
				},
				diarrhe: {
					data: { [codeProvince]: 0 },
				},
				ira: {
					data: { [codeProvince]: 0 },
				},
				reference: {
					data: { [codeProvince]: 0 },
				},
			},
			santeInfantile = await rapportData.getRapportByProvinceAndYear(
				province,
				'santeInfantile'
			);
		// ------------------------
		// province

		// santeInfantile
		for (let j = 0; j < santeInfantile.length; j++) {
			const santeInfantileElement = santeInfantile[j];
			data.enfantPrisesCharge.data[codeProvince] +=
				santeInfantileElement.enfantPrisesCharge;
			data.vaccinationDtc3Hib3.data[codeProvince] +=
				santeInfantileElement.vaccination.dtc3Hib3;
			data.vaccinationVar.data[codeProvince] +=
				santeInfantileElement.vaccination.var;
			data.vitamineA.data[codeProvince] +=
				santeInfantileElement.vitamineA;
			data.vitamineD.data[codeProvince] +=
				santeInfantileElement.vitamineD;
			data.pesee.data[codeProvince] += santeInfantileElement.pesee;
			data.diarrhe.data[codeProvince] += santeInfantileElement.diarrhe;
			data.ira.data[codeProvince] += santeInfantileElement.ira;
			data.reference.data[codeProvince] +=
				santeInfantileElement.reference;
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
			today = new Date();
		// get the document of the region
		data.document = await provinceData.getDocument(req.params.id);
		// list province

		// taux pdr visite
		data.carte = {
			province: await dataProvince(data.document.province),
		};
		// render the page
		res.status(200).render('province/dashboard/santeInfantile', {
			title:
				'Tableau de bord | Santé infantile | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			codeProvince: getProvinceCode(data.document.province),
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
