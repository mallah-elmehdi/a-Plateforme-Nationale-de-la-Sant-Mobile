// --- SET UP
const mongoose = require('mongoose');

// add a year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subPopulation = mongoose.Schema({
	rurale: {
		type: Number,
		required: true,
	},
	cible: {
		type: Number,
		required: true,
	},
	habitantMoins3km: {
		type: Number,
		required: true,
	},
	habitantEntre3km6km: {
		type: Number,
		required: true,
	},
	habitantEntre6km10km: {
		type: Number,
		required: true,
	},
	habitantPlus10km: {
		type: Number,
		required: true,
	},
});

const subEnfant = mongoose.Schema({
	naissancesAttendues: {
		type: Number,
		required: true,
	},
	moins1ans: {
		type: Number,
		required: true,
	},
	moins5ans: {
		type: Number,
		required: true,
	},
});

const subFemme = mongoose.Schema({
	far: {
		type: Number,
		required: true,
	},
	fmar: {
		type: Number,
		required: true,
	},
	femmeEnceinte: {
		type: Number,
		required: true,
	},
});

// --- CREAT A SCHEMA
const schema = mongoose.Schema(
	{
		year: {
			type: Number,
			default: thisYear,
			required: true,
		},
		csr: {
			type: mongoose.Schema.ObjectId,
			ref: 'csr',
			required: true,
		},
		population: {
			type: subPopulation,
			required: true,
		},
		distanceMoyenneRouteProche: {
			type: Number,
			required: true,
		},
		enfant: {
			type: subEnfant,
			required: true,
		},
		femme: {
			type: subFemme,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const population = mongoose.model('population', schema);

module.exports = population;
