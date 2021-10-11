// SET UP
const csrData = require('../../../data/csr/csr');
const provinceData = require('../../../data/province');
const pdrVisiteData = require('../../../data/csr/rapport/pdrVisite');
const programmeData = require('../../../data/csr/planAction/programme');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// TAUX DE COVERTURE
async function coverturePdr(trimestre, csr) {
	try {
		// get all the pdr programme
		const programme = await programmeData.getProgrammeByCsr(csr);
		// get all pdr visite
		const pdrVisite = await pdrVisiteData.getPdrVisiteByCsrAndTrimestre(
			csr,
			trimestre
		);
		// variable for calculation
		var objOut = {
			pdr: [],
			tauxCover: 0,
		};
		// loop on all pdr
		for (let i = 0; i < programme.length; i++) {
			// pdr element
			const programmeElement = programme[i];
			// init pdr element and push to array
			objOut.pdr[i] = {
				id: programmeElement.id,
				pdr: programmeElement.pdr,
				year: programmeElement.year,
				localite: programmeElement.localite,
				sortieProgramme: programmeElement['t' + trimestre],
				sortieEffectue: {
					total: 0,
					observation: [],
				},
			};
			// loop on all pdr visite
			for (let j = 0; j < pdrVisite.length; j++) {
				const pdrVisiteElement = pdrVisite[j];
				if (programmeElement.id === pdrVisiteElement.pdrVisite.id) {
					objOut.pdr[i].sortieEffectue.total++;
					objOut.pdr[i].sortieEffectue.observation.push(
						pdrVisiteElement.observation.length
							? pdrVisiteElement.observation
							: 'Aucune'
					);
				}
			}
			objOut.tauxCover += Math.ceil(
				parseFloat(
					(objOut.pdr[i].sortieEffectue.total /
						objOut.pdr[i].sortieProgramme) *
						100
				)
			);
		}
		if (objOut.pdr.length)
			objOut.tauxCover = Math.ceil(
				parseFloat(objOut.tauxCover / objOut.pdr.length)
			);
		return objOut;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

// CARTE PROVINCE
async function cartePdrVisiteProvince(province, csrList) {
	try {
		var data = {
				tauxCoverturePdr: carte.pdr(csrList),
			},
			csr = await csrData.getCsrByProvince(province);
		// pdrVisite
		for (let j = 0; j < csr.length; j++) {
			// pdrVisite element
			const csrElement = csr[j];
			// sum
			// fixeMedecin
			data.tauxCoverturePdr[csrElement.csr].t1 = await coverturePdr(1, csrElement.id);
			data.tauxCoverturePdr[csrElement.csr].t2 = await coverturePdr(2, csrElement.id);
			data.tauxCoverturePdr[csrElement.csr].t3 = await coverturePdr(3, csrElement.id);
			data.tauxCoverturePdr[csrElement.csr].t4 = await coverturePdr(4, csrElement.id);
			data.tauxCoverturePdr[csrElement.csr].category = csrElement.category;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function sortieRealise(req, res, next) {
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
		data.provinceData = await cartePdrVisiteProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/sortieRealise', {
			title:
				'Tableau de bord | Taux de réalisation des sorties programmées | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'performance',
			listItem: 'sortieRealise',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	sortieRealise,
};
