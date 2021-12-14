// --- SET UP
const article = require('../model/article');
// --- ERROR
const { newError } = require('../util/error');
// ==================================================================== GENERAL
// get the user document
async function addArticle(body) {
	try {
		console.log(body);
		return await article.create(body);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// get articles
async function getArticles(page) {
	try {
		if (!page) page = 1;
		return await article.paginate(
			{},
			{
				page,
				limit: 12,
			}
		);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// get article by id
async function getArticleById(id) {
	try {
		return await article.findById(id);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// get article by id
async function editArticleById(id, body) {
	try {
		return await article.findByIdAndUpdate(id, body);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// delete article by id
async function deleteArticleById(id) {
	try {
		return await article.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}
module.exports = {
	addArticle,
	getArticles,
	getArticleById,
	deleteArticleById,
	editArticleById
};
