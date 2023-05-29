const User = require('../model/mUser');
// Desc: index controller
exports.index = (req, res) => {
    res.render('index');
};

// Desc: signup controller
exports.signup = (req, res) => {
    res.render('signup');
};
// Desc: login controller
exports.login = (req, res) => {
    res.render('login');
};

// Desc: profile controller

// Desc: 회원가입 전송
exports.cPostSignup = (req, res) => {
    const { name, userId, password } = req.body;
    User.mPostSignup(name, userId, password, (result) => {
        res.send({ result: true });
    });
};

// Desc: 로그인 전송
exports.cPostLogin = (req, res) => {
    const { userId, password } = req.body;
    User.mPostLogin(userId, password, (result) => {
        if (result.length === 0) {
            res.send({ result: false });
        } else {
            req.session.userId = userId;
            res.send({ result: true, value: result[0] });
        }
    });
};

// Desc: 회원정보 프로필 전송
exports.cPostProfile = (req, res) => {
    const { userId } = req.body;
    User.mPostProfile(userId, (result) => {
        if (result.length === 0) {
            res.send({ result: false });
        } else {
            req.session.userId = userId;
            res.render('profile', { data: result[0] });
        }
    });
};

// Desc: 회원정보 수정 전송
exports.cPostEdit = (req, res) => {
    const { name, userId, password } = req.body;
    User.mPostEdit(name, userId, password, () => {
        res.send({ result: true });
    });
};

// Desc: 회원정보 삭제 전송
exports.cPostDelete = (req, res) => {
    User.mPostDelete(req.body, () => {
        res.send({ result: true });
    });
};
