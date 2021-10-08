// --- SET UP
const { newError } = require('../util/error');

function pageNotFound(req, res, next) {
	try {
        return next(404)
	} catch (error) {        
        return next(500)
	}
}

// throw the error 
function throwError(err, req, res, next) {
	try {
        if (err.code === 400) {
            req.flash('err', err.error)
            return res.redirect(req.originalUrl);
        }
        if (err.code === 401) {
            req.flash('err', err.error)
            return res.redirect(req.baseUrl);
        }
		return res.status(200).render('./util/page/error', {
			title: 'error',
			err
		});
	} catch (error) {
		return res.status(200).render('./util/page/error', {
            title: 'error',
            err
		});
	}
}

module.exports = {
    pageNotFound,
	throwError,
};
