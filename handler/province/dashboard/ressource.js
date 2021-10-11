// SET UP
const provinceData = require('../../../data/province');
const ressourceData = require('../../../data/csr/planAction/ressource');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// CARTE PROVINCE
async function carteRessourceProvince(province, csrList) {
	try {
		var data = {
				budgetKmsParcourir: {
					data: carte.initCsrData(csrList),
				},
				budgetBesoinCarburant: {
					data: carte.initCsrData(csrList),
				},
				besoinUsm: {
					data: carte.initCsrData(csrList),
				},
				vehicule: {
					data: carte.vehicule(csrList),
				},
			},
			ressource = await ressourceData.getRessourceByProvince(province);
		// ressource
		for (let j = 0; j < ressource.length; j++) {
			// ressourceData element
			const ressourceElement = ressource[j];
			// sum
			// budgetKmsParcourir
			data.budgetKmsParcourir.data[ressourceElement.csr.csr].value +=
				ressourceElement.budget.kmsParcourir;
			// budgetBesoinCarburant
			data.budgetBesoinCarburant.data[ressourceElement.csr.csr].value +=
				ressourceElement.budget.besoinCarburant;
			// besoinUsm
			data.besoinUsm.data[ressourceElement.csr.csr].value +=
				ressourceElement.besoinUsm;
			// vehicule
			for (let i = 0; i < ressourceElement.vehicule.length; i++) {
				const element = ressourceElement.vehicule[i];
				if (element.type === 'Ambulance') {
					// appartenance
					if (element.appartenance === 'Ministère de la Santé') {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.ambulance.appartenance.ms.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.ambulance.appartenance.ms.age.plus5ans += 1;
						}
					} else if (element.appartenance === 'Commune') {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.ambulance.appartenance.commune.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.ambulance.appartenance.commune.age.plus5ans += 1;
						}
					} else if (
						element.appartenance ===
						'Organisation Non Gouvernementale (ONG)'
					) {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.ambulance.appartenance.ong.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.ambulance.appartenance.ong.age.plus5ans += 1;
						}
					}
				} else if (element.type === 'Camion Mobile') {
					// appartenance
					if (element.appartenance === 'Ministère de la Santé') {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.camionMobile.appartenance.ms.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.camionMobile.appartenance.ms.age.plus5ans += 1;
						}
					} else if (element.appartenance === 'Commune') {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.camionMobile.appartenance.commune.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.camionMobile.appartenance.commune.age.plus5ans += 1;
						}
					} else if (
						element.appartenance ===
						'Organisation Non Gouvernementale (ONG)'
					) {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.camionMobile.appartenance.ong.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.camionMobile.appartenance.ong.age.plus5ans += 1;
						}
					}
				} else if (element.type === 'Unité Sanitaire Mobile (USM)') {
					// appartenance
					if (element.appartenance === 'Ministère de la Santé') {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.usm.appartenance.ms.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.usm.appartenance.ms.age.plus5ans += 1;
						}
					} else if (element.appartenance === 'Commune') {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.usm.appartenance.commune.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.usm.appartenance.commune.age.plus5ans += 1;
						}
					} else if (
						element.appartenance ===
						'Organisation Non Gouvernementale (ONG)'
					) {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.usm.appartenance.ong.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.usm.appartenance.ong.age.plus5ans += 1;
						}
					}
				} else if (element.type === 'Véhicule Tout Terrain (VTT)') {
					// appartenance
					if (element.appartenance === 'Ministère de la Santé') {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.vtt.appartenance.ms.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.vtt.appartenance.ms.age.plus5ans += 1;
						}
					} else if (element.appartenance === 'Commune') {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.vtt.appartenance.commune.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.vtt.appartenance.commune.age.plus5ans += 1;
						}
					} else if (
						element.appartenance ===
						'Organisation Non Gouvernementale (ONG)'
					) {
						// age
						if (element.age <= 5) {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.vtt.appartenance.ong.age.moins5ans += 1;
						} else {
							data.vehicule.data[
								ressourceElement.csr.csr
							].value.vtt.appartenance.ong.age.plus5ans += 1;
						}
					}
				}
			}
			// 
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function ressource(req, res, next) {
	try {
		// variable
		var data = {},
			today = new Date();
		// get the document
		data.document = await provinceData.getDocument(req.params.id);
		// variable
		var csrList = carte.getCsrListByProvince(data.document.province),
			codeProvince = carte.getCodeProvince(data.document.province);
		// carte
		data.provinceData = await carteRessourceProvince(
			data.document.province,
			csrList,
		);
		// render the page
		res.status(200).render('province/dashboard/ressource', {
			title:
				'Tableau de bord | Moyens de mobilité | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'ressource',
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
