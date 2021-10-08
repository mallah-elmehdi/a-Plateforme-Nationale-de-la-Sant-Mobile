// --- SET UP
const mongoose = require('mongoose');

// --- CREAT A SCHEMA
const schema = mongoose.Schema(
	{
		region: {
			type: String,
			required: true,
        },
		codeRegion: String,
		email: {
			type: String,
			lowercase: true,
			required: true,
			unique: true,
		},
		password: String,
	},
	{ timestamps: true }
);

// --- MODEL
const region = mongoose.model('region', schema);

module.exports = region;
