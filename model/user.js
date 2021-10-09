// --- SET UP
const mongoose = require('mongoose');

// --- CREAT A SCHEMA
const schema = mongoose.Schema(
	{
		email: {
			type: String,
			unique:true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		type: {
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
const user = mongoose.model('user', schema);

module.exports = user;
