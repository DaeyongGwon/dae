const models = require('../models');
const { Op } = require('sequelize');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
exports.index = (req, res) => {
    res.render('index');
};
exports.signup = (req, res) => {
    //views/signup.ejs
    res.render('signup');
};
exports.signin = (req, res) => {
    res.render('signin');
};
exports.Cpost_signup = async (req, res) => {
    const result = await models.User.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: createHashedPassword(req.body.pw),
    });
    if (result) {
        res.send({ result: true });
    }
};
exports.Cpost_signin = async (req, res) => {
    const user = await models.User.findOne({
        where: {
            userid: req.body.userid,
        },
    });
    console.log(createHashedPassword(req.body.pw), user.dataValues.pw);
    if (createHashedPassword(req.body.pw) === user.dataValues.pw) {
        res.send({ result: true, data: user.dataValues });
    } else {
        res.send({ result: false });
    }
};
exports.Cpost_profile = (req, res) => {
    models.User.findAll({
        where: { userid: req.body.userid },
        limit: 1,
    }).then((value) => {
        console.log('Cpost_profile', value);
        if (value) {
            res.render('profile', { result: true, data: value[0].dataValues });
            // res.send({ result: true, ...value });
        } else {
            res.send({ result: false });
        }
    });
};
exports.Cedit_profile = (req, res) => {
    models.User.update(
        {
            userid: req.body.userid,
            name: req.body.name,
            pw: req.body.pw,
        },
        { where: { id: req.body.id } }
    ).then(() => {
        res.send({ result: true });
    });
};
exports.Cdel_profile = (req, res) => {
    models.User.destroy({
        where: { id: req.body.id },
    }).then(() => {
        res.send({ result: true });
    });
};
const createHashedPassword = (pw) => {
    const salt = 'kdt7';
    return crypto.pbkdf2Sync(pw, salt, 10, 64, 'sha512').toString('base64');
};
