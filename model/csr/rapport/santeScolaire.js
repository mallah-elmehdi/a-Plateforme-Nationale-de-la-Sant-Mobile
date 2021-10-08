// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subAll = mongoose.Schema({
	cible: {
		type: Number,
		required: true,
	},
	realisation: {
		type: Number,
		required: true,
	},
});
const subLutte = mongoose.Schema({
	echelleMetrique: {
		type: subAll,
		required: true,
	},
	refractionAutomatique: {
		type: subAll,
		required: true,
	},
});

// --- MAIN SCHEMA
const schema = mongoose.Schema(
	{
		year: {
			type: Number,
			default: thisYear,
			required: true,
		},
		trimestre: {
			type: Number,
			required: true,
		},
		csr: {
			type: mongoose.Schema.ObjectId,
			ref: 'csr',
			required: true,
		},
		sortie: {
			type: mongoose.Schema.ObjectId,
			ref: 'sortie',
			required: true,
		},
		etablissementVisite: {
			type: Number,
			required: true,
		},
		eleveExamineVms: {
			type: subAll,
			required: true,
		},
		lutteContreDeficienceVisuelle: {
			type: subLutte,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const santeScolaire = mongoose.model('santeScolaire', schema);

module.exports = santeScolaire;
