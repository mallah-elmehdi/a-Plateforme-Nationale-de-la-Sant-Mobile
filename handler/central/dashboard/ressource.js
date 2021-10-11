// SET UP
const fs = require('fs');
const centralData = require('../../../data/central');
const ressourceData = require('../../../data/csr/planAction/ressource');

// ERROR
const { newError } = require('../../../util/error');

// JSON
const region = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/region.json`)
);
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/province.json`)
);

// DATA REGION
async function dataRegion() {
	try {
		var data = {
				type: {
					data: {
						1: {
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
							usm: {
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
						2: {
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
							usm: {
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
						3: {
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
							usm: {
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
						4: {
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
							usm: {
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
						5: {
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
							usm: {
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
						6: {
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
							usm: {
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
						7: {
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
							usm: {
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
						8: {
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
							usm: {
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
						9: {
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
							usm: {
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
						10: {
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
							usm: {
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
						11: {
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
							usm: {
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
						12: {
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
							usm: {
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
					data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
					},
				},
				budgetBesoinCarburant: {
					data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
					},
				},
				besoinUsm: {
					data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
					},
				},
			},
			ressource = await ressourceData.getRessourceByYear();
		// ------------------------
		// region
		for (let i = 0; i < region.length; i++) {
			const regionElement = region[i];
			// ressource
			for (let j = 0; j < ressource.length; j++) {
				const ressourceElement = ressource[j];
				if (regionElement.region === ressourceElement.csr.region) {
					data.besoinUsm.data[regionElement.codeRegion] +=
						ressourceElement.besoinUsm;
					data.budgetKmsParcourir.data[regionElement.codeRegion] +=
						ressourceElement.budget.kmsParcourir;
					data.budgetBesoinCarburant.data[regionElement.codeRegion] +=
						ressourceElement.budget.besoinCarburant;
					// type
					if (ressourceElement.type === 'Ambulance') {
						// appartenance
						if (
							ressourceElement.appartenance ===
							'Ministère de la Santé'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									regionElement.codeRegion
								].ambulance.appartenance.ms.age.moins5ans += 1;
							} else {
								data.type.data[
									regionElement.codeRegion
								].ambulance.appartenance.ms.age.plus5ans += 1;
							}
						} else if (
							ressourceElement.appartenance === 'Commune'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									regionElement.codeRegion
								].ambulance.appartenance.commune.age.moins5ans += 1;
							} else {
								data.type.data[
									regionElement.codeRegion
								].ambulance.appartenance.commune.age.plus5ans += 1;
							}
						}
					} else if (ressourceElement.type === 'Camion mobile') {
						// appartenance
						if (
							ressourceElement.appartenance ===
							'Ministère de la Santé'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									regionElement.codeRegion
								].camionMobile.appartenance.ms.age.moins5ans += 1;
							} else {
								data.type.data[
									regionElement.codeRegion
								].camionMobile.appartenance.ms.age.plus5ans += 1;
							}
						} else if (
							ressourceElement.appartenance === 'Commune'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									regionElement.codeRegion
								].camionMobile.appartenance.commune.age.moins5ans += 1;
							} else {
								data.type.data[
									regionElement.codeRegion
								].camionMobile.appartenance.commune.age.plus5ans += 1;
							}
						}
					} else if (ressourceElement.type === 'Unité Sanitaire Mobile (USM)') {
						// appartenance
						if (
							ressourceElement.appartenance ===
							'Ministère de la Santé'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									regionElement.codeRegion
								].usm.appartenance.ms.age.moins5ans += 1;
							} else {
								data.type.data[
									regionElement.codeRegion
								].usm.appartenance.ms.age.plus5ans += 1;
							}
						} else if (
							ressourceElement.appartenance === 'Commune'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									regionElement.codeRegion
								].usm.appartenance.commune.age.moins5ans += 1;
							} else {
								data.type.data[
									regionElement.codeRegion
								].usm.appartenance.commune.age.plus5ans += 1;
							}
						}
					} else if (ressourceElement.type === 'VTT') {
						// appartenance
						if (
							ressourceElement.appartenance ===
							'Ministère de la Santé'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									regionElement.codeRegion
								].vtt.appartenance.ms.age.moins5ans += 1;
							} else {
								data.type.data[
									regionElement.codeRegion
								].vtt.appartenance.ms.age.plus5ans += 1;
							}
						} else if (
							ressourceElement.appartenance === 'Commune'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									regionElement.codeRegion
								].vtt.appartenance.commune.age.moins5ans += 1;
							} else {
								data.type.data[
									regionElement.codeRegion
								].vtt.appartenance.commune.age.plus5ans += 1;
							}
						}
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

// DATA REGION
async function dataProvince() {
	try {
		var data = {
				type: {
					data: {
						1: {
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
							usm: {
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
						2: {
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
							usm: {
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
						3: {
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
							usm: {
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
						4: {
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
							usm: {
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
						5: {
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
							usm: {
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
						6: {
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
							usm: {
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
						7: {
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
							usm: {
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
						8: {
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
							usm: {
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
						9: {
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
							usm: {
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
						10: {
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
							usm: {
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
						11: {
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
							usm: {
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
						12: {
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
							usm: {
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
						13: {
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
							usm: {
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
						14: {
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
							usm: {
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
						15: {
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
							usm: {
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
						16: {
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
							usm: {
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
						17: {
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
							usm: {
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
						18: {
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
							usm: {
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
						19: {
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
							usm: {
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
						20: {
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
							usm: {
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
						21: {
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
							usm: {
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
						22: {
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
							usm: {
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
						23: {
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
							usm: {
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
						24: {
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
							usm: {
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
						25: {
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
							usm: {
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
						26: {
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
							usm: {
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
						27: {
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
							usm: {
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
						28: {
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
							usm: {
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
						29: {
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
							usm: {
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
						30: {
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
							usm: {
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
						31: {
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
							usm: {
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
						32: {
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
							usm: {
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
						33: {
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
							usm: {
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
						34: {
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
							usm: {
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
						35: {
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
							usm: {
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
						36: {
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
							usm: {
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
						37: {
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
							usm: {
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
						38: {
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
							usm: {
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
						39: {
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
							usm: {
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
						40: {
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
							usm: {
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
						41: {
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
							usm: {
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
						42: {
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
							usm: {
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
						43: {
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
							usm: {
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
						44: {
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
							usm: {
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
						45: {
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
							usm: {
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
						46: {
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
							usm: {
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
						47: {
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
							usm: {
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
						48: {
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
							usm: {
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
						49: {
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
							usm: {
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
						50: {
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
							usm: {
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
						51: {
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
							usm: {
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
						52: {
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
							usm: {
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
						53: {
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
							usm: {
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
						54: {
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
							usm: {
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
						55: {
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
							usm: {
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
						56: {
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
							usm: {
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
						57: {
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
							usm: {
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
						58: {
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
							usm: {
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
						59: {
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
							usm: {
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
						60: {
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
							usm: {
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
						61: {
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
							usm: {
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
						62: {
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
							usm: {
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
						63: {
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
							usm: {
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
						64: {
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
							usm: {
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
						65: {
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
							usm: {
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
						66: {
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
							usm: {
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
						67: {
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
							usm: {
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
						68: {
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
							usm: {
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
						69: {
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
							usm: {
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
						70: {
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
							usm: {
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
						71: {
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
							usm: {
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
						72: {
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
							usm: {
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
						73: {
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
							usm: {
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
						74: {
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
							usm: {
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
						75: {
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
							usm: {
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
					data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
				},
				budgetBesoinCarburant: {
					data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
				},
				besoinUsm: {
					data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
				},
			},
			ressource = await ressourceData.getRessourceByYear();
		// ------------------------
		// province
		for (let i = 0; i < province.length; i++) {
			const provinceElement = province[i];
			// ressource
			for (let j = 0; j < ressource.length; j++) {
				const ressourceElement = ressource[j];
				if (
					provinceElement.province === ressourceElement.csr.province
				) {
					data.besoinUsm.data[provinceElement.codeProvince] +=
						ressourceElement.besoinUsm;
					data.budgetKmsParcourir.data[provinceElement.codeProvince] +=
						ressourceElement.budget.kmsParcourir;
					data.budgetBesoinCarburant.data[
						provinceElement.codeProvince
					] += ressourceElement.budget.besoinCarburant;
					// type
					if (ressourceElement.type === 'Ambulance') {
						// appartenance
						if (
							ressourceElement.appartenance ===
							'Ministère de la Santé'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									provinceElement.codeProvince
								].ambulance.appartenance.ms.age.moins5ans += 1;
							} else {
								data.type.data[
									provinceElement.codeProvince
								].ambulance.appartenance.ms.age.plus5ans += 1;
							}
						} else if (
							ressourceElement.appartenance === 'Commune'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									provinceElement.codeProvince
								].ambulance.appartenance.commune.age.moins5ans += 1;
							} else {
								data.type.data[
									provinceElement.codeProvince
								].ambulance.appartenance.commune.age.plus5ans += 1;
							}
						}
					} else if (ressourceElement.type === 'Camion mobile') {
						// appartenance
						if (
							ressourceElement.appartenance ===
							'Ministère de la Santé'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									provinceElement.codeProvince
								].camionMobile.appartenance.ms.age.moins5ans += 1;
							} else {
								data.type.data[
									provinceElement.codeProvince
								].camionMobile.appartenance.ms.age.plus5ans += 1;
							}
						} else if (
							ressourceElement.appartenance === 'Commune'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									provinceElement.codeProvince
								].camionMobile.appartenance.commune.age.moins5ans += 1;
							} else {
								data.type.data[
									provinceElement.codeProvince
								].camionMobile.appartenance.commune.age.plus5ans += 1;
							}
						}
					} else if (ressourceElement.type === 'Unité Sanitaire Mobile (USM)') {
						// appartenance
						if (
							ressourceElement.appartenance ===
							'Ministère de la Santé'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									provinceElement.codeProvince
								].usm.appartenance.ms.age.moins5ans += 1;
							} else {
								data.type.data[
									provinceElement.codeProvince
								].usm.appartenance.ms.age.plus5ans += 1;
							}
						} else if (
							ressourceElement.appartenance === 'Commune'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									provinceElement.codeProvince
								].usm.appartenance.commune.age.moins5ans += 1;
							} else {
								data.type.data[
									provinceElement.codeProvince
								].usm.appartenance.commune.age.plus5ans += 1;
							}
						}
					} else if (ressourceElement.type === 'VTT') {
						// appartenance
						if (
							ressourceElement.appartenance ===
							'Ministère de la Santé'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									provinceElement.codeProvince
								].vtt.appartenance.ms.age.moins5ans += 1;
							} else {
								data.type.data[
									provinceElement.codeProvince
								].vtt.appartenance.ms.age.plus5ans += 1;
							}
						} else if (
							ressourceElement.appartenance === 'Commune'
						) {
							// age
							if (ressourceElement.age <= 5) {
								data.type.data[
									provinceElement.codeProvince
								].vtt.appartenance.commune.age.moins5ans += 1;
							} else {
								data.type.data[
									provinceElement.codeProvince
								].vtt.appartenance.commune.age.plus5ans += 1;
							}
						}
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
		// get the document of the central
		data.document = await centralData.getDocument(req.params.id);
		// taux pdr visite
		data.carte = {
			region: await dataRegion(),
			province: await dataProvince(),
		};
		// render the page
		res.status(200).render('central/dashboard/ressource', {
			title:
				'Tableau de bord | Ressource mobilisable | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			region,
			province,
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
