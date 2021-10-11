// SET UP
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash-messages');
const { sessionSecret } = require('./conf');
// CREAT APPLICATION
const app = express();

// DATABASE
require('./db');

// VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/static`));

// APP USES
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: sessionSecret,
	})
);
app.use(flash());

// ROUTING

// INDEX
const index = require('./route/index');

// CS
const general = require('./route/csr/general');

// PLAN ACTION
const planAction = require('./route/csr/planAction/planAction');
const population = require('./route/csr/planAction/population');
const programme = require('./route/csr/planAction/programme');
const ressource = require('./route/csr/planAction/ressource');
const ressourceHumain = require('./route/csr/planAction/ressourceHumain');

// RAPPORT
const rapport = require('./route/csr/rapport/rapport');
const trimestre = require('./route/csr/rapport/trimestre');
const sortie = require('./route/csr/rapport/sortie');
const pdrVisite = require('./route/csr/rapport/pdrVisite');
const populationCible = require('./route/csr/rapport/populationCible');
const ressourceHumainMobile = require('./route/csr/rapport/ressourceHumainMobile');
const santeMaternelle = require('./route/csr/rapport/santeMaternelle');
const santeInfantile = require('./route/csr/rapport/santeInfantile');
const planificationFamiliale = require('./route/csr/rapport/planificationFamiliale');
const santeScolaire = require('./route/csr/rapport/santeScolaire');
const consultationMedical = require('./route/csr/rapport/consultationMedical');
const detectionPrecoceCancer = require('./route/csr/rapport/detectionPrecoceCancer');
const maladieDepiste = require('./route/csr/rapport/maladieDepiste');
const autreActivite = require('./route/csr/rapport/autreActivite');

// PROVINCE
const province = require('./route/province');

// // REGION
const region = require('./route/region');

// // CENTRAL
// const central = require('./route/central');

// ERROR
const errorPage = require('./route/errorPage');

app.use('/', index);
app.use(
	'/csr',
	general,
	planAction,
	population,
	programme,
	ressource,
	ressourceHumain,
	rapport,
	trimestre,
	sortie,
	pdrVisite,
	populationCible,
	ressourceHumainMobile,
	santeMaternelle,
	santeInfantile,
	planificationFamiliale,
	santeScolaire,
	consultationMedical,
	detectionPrecoceCancer,
	maladieDepiste,
	autreActivite
);
app.use('/province', province);
app.use('/region', region);
// app.use('/central', central);
app.use('*', errorPage);

// SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`listening to PORT ${PORT} ...`);
});
