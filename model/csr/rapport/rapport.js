// --- SET UP
const mongoose = require('mongoose');

// add year
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
		trimestre: {
			type: Number,
			required: true,
		},
		sortie: {
			type: [mongoose.Schema.ObjectId],
            ref: 'sortie',
			required: true,
        },
	},
	{ timestamps: true }
);

// --- MODEL
const rapport = mongoose.model('rapport', schema);

module.exports = rapport;
