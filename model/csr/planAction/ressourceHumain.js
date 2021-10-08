// --- SET UP
const mongoose = require('mongoose');

// --- SUB SCHEMA
const subRessourceHumainFixe = mongoose.Schema({
	medecin: {
		type: Number,
		required: true,
	},
	infirmier: {
		type: Number,
		required: true,
	},
	sageFemme: {
		type: Number,
		required: true,
	},
	technicien: {
		type: Number,
		required: true,
	},
	chauffeur: {
		type: Number,
		required: true,
	},
	appuie: {
		type: Number,
		required: true,
	},
});
const subRessourceHumainMobile = mongoose.Schema({
	medecin: {
		type: Number,
		required: true,
	},
	infirmier: {
		type: Number,
		required: true,
	},
	sageFemme: {
		type: Number,
		required: true,
	},
	technicien: {
		type: Number,
		required: true,
	},
	chauffeur: {
		type: Number,
		required: true,
	},
	appuie: {
		type: Number,
		required: true,
	},
	emOperationnelle: {
		type: Number,
		required: true,
	},
});

// add a year
var today = new Date();
var thisYear = today.getFullYear();

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
		fixe: {
			type: subRessourceHumainFixe,
			required: true,
		},
		mobile: {
			type: subRessourceHumainMobile,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const ressourceHumain = mongoose.model('ressourceHumain', schema);

module.exports = ressourceHumain;
