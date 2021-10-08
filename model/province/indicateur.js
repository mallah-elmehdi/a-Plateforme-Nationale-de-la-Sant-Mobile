// --- SET UP
const mongoose = require('mongoose');

// --- MAIN SCHEMA
const schema = mongoose.Schema(
	{
		tauxPauvre: {
			type: Number,
			required: true,
		},
		tauxVulnerabilite: {
			type: Number,
			required: true,
		},
		tauxChomage: {
			type: Number,
			required: true,
		},
		tauxAnalphabEtismeHomme: {
			type: Number,
			required: true,
		},
		tauxAnalphabEtismeFemme: {
			type: Number,
			required: true,
		},
		tauxAccordementEauPotable: {
			type: Number,
			required: true,
		},
		tauxAccordementElectricite: {
			type: Number,
			required: true,
		},
		province: {
			type: mongoose.Schema.ObjectId,
			ref: 'province',
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const indicateur = mongoose.model('indicateur', schema);

module.exports = indicateur;
