// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

// ---- sub
const subSchema = mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	typeBeneficier: {
		type: String,
		required: true,
	},
	beneficier: {
		type: Number,
		required: true,
	},
	observation: String,
});

// --- MAIN SCHEMA - BODY
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
			required: true,
			ref: 'sortie',
		},
		activity: {
			type: [subSchema],
			required: true,
		},
		ignore: {
			type: Boolean,
			default: false,
			required: true,
		}
	},
	{ timestamps: true }
);

// --- MODEL
const autreActivite = mongoose.model('autreActivite', schema);

module.exports = autreActivite;
