// SET UP
const fs = require('fs');
// PLAN ACTION
const populationForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/planActionForm/population.json`));
const programmeForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/planActionForm/programme.json`));
const ressourceForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/planActionForm/ressource.json`));
const ressourceHumainForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/planActionForm/ressourceHumain.json`));
// RAPPORT
const populationCibleForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/populationCible.json`));
const pdrVisiteForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/pdrVisite.json`));
const ressourceHumainMobileForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/ressourceHumainMobile.json`));
const santeMaternelleForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/santeMaternelle.json`));
const santeInfantileForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/santeInfantile.json`));
const planificationFamilialeForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/planificationFamiliale.json`));
const santeScolaireForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/santeScolaire.json`));
const consultationMedicalForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/consultationMedical.json`));
const detectionPrecoceCancerForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/detectionPrecoceCancer.json`));
const maladieDepisteForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/maladieDepiste.json`));
const autreActiviteForm = JSON.parse(fs.readFileSync(`${__dirname}/../../static/json/rapportForm/autreActivite.json`));

module.exports = {
	populationForm,
	programmeForm,
	ressourceForm,
	ressourceHumainForm,
	populationCibleForm,
	pdrVisiteForm,
	ressourceHumainMobileForm,
	santeMaternelleForm,
	santeInfantileForm,
	planificationFamilialeForm,
	santeScolaireForm,
	consultationMedicalForm,
	detectionPrecoceCancerForm,
	maladieDepisteForm,
	autreActiviteForm,
}