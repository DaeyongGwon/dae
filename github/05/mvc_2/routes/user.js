const express = require('express');
const controller = require('../controller/user');
const router = express.Router();

//localhost:8000/user/
router.get('/', controller.user);
//router.post("/login", controller.userPo)

// //localhost:8000/user/age
// router.get("/age", 컨트롤러 함수)

module.exports = router;
