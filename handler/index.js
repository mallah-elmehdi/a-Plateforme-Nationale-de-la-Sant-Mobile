// DATA
const indexData = require('../data/index');

// ERROR
const { newError } = require('../util/error');

// REDIRECTION
function redirection(req, res, next) {
	try {
		// redirection
		return res.status(200).redirect('/');
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// LANDING PAGE
async function landingPage(req, res, next) {
	try {
		// get data
		var data = {};
		// get articles
		data.articles = await indexData.getArticle(parseInt(req.query.page));
		// get current user
		data.user = req.cookies.welcome ? true : false;
		// render page
		return res.status(200).render('index/landingPage', {
			title: 'Plateforme nationale de la santé mobile',
			data,
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// SIGN IN
function signIn(req, res, next) {
	try {
		// render page
		return res.status(200).render('./index/signIn', {
			title: 'Se connecter',
			url: req.originalUrl,
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// ARTICLE
async function article(req, res, next) {
	try {
		// get data
		var data = {};
		// get article
		data.article = await indexData.getArticleById(req.params.article);
		// get current user
		data.user = req.cookies.welcome ? true : false;
		// render page
		return res.status(200).render('index/article', {
			title:
				'Plateforme nationale de la santé mobile | ' +
				data.article.title,
			data,
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

module.exports = {
	redirection,
	landingPage,
	signIn,
	article,
};
