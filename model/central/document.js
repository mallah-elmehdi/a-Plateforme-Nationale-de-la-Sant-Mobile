// --- SET UP
const mongoose = require('mongoose');

// --- CREAT A SCHEMA
const schema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		document: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const document = mongoose.model('document', schema);

module.exports = document;
