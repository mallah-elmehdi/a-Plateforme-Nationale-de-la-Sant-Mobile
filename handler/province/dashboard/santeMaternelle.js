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
				femmePriseCharge: {
					data: { [codeProvince]: 0 },
				},
				cpnNouvelleInscrite: {
					data: { [codeProvince]: 0 },
				},
				cpnAutreConsultation: {
					data: { [codeProvince]: 0 },
				},
				femmeExaminePostNatal: {
					data: { [codeProvince]: 0 },
				},
				gahrDepiste: {
					data: { [codeProvince]: 0 },
				},
				vat: {
					data: { [codeProvince]: 0 },
				},
				reference: {
					data: { [codeProvince]: 0 },
				},
			},
			santeMaternelle = await rapportData.getRapportByProvinceAndYear(
				province,
				'santeMaternelle'
			);
		// ------------------------
		// santeMaternelle
		for (let j = 0; j < santeMaternelle.length; j++) {
			const santeMaternelleElement = santeMaternelle[j];
			data.femmePriseCharge.data[codeProvince] +=
				santeMaternelleElement.femmePriseCharge;
			data.cpnNouvelleInscrite.data[codeProvince] +=
				santeMaternelleElement.cpn.nouvelleInscrite;
			data.cpnAutreConsultation.data[codeProvince] +=
				santeMaternelleElement.cpn.autreConsultation;
			data.femmeExaminePostNatal.data[codeProvince] +=
				santeMaternelleElement.femmeExaminePostNatal;
			data.gahrDepiste.data[codeProvince] +=
				santeMaternelleElement.gahrDepiste;
			data.vat.data[codeProvince] += santeMaternelleElement.vat;
			data.reference.data[codeProvince] +=
				santeMaternelleElement.reference;
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
			today = new Date();
		// get the document of the region
		data.document = await provinceData.getDocument(req.params.id);
		// list province

		// taux pdr visite
		data.carte = {
			province: await dataProvince(data.document.province),
		};
		// render the page
		res.status(200).render('province/dashboard/santeMaternelle', {
			title:
				'Tableau de bord | Santé maternelle | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			codeProvince: getProvinceCode(data.document.province),
			page: 'dashboard',
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
