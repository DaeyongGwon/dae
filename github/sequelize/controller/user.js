const models = require('../models');

exports.index = (req, res) => {
    //views/index.ejs
    res.render('index');
};

exports.signup = (req, res) => {
    //views/signup.ejs
    res.render('signup');
};

exports.signin = (req, res) => {
    //views/signin.ejs
    res.render('signin');
};

//회원가입
exports.Cpost_signup = (req, res) => {
    //모델에서 만든 모듈
    //모델에서 만든 모듈
    models.user
        .create({
            name: req.body.name,
            userid: req.body.userid,
            pw: req.body.pw,
        })
        .then((result) => {
            console.log('회원가입 성공', result);
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
    // user.Mpost_signin(req.body, (value) => {
    //     if (value.length > 0) {
    //         res.send({ result: true, data: value[0] });
    //     } else {
    //         res.send({ result: false });
    //     }
    // });
    // 위 코드 sequelize/models/user.js에서 정의한 User 모델의 메서드를 이용해 로그인 기능을 구현할 수 있습니다.
    models.user
        .findOne({
            where: {
                userid: req.body.userid,
                pw: req.body.pw,
            },
        })
        .then((value) => {
            if (value) {
                // 검색된 사용자 정보가 존재할 경우
                console.log('로그인 성공');
                console.log(value.dataValues);
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
//회원정보
exports.Cpost_profile = (req, res) => {
    // user.Mpost_profile(req.body, (value) => {
    //     console.log(value);
    //     if (value.length > 0) {
    //         res.render('profile', { result: true, data: value[0] });
    //         // res.send({ result: true, ...value });
    //     } else {
    //         res.send({ result: false });
    //     }
    // });
    // 위 코드 sequelize/models/user.js에서 정의한 User 모델의 메서드를 이용해 회원정보 기능을 구현할 수 있습니다.
    models.user
        .findOne({
            where: {
                userid: req.body.userid,
                pw: req.body.pw,
            },
        })
        .then((value) => {
            console.log(value);
            if (value.length > 0) {
                console.log('result : ', [result]);
                res.render('profile', { result: true, data: [result] });
            } else {
                res.send({ result: false });
            }
        });
};
//회원수정
// exports.Cedit_profile = (req, res) => {
//     // user.Medit_profle(req.body, () => {
//     //     res.send({ result: true });
//     // });
//     models.user.update(
//         {
//             name: req.body.name,
//             userid: req.body.userid,
//             pw: req.body.pw,
//         },
//         {
//             where: { id: req.body.id },
//         }.then(() => {
//             console.log(req.body);
//             res.send({ result: true });
//         })
//     );
// };
// //회원삭제
// exports.Cdel_profile = (req, res) => {
//     // user.Mdel_profile(req.body, () => {
//     //     res.send({ result: true });
//     // });
//     models.user
//         .destroy({
//             where: { id: req.body.id },
//         })
//         .then(() => {
//             res.send({ result: true });
//         });
// };
