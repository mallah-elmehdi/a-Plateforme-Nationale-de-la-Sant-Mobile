// SET UP
const fs = require('fs');
const provinceData = require('../../../data/province');
const ressourceData = require('../../../data/csr/planAction/ressource');

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
				type: {
					data: {
						[codeProvince]: {
							ambulance: {
								appartenance: {
									commune: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ms: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
								},
							},
							camionMobile: {
								appartenance: {
									commune: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ms: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
								},
							},
							uniteMobile: {
								appartenance: {
									commune: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ms: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
								},
							},
							vtt: {
								appartenance: {
									commune: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ms: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
								},
							},
						},
					},
				},
				budgetKmsParcourir: {
					data: { [codeProvince]: 0 },
				},
				budgetBesoinCarburant: {
					data: { [codeProvince]: 0 },
				},
				besoinUsm: {
					data: { [codeProvince]: 0 },
				},
			},
			ressource = await ressourceData.getRessourceByProvinceYear(province);
		// ------------------------
		// province

		// ressource
		for (let j = 0; j < ressource.length; j++) {
			const ressourceElement = ressource[j];
			data.besoinUsm.data[codeProvince] += ressourceElement.besoinUsm;
			data.budgetKmsParcourir.data[codeProvince] +=
				ressourceElement.budget.kmsParcourir;
			data.budgetBesoinCarburant.data[codeProvince] +=
				ressourceElement.budget.besoinCarburant;
			// type
			if (ressourceElement.type === 'Ambulance') {
				// appartenance
				if (ressourceElement.appartenance === 'Ministre de la santé') {
					// age
					if (ressourceElement.age <= 5) {
						data.type.data[
							codeProvince
						].ambulance.appartenance.ms.age.moins5ans += 1;
					} else {
						data.type.data[
							codeProvince
						].ambulance.appartenance.ms.age.plus5ans += 1;
					}
				} else if (ressourceElement.appartenance === 'Commune') {
					// age
					if (ressourceElement.age <= 5) {
						data.type.data[
							codeProvince
						].ambulance.appartenance.commune.age.moins5ans += 1;
					} else {
						data.type.data[
							codeProvince
						].ambulance.appartenance.commune.age.plus5ans += 1;
					}
				}
			} else if (ressourceElement.type === 'Camion mobile') {
				// appartenance
				if (ressourceElement.appartenance === 'Ministre de la santé') {
					// age
					if (ressourceElement.age <= 5) {
						data.type.data[
							codeProvince
						].camionMobile.appartenance.ms.age.moins5ans += 1;
					} else {
						data.type.data[
							codeProvince
						].camionMobile.appartenance.ms.age.plus5ans += 1;
					}
				} else if (ressourceElement.appartenance === 'Commune') {
					// age
					if (ressourceElement.age <= 5) {
						data.type.data[
							codeProvince
						].camionMobile.appartenance.commune.age.moins5ans += 1;
					} else {
						data.type.data[
							codeProvince
						].camionMobile.appartenance.commune.age.plus5ans += 1;
					}
				}
			} else if (ressourceElement.type === 'Unité mobile') {
				// appartenance
				if (ressourceElement.appartenance === 'Ministre de la santé') {
					// age
					if (ressourceElement.age <= 5) {
						data.type.data[
							codeProvince
						].uniteMobile.appartenance.ms.age.moins5ans += 1;
					} else {
						data.type.data[
							codeProvince
						].uniteMobile.appartenance.ms.age.plus5ans += 1;
					}
				} else if (ressourceElement.appartenance === 'Commune') {
					// age
					if (ressourceElement.age <= 5) {
						data.type.data[
							codeProvince
						].uniteMobile.appartenance.commune.age.moins5ans += 1;
					} else {
						data.type.data[
							codeProvince
						].uniteMobile.appartenance.commune.age.plus5ans += 1;
					}
				}
			} else if (ressourceElement.type === 'VTT') {
				// appartenance
				if (ressourceElement.appartenance === 'Ministre de la santé') {
					// age
					if (ressourceElement.age <= 5) {
						data.type.data[
							codeProvince
						].vtt.appartenance.ms.age.moins5ans += 1;
					} else {
						data.type.data[
							codeProvince
						].vtt.appartenance.ms.age.plus5ans += 1;
					}
				} else if (ressourceElement.appartenance === 'Commune') {
					// age
					if (ressourceElement.age <= 5) {
						data.type.data[
							codeProvince
						].vtt.appartenance.commune.age.moins5ans += 1;
					} else {
						data.type.data[
							codeProvince
						].vtt.appartenance.commune.age.plus5ans += 1;
					}
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
async function ressource(req, res, next) {
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
		res.status(200).render('province/dashboard/ressource', {
			title:
				'Tableau de bord | Ressource mobilisable | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			codeProvince: getProvinceCode(data.document.province),
			page: 'dashboard',
			listItem: 'ressource',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	ressource,
};
