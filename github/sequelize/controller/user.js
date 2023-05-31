const models = require('../models');
const { Op } = require('sequelize');

//render : index.ejs
exports.index = (req, res) => {
    res.render('index');
};
//render : signup.ejs
exports.signup = (req, res) => {
    //views/signup.ejs
    res.render('signup');
};
//render : signin.ejs
exports.signin = (req, res) => {
    //views/signin.ejs
    res.render('signin');
};
//회원가입
exports.Cpost_signup = (req, res) => {
    models.user
        .create({
            name: req.body.name,
            userid: req.body.userid,
            pw: req.body.pw,
        })
        .then((result) => {
            req.session.user = result; // 세션에 사용자 정보 저장
            res.send({
                result: true,
                userid: result.userid,
                name: result.name,
                pw: result.pw,
            });
        })
        .catch((err) => {
            console.log('회원가입 실패', err);
            res.send({ result: false });
        });
};
//로그인
exports.Cpost_signin = (req, res) => {
    models.user
        .findOne({
            //원하는 컬럼 가져올 때 방법
            //attributes: ['id', 'name', 'userid', 'pw'],
            where: {
                userid: req.body.userid,
                pw: req.body.pw,
            },
        })
        .then((value) => {
            if (value) {
                req.session.user = value; // 세션에 사용자 정보 저장
                // 검색된 사용자 정보가 존재할 경우
                console.log('로그인 성공');
                res.send({ result: true, data: value });
            } else {
                console.log('로그인 실패');
                res.send({ result: false });
            }
        })
        .catch((err) => {
            console.log('로그인 오류', err);
            res.send({ result: false });
        });
};
// 로그아웃
exports.Cget_signout = (req, res) => {
    req.session.destroy(); // 세션 파기
    res.send({ result: true });
};
//회원정보
exports.Cpost_profile = (req, res) => {
    models.user
        .findOne({
            where: {
                userid: req.body.userid,
            },
        })
        .then((value) => {
            if (value) {
                res.render('profile', { result: true, data: value });
            } else {
                res.send({ result: false });
            }
        });
};
//회원수정
exports.Cedit_profile = (req, res) => {
    models.user
        .update(
            {
                name: req.body.name,
                userid: req.body.userid,
                pw: req.body.pw,
            },
            {
                where: { id: req.body.id },
            }
        )
        .then(() => {
            console.log('req.body : ', req.body);
            res.send({ result: true, data: req.body });
        });
};
// //회원삭제
exports.Cdel_profile = (req, res) => {
    models.user
        .destroy({
            where: { id: req.body.id },
        })
        .then(() => {
            res.send({ result: true });
        });
};
