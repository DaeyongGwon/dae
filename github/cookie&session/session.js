const express = require('express');
const session = require('express-session');
const doetenv = require('dotenv').config();
const app = express();
const PORT = 8000;

// doetenv.config();

//템플릿
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.use(
    session({
        secret: process.env.COOKIE_SECRET, // 필수 항목
        resave: false,
        saveUninitialized: true,
        name: 'my-session',
    })
);

app.get('/', (req, res) => {
    req.session.name = 'dae';
    res.send({ result: true });
});

app.get('/getSession', (req, res) => {
    res.send({ name: req.session.name });
});

/**
 * secret: 안전하게 쿠키를 전송하기 위한 서명에 사용되는 옵션
 * resave: 요청이 왔을 때 세션에 수정사항이 생기지 않더라도 세션을 다시 저장할지에 대한 옵션
 * saveUninitialized: 세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 옵션
 * cookie: 세션 쿠키에 대한 설정
 * secure: https를 통해서만 쿠키가 전송되도록 하는 옵션
 */

//포트열기
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
