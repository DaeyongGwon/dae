const models = require('../models');
const { Op } = require('sequelize');
const crypto = require('crypto');

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

//패스워드 암호화
const createHashedPassword = (pw) => {
    const salt = 'kdt7';
    return crypto.pbkdf2Sync(pw, salt, 100, 64, 'sha512').toString('base64');
};

//회원가입
exports.Cpost_signup = (req, res) => {
    models.user
        .create({
            name: req.body.name,
            userid: req.body.userid,
            pw: createHashedPassword(req.body.pw),
        })
        .then((result) => {
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
// 암호화된 패스워드를 비교해서 일치하면 로그인
exports.Cpost_signin = async (req, res) => {
    const User = await models.user.findOne({
        where: {
            userid: req.body.userid,
        },
    });
    console.log('해쉬비번 : ', createHashedPassword(req.body.pw));
    console.log('User.dataValues : ', User.dataValues);
    if (createHashedPassword(req.body.pw) === User.dataValues.pw) {
        res.send({ result: true, data: User.dataValues });
    } else {
        res.send({ result: false });
    }
};

/*암호화 하기 전
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
*/

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
                pw: createHashedPassword(req.body.pw),
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
