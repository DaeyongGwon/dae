const models = require('../models');

exports.index = (req, res) => {
    res.render('index');
};

exports.signup = (req, res) => {
    res.render('signup');
};

exports.login = (req, res) => {
    res.render('login');
};

exports.cPostSignup = (req, res) => {
    models.user
        .create({
            name: req.body.name,
            userId: req.body.userId,
            password: req.body.password,
        })
        .then((result) => {
            console.log('회원가입 성공', result);
            res.send({
                result: true,
                userId: result.userId,
                name: result.name,
                password: result.password,
            });
        })
        .catch((err) => {
            console.log('회원가입 실패', err);
            res.send({ result: false });
        });
};

exports.cPostLogin = (req, res) => {
    const { userId, password } = req.body;

    models.user
        .findOne({
            where: {
                userId: userId,
                password: password,
            },
        })
        .then((user) => {
            if (!user) {
                res.send({ result: false });
            } else {
                res.send({ result: true, value: user });
            }
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: false });
        });
};

exports.cPostProfile = (req, res) => {
    const { userId } = req.body;

    models.user
        .findOne({
            where: {
                userId: userId,
            },
        })
        .then((user) => {
            if (!user) {
                res.send({ result: false });
            } else {
                req.session.userId = userId;
                res.render('profile', { data: user });
            }
        });
};

exports.cPostEdit = (req, res) => {
    const { name, userId, password } = req.body;

    models.user
        .update(
            {
                name: name,
                userId: userId,
                password: password,
            },
            {
                where: { userId: userId },
            }
        )
        .then(() => {
            res.send({ result: true });
        });
};

exports.cPostDelete = (req, res) => {
    models.user
        .destroy({
            where: { userId: req.body.userId },
        })
        .then(() => {
            res.send({ result: true });
        });
};
