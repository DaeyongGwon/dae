const express = require('express');
const controller = require('../controller/visitor');
const router = express.Router();
//GET localhost:8000/visitor/
router.get('/', controller.main);
//GET localhost:8000/visitor/list
router.get('/list', controller.CgetVisitors);
//GET localhost:8000/visitor/get?id=N
router.get('/get', controller.CgetVisitor1);
//post localhost:8000/visitor/write
router.post('/write', controller.CpostVisitor);
module.exports = router;
