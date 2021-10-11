// SET UP
const provinceData = require('../../../data/province');
const ressourceHumainData = require('../../../data/csr/planAction/ressourceHumain');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// CARTE PROVINCE
async function carteRessourceHumainProvince(province, csrList) {
	try {
		var data = {
				fixeMedecin : {
					data: carte.initCsrData(csrList),
				},
				fixeInfirmier : {
					data: carte.initCsrData(csrList),
				},
				fixeSageFemme : {
					data: carte.initCsrData(csrList),
				},
				fixeTechnicien : {
					data: carte.initCsrData(csrList),
				},
				fixeChauffeur : {
					data: carte.initCsrData(csrList),
				},
				fixeAppuie : {
					data: carte.initCsrData(csrList),
				},
				mobileMedecin : {
					data: carte.initCsrData(csrList),
				},
				mobileInfirmier : {
					data: carte.initCsrData(csrList),
				},
				mobileSageFemme : {
					data: carte.initCsrData(csrList),
				},
				mobileTechnicien : {
					data: carte.initCsrData(csrList),
				},
				mobileChauffeur : {
					data: carte.initCsrData(csrList),
				},
				mobileAppuie : {
					data: carte.initCsrData(csrList),
				},
				mobileEmOperationnelle : {
					data: carte.initCsrData(csrList),
				},
			},
			ressourceHumain = await ressourceHumainData.getRessourceHumainByProvince(province);
		// ressourceHumain
		for (let j = 0; j < ressourceHumain.length; j++) {
			// ressourceHumain element
			const ressourceHumainElement = ressourceHumain[j];
			// sum
			// fixeMedecin
			data.fixeMedecin.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.fixe.medecin;
			// fixeInfirmier
			data.fixeInfirmier.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.fixe.infirmier;
			// fixeSageFemme
			data.fixeSageFemme.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.fixe.sageFemme;
			// fixeTechnicien
			data.fixeTechnicien.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.fixe.technicien;
			// fixeChauffeur
			data.fixeChauffeur.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.fixe.chauffeur;
			// fixeAppuie
			data.fixeAppuie.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.fixe.appuie;
			// mobileMedecin
			data.mobileMedecin.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.mobile.medecin;
			// mobileInfirmier
			data.mobileInfirmier.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.mobile.infirmier;
			// mobileSageFemme
			data.mobileSageFemme.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.mobile.sageFemme;
			// mobileTechnicien
			data.mobileTechnicien.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.mobile.technicien;
			// mobileChauffeur
			data.mobileChauffeur.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.mobile.chauffeur;
			// mobileAppuie
			data.mobileAppuie.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.mobile.appuie;
			// mobileEmOperationnelle
			data.mobileEmOperationnelle.data[ressourceHumainElement.csr.csr].value += ressourceHumainElement.mobile.emOperationnelle;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function ressourceHumain(req, res, next) {
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
		data.provinceData = await carteRessourceHumainProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/ressourceHumain', {
			title:
				'Tableau de bord | Ressources humaines | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'ressource',
			listItem: 'ressourceHumain',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	ressourceHumain,
};
