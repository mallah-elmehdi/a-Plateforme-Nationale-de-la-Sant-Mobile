// --- SET UP
const { getIdByToken } = require("../util/jwt");

// redirection
async function redirect(req, res, next) {
	try {
        // redirect to sign in route
		if (!req.cookies.welcome) return res.redirect('/sign-in');
		// get the id
        const id = await getIdByToken(req.cookies.welcome);
        return res.redirect(`/${req.cookies.baseUrl}/${id}`)
	} catch (error) {
		console.log(error);
		return res.redirect('/sign-out');
	}
}

module.exports = {
    redirect,
};
