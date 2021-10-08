// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

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
		pdrVisite: {
			type: mongoose.Schema.ObjectId,
			ref: 'pdrVisite',
		},
		populationCible: {
			type: mongoose.Schema.ObjectId,
			ref: 'populationCible',
		},
		ressourceHumainMobile: {
			type: mongoose.Schema.ObjectId,
			ref: 'ressourceHumainMobile',
		},
		santeMaternelle: {
			type: mongoose.Schema.ObjectId,
			ref: 'santeMaternelle',
		},
		santeInfantile: {
			type: mongoose.Schema.ObjectId,
			ref: 'santeInfantile',
		},
		planificationFamiliale: {
			type: mongoose.Schema.ObjectId,
			ref: 'planificationFamiliale',
		},
		santeScolaire: {
			type: mongoose.Schema.ObjectId,
			ref: 'santeScolaire',
		},
		consultationMedical: {
			type: mongoose.Schema.ObjectId,
			ref: 'consultationMedical',
		},
		detectionPrecoceCancer: {
			type: mongoose.Schema.ObjectId,
			ref: 'detectionPrecoceCancer',
		},
		maladieDepiste: {
			type: mongoose.Schema.ObjectId,
			ref: 'maladieDepiste',
		},
		autreActivite: {
			type: mongoose.Schema.ObjectId,
			ref: 'autreActivite',
		},
        submit: {
            type: Boolean,
            default: false,
			required: true,
        }
	},
	{ timestamps: true }
);

// --- MODEL
const sortie = mongoose.model('sortie', schema);

module.exports = sortie;
