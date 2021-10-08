// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subConsultation = mongoose.Schema({
	t1: {
		type: Number,
		required: true,
	},
	t2: {
		type: Number,
		required: true,
	},
	t3: {
		type: Number,
		required: true,
	},
});

const subCpn = mongoose.Schema({
	nouvelleInscrite: {
		type: subConsultation,
		required: true,
	},
	ancienneInscrite: {
		type: subConsultation,
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
		femmePriseCharge: {
			type: Number,
			required: true,
		},
		cpn: {
			type: subCpn,
			required: true,
		},
		autreConsultation: {
			type: Number,
			required: true,
		},
		femmeExaminePostNatal: {
			type: Number,
			required: true,
		},
		garDepiste: {
			type: Number,
			required: true,
		},
		vat: {
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
const santeMaternelle = mongoose.model('santeMaternelle', schema);

module.exports = santeMaternelle;
