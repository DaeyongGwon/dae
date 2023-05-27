const User = require('../model/muser');

exports.main = (req, res) => {
    res.render('index');
};

//회원가입
exports.getSignup = (req, res) => {
    res.render('signup');
};

//login
exports.getLogin = (req, res) => {
    res.render('login');
};
//profile

exports.getProfile = (req, res, next) => {
    const user = req.session.user;
    if (user) {
        User.edit({ userId: user.userId }, (err, user) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            res.render('profile', { user });
        });
    } else {
        res.render('profile', { user: null });
    }
};
exports.postSignup = (req, res) => {
    const { name, userId, password } = req.body;
    console.log(req.body);
    User.signup(name, userId, password, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(result);
            res.render('signup', { data: { name: name, userId: userId, password: password } });
        }
    });
};

exports.postLogin = (req, res) => {
    const { userId, password } = req.body;
    console.log(req.body);
    User.login(userId, password, (result) => {
        console.log(result);
        console.log('abc');

        // 세션 설정 시작
        if (result) {
            req.session.user = { userId: userId, name: result.name };
        }
        // 세션 설정 종료
        res.send({ result: true, userId: userId, password: password });
    });
};

//수정
exports.patchProfileEdit = (req, res) => {
    const { name, userId, password } = req.body;
    console.log(req.body);
    User.edit(name, userId, password, (result) => {
        console.log(result);
        res.send({ result: true, name: name, userId: userId, password: password });
    });
};
//삭제
exports.deleteProfile = (req, res) => {
    console.log(req.body);
    const { name, userId, password } = req.body;
    User.delete(userId, (rows) => {
        res.send({ result: true });
    });
};
