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

// Desc: 회원가입 전송
exports.cPostSignup = (req, res) => {
    User.mPostSignup(req.data, (result) => {
        res.send({ result: true });
    });
};

// Desc: 로그인 전송
exports.cPostLogin = (req, res) => {
    User.mPostLogin(req.body, (value) => {
        if (value.length > 0) {
            res.send({ result: true, data: value[0] });
        } else {
            res.send({ result: false });
        }
    });
};

// Desc: 회원정보 프로필 전송
exports.cPostProfile = (req, res) => {
    User.mPostProfile(req.body, (value) => {
        console.log('value : ', value);
        if (result.length > 0) {
            res.render('profile', { result: true, data: result[0] });
        } else {
            res.send({ result: false });
        }
    });
};

// Desc: 회원정보 수정 전송
exports.cPostEdit = (req, res) => {
    console.log('req.body : ', req.body);
    User.mPostEdit(req.body, () => {
        res.send({ result: true });
    });
};

// Desc: 회원정보 삭제 전송
exports.cPostDelete = (req, res) => {
    User.mPostDelete(req.body, () => {
        res.send({ result: true });
    });
};
