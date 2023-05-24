const login = require('../model/login');

exports.login = (req, res) => {
    const { id, pwd } = req.body;
    const { loginInfos } = login;
    res.render('index', { loginInfos });

    const myId = loginInfos.id;
    const myPwd = loginInfos.pwd;
    if (id == myId && pwd == myPwd) {
        res.send({ success: true, message: '로그인 성공' });
    } else {
        res.send({ success: false, message: '아이디 또는 비밀번호를 잘못 입력했습니다.' });
    }

    // console.log(userModel.users.split('\n'));
    // const userData = login.users.split('\n');
    // const users = []; // 사용자 전체
    // const userIds = []; //id 만
    // for (const user of userData) {
    //     users.push({
    //         id: user.split('//')[0],
    //         pw: user.split('//')[1],
    //         name: user.split('//')[2],
    //     });
    // }
    // if (idx !== -1) {
    //     console.log('아이디있음');
    //     if (users[idx].pwd === req.body.pwd) {
    //         res.send({ result: true, userInfo: req.body, msg: '성공하였습니다.' });
    //     } else {
    //         console.log('로그인 실패');
    //     }
    // } else {
    //     console.log('아이디 없음');
    //     res.send({ result: false });
    // }
};
