// --- SET UP
const express = require('express');
const router = express.Router();

// --- HAMDLER
const errorHandler = require('../handler/error');

// error page handling...
router
    .route('/')
    .get
    (
        errorHandler.pageNotFound,
        errorHandler.throwError,
    );

module.exports = router;
