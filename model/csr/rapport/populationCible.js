// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subEnfant = mongoose.Schema({
	naissanceAttendu: {
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
		populationCible: {
			type: Number,
			required: true,
		},
		fmar: {
			type: Number,
			required: true,
		},
		enfant: {
			type: subEnfant,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const populationCible = mongoose.model('populationCible', schema);

module.exports = populationCible;
