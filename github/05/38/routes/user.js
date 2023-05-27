// routes/user.js

const express = require('express');
const controller = require('../controller/cuser');
const router = express.Router();

router.get('/', controller.main);
router.get('/signup', controller.getSignup);
router.get('/login', controller.getLogin);
router.get('/profile', controller.getProfile);

router.post('/signup', controller.postSignup);
router.post('/login', controller.postLogin);
router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/user/login'); // 로그아웃 후 로그인 페이지로 리다이렉트
});
router.patch('/edit', controller.patchProfileEdit);
router.delete('/delete', controller.deleteProfile);

module.exports = router;
