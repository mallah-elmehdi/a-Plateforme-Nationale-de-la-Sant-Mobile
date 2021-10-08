// --- SET UP
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

// --- CREAT A SCHEMA
const schema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- PAGINATION
schema.plugin(mongoosePaginate);

// --- MODEL
const article = mongoose.model('article', schema);

module.exports = article;
