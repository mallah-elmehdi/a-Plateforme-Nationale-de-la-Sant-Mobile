// --- SET UP
const jwt = require('../util/jwt');
const userData = require('../data/user');
const { newError } = require('../util/error');

// AUTHENTICATION
async function authentication(req, res, next) {
	try {
		// get the user
		var candidate = await userData.getUserByEmailAndPassword(
			req.body.email,
			req.body.password
		);
		// check if the user exist
		if (!candidate) {
			req.flash('err', 'mot de passe ou e-mail incorrect');
			return res.redirect('/sign-in');
		}
		res.locals.user = candidate;
		return next();
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// GENERATE A COOKIE
async function token(req, res, next) {
	try {
		// make a token
		const token = await jwt.creatTokenById(res.locals.user.document);
		res.cookie('welcome', token, jwt.cookieOption);
		res.cookie('baseUrl', res.locals.user.type);
		// redirection
		return res.redirect(
			'/' + res.locals.user.type + '/' + res.locals.user.document
		);
	} catch (error) {
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// PROTECTOR
async function protector(req, res, next) {
	try {
		// check the cookie
		if (!req.cookies.welcome) return res.redirect('/sign-in');
		// check the route
		if (req.cookies.baseUrl != req.baseUrl.slice(1))
			return res.redirect('/' + req.cookies.baseUrl);
		// check the id
		const id = await jwt.getIdByToken(req.cookies.welcome);
		if (id != req.params.id) return res.redirect('/' + req.cookies.baseUrl);
		return next();
	} catch (error) {
		return res.redirect('/sign-out');
	}
}

// SIGN PROTECT
async function signProtector(req, res, next) {
	try {
		if (!req.cookies.welcome) return next();
		const id = await jwt.getIdByToken(req.cookies.welcome);
		return res.redirect(`${req.cookies.baseUrl}/${id}`);
	} catch (error) {
		return res.redirect('/sign-out');
	}
}

// SIGN OUT
function signOut(req, res, next) {
	try {
		// clear all cookies
		for (const key in req.cookies) res.clearCookie(`${key}`);
		// redirect to sign in
		return res.redirect('/sign-in');
	} catch (error) {
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

module.exports = {
	authentication,
	token,
	protector,
	signProtector,
	signOut,
};
