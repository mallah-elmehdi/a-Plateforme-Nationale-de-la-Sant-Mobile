// --- SET UP
const firebase = require('firebase/app');
require('firebase/auth');
const { firebaseConfig } = require('../conf');
const db = firebase.initializeApp(firebaseConfig);
const jwt = require('../util/jwt');
const { newError } = require('../util/error')

// AUTHENTICATION
function authentication(req, res, next) {
	try {
		db.auth()
			.signInWithEmailAndPassword(req.body.email, req.body.password).then((userCredential) => {
				// get the user
                res.locals.user = userCredential.user;
				// sign out
				db.auth().signOut();
				return next();
			})
			.catch((error) => {
				return next(newError(400, 'mot de passe ou e-mail incorrect'));
			});
	} catch (error) {
        return next(newError(500, 'quelque chose s\'est mal passé'));
	}
}

// SEND NEW PASSWORD
function newPasswordEmail(req, res, next) {
	try {

        db.auth().sendPasswordResetEmail(req.body.email)
        .then(() => {
            return res.status(200).render('./index/emailSent', {
                title: 'E-mail envoyé avec succès',
                url: req.originalUrl,
            });
        })
        .catch((error) => {
            return next(newError(400, 'e-mail incorrect'));
        });
	} catch (error) {
        return next(newError(500, 'quelque chose s\'est mal passé'));
	}
}

// GENERATE A COOKIE
async function cookie(req, res, next) {
	try {
		// make a cookie
		const token = await jwt.creatTokenById(res.locals.user.uid);
		res.cookie('welcome', token, jwt.cookieOption);
		res.cookie('baseUrl', getBaseUrl(res.locals.user.displayName));
        // redirection
		if (res.locals.user.displayName === 'c')
			return res.redirect(`/${getBaseUrl(res.locals.user.displayName)}/${res.locals.user.uid}`)
		return res.redirect(`/${getBaseUrl(res.locals.user.displayName)}/${res.locals.user.uid}/tableau-de-bord`)
	} catch (error) {
        return next(newError(500, 'quelque chose s\'est mal passé'));
	}
}

// PROTECTOR
async function protector(req, res, next) {
	try {        
        // check the cookie
        if (!req.cookies.welcome) return res.redirect('/sign-in');        
        // check the route
        if (req.cookies.baseUrl != req.baseUrl.slice(1)) return res.redirect('/' + req.cookies.baseUrl);
        // check the id
        const id = await jwt.getIdByToken(req.cookies.welcome);
        if (id != req.params.id)  return res.redirect('/' + req.cookies.baseUrl);
		return next();
	} catch (error) {
	    return res.redirect('/sign-out')
	}
}

// SIGN PROTECT
async function signProtector(req, res, next) {
	try {
		if (!req.cookies.welcome) return next();
		const id = await jwt.getIdByToken(req.cookies.welcome);
		return res.redirect(`${req.cookies.baseUrl}/${id}`);
	} catch (error) {
	    return res.redirect('/sign-out')
	}
}


// SIGN OUT
function signOut(req, res, next) {
	try {
		// clear all cookies
		for (const key in req.cookies) res.clearCookie(`${key}`);
		// redirect to sign in
		return res.redirect('/sign-in')
	} catch (error) {
        return next(newError(500, 'quelque chose s\'est mal passé'));
	}
}

function getBaseUrl(displayName) {
    try {
        if (displayName == 'c') return ('csr')
        if (displayName == 'r') return ('region')
        if (displayName == 'p') return ('province')
        if (displayName == 'a') return ('central')
    } catch (error) {   
        throw newError(500, 'quelque chose s\'est mal passé')
    }
}

module.exports = {
	authentication,
	cookie,
	protector,
    signProtector,
    signOut,
    newPasswordEmail,
};
