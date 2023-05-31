const express = require('express');
const controller = require('../controller/user');
const router = express.Router();

//GET localhost:8000/user
router.get('/', controller.index);
//GET localhost:8000/user/signup
router.get('/signup', controller.signup);
//POST localhost:8000/user/signup
router.post('/signup', controller.Cpost_signup);

//GET localhost:8000/user/signin
router.get('/signin', controller.signin);
//POST localhost:8000/user/signin
router.post('/signin', controller.Cpost_signin);
//POST localhost:8000/user/signout
router.get('/signout', controller.Cget_signout);
//POST localhost:8000/user/profile
router.post('/profile', controller.Cpost_profile);
//PATCH localhost:8000/user/profile/edit
router.patch('/profile/edit', controller.Cedit_profile);
//DELETE localhost:8000/user/profile/del
router.delete('/profile/del', controller.Cdel_profile);

//모듈사용
module.exports = router;
