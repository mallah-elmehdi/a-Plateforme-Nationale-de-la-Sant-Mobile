// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subRessourceHumain = mongoose.Schema({
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
		emOperationnelle: {
			type: Number,
			required: true,
		},
		ressourcesHumaineMobilise: {
			type: subRessourceHumain,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const ressourceHumainMobile = mongoose.model('ressourceHumainMobile', schema);

module.exports = ressourceHumainMobile;
