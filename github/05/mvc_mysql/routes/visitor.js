const express = require('express');
const controller = require('../controller/visitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitor', controller.getVisitors);

router.post('/write', controller.postVisitor);

module.exports = router;
