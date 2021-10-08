// --- SET UP
const mongoose = require('mongoose');

// --- CREAT A SCHEMA
const schema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const link = mongoose.model('link', schema);

module.exports = link;
