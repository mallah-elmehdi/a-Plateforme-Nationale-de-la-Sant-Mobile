// --- SET UP
const article = require('../model/article');
// --- ERROR
const { newError } = require('../util/error');
// ==================================================================== GENERAL
// get articles
async function getArticle(page) {
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
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// get article by id
async function getArticleById(id) {
	try {
		return await article.findById(id);
	} catch (error) {
		throw newError(500, "quelque chose s'est mal passé");
	}
}
module.exports = {
	getArticle,
	getArticleById,
};
