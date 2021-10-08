// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subVaccination = mongoose.Schema({
	rr: {
		type: Number,
		required: true,
	},
	pentavalent: {
		type: Number,
		required: true,
	},
	bcg: {
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
		enfantPrisesCharge: {
			type: Number,
			required: true,
		},
		vaccination: {
			type: subVaccination,
			required: true,
		},
		vitamineA: {
			type: Number,
			required: true,
		},
		vitamineD: {
			type: Number,
			required: true,
		},
		enfantsAvecInsuffisancePonderale: {
			type: Number,
			required: true,
		},
		enfantsAvecRetardCroissance: {
			type: Number,
			required: true,
		},
		diarrhe: {
			type: Number,
			required: true,
		},
		ira: {
			type: Number,
			required: true,
		},
		reference: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const santeInfantile = mongoose.model('santeInfantile', schema);

module.exports = santeInfantile;
