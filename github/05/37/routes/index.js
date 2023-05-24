const express = require('express');
const controller = require('../controller/login');
const router = express.Router();

router.use('/', controller.login);

module.exports = router;
