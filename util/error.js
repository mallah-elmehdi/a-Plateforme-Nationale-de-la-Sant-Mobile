// new error
function newError(code, msg) {
    var err = new Error();
    err.error = msg;
    err.code = code
    return (err);
}

module.exports = {
    newError,
}