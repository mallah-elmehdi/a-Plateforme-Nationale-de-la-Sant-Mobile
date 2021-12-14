// SET UP
const fs = require('fs');
const centralData = require('../../data/central');
const articleData = require('../../data/article');

// ERROR
const { newError } = require('../../util/error');

// IMAGE
const multer = require('multer');
const sharp = require('sharp');

// IMAGE UPLOAD
const multerStorage = multer.memoryStorage();
//
const multerFilter = (req, file, cb) => {
	if (file.mimetype.startsWith('image')) {
		cb(null, true);
	} else {
		cb('Pas une image! Veuillez télécharger uniquement des images.', false);
	}
};
//
const upload = multer({
	fileFilter: multerFilter,
	storage: multerStorage,
});
//
const uploadImage = upload.single('image');
//
async function shapeImage(req, res, next) {
	try {
		if (!req.file) return res.redirect(req.originalUrl);
		req.file.filename = `article-${Date.now()}.png`;
		await sharp(req.file.buffer)
			.resize(1200, 600)
			.toFormat('jpg')
			.jpeg({ quality: 90 })
			.toFile(
				`${__dirname}/../../static/image/article/${req.file.filename}`
			);
		return next();
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// redirection
async function addArticle(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document
		data.document = await centralData.getDocument(req.params.id);
		// render the page
		res.status(200).render('central/addArticle', {
			title: 'Ajouter un article | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// redirection
async function addArticleData(req, res, next) {
	try {
		req.body.image = req.file.filename;
		const article = await articleData.addArticle(req.body);
		return res.redirect(
			req.baseUrl + '/' + req.params.id + '/article/' + article.id
		);
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// redirection
async function getArticles(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document
		data.document = await centralData.getDocument(req.params.id);
		// articles
		data.articles = await articleData.getArticles(parseInt(req.query.page));
		// render the page
		return res.status(200).render('central/articles', {
			title: 'Articles | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// redirection
async function getArticle(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document
		data.document = await centralData.getDocument(req.params.id);
		// articles
		data.article = await articleData.getArticleById(req.params.article);
		// render the page
		return res.status(200).render('central/article', {
			title: data.article.title + ' | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// redirection
async function deleteArticle(req, res, next) {
	try {
		const article = await articleData.deleteArticleById(req.params.article);
		// delete image
		fs.unlink(
			`${__dirname}/../../static/image/article/${article.image}`,
			(error) => {
				if (error) {
					console.log(error);
					return next(newError(500, "quelque chose s'est mal passé"));
				}
			}
		);
		req.flash('succ', "L'article a été supprimé avec succès.");
		// render the page
		return res.redirect(req.baseUrl + '/' + req.params.id + '/articles');
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// redirection
async function editArticle(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document
		data.document = await centralData.getDocument(req.params.id);
		// articles
		data.article = await articleData.getArticleById(req.params.article);
		// render the page
		return res.status(200).render('central/editArticle', {
			title: data.article.title + ' | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// redirection
async function editArticleData(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document
		fs.unlink(
			`${__dirname}/../../static/image/article/${req.query.image}`,
			(error) => {
				if (error) {
					console.log(error);
					return next(newError(500, "quelque chose s'est mal passé"));
				}
			}
		);
		req.body.image = req.file.filename;
		const article = await articleData.editArticleById(req.params.article, req.body);
		return res.redirect(
			req.baseUrl + '/' + req.params.id + '/article/' + article.id
		);
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}



module.exports = {
	addArticle,
	addArticleData,
	uploadImage,
	shapeImage,
	getArticles,
	getArticle,
	deleteArticle,
	editArticle,
	editArticleData
};
