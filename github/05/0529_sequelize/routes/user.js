const express = require('express');
const controller = require('../controller/cUser');
const router = express.Router();

//GET localhost:8000/index
router.get('/', controller.index);

//GET localhost:8000/user/signup
router.get('/signup', controller.signup);

//GET localhost:8000/user/login
router.get('/login', controller.login);

//----------------------------------------------

//POST localhost:8000/user/signup
router.post('/signup', controller.cPostSignup);

//POST localhost:8000/user/login
router.post('/login', controller.cPostLogin);

//POST localhost:8000/user/profile
router.post('/profile', controller.cPostProfile);

//PATCH localhost:8000/user/edit
router.patch('/profile/edit', controller.cPostEdit);

//DELETE localhost:8000/user/delete
router.delete('/profile/delete', controller.cPostDelete);

//모듈 사용
module.exports = router;
