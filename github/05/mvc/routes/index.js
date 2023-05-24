const express = require('express');
// 컨트롤러 연결
const controller = require('../controller/visitor');
const router = express.Router();

//컨트롤러에서 만든 모듈 함수를 가져온다.
router.get('/', controller.main);
router.get('/visitor', controller.getVisitor);

module.exports = router;
