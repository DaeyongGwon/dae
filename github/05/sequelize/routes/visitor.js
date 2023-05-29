const express = require('express');
const controller = require('../controller/visitor');
const router = express.Router();

router.get('/', controller.main);
//GET localhost:8000/visitor/list
router.get('/list', controller.CgetVisitors);

//GET localhost:8000/visitor/get?id=N
router.get('/get', controller.CgetVisitor1);

//get localhost:8000/visitor/:id
router.get('/:id', controller.CgetVisitor2);

//post localhost:8000/visitor/write
router.post('/write', controller.CpostVisitor);

//PATCH localhost:8000/visitor/edit
router.patch('/edit', controller.CpatchVisitor);

//DELTE localhost:8000/visitor/delete
router.delete('/delete', controller.CdeleteVisitor);

module.exports = router;
