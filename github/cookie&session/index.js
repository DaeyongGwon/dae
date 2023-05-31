//서버 파일 시작
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
//session 설정
const session = require('express-session');
//쿠키 설정
app.use(cookieParser());
const cookieOption = {
    maxAge: 20000,
};

const PORT = 8000;
//템플릿 엔진 설정
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 쿠키 parser의 옵션객체의 종류 -> https://expressjs.com/ko/4x/api.html#express.urlencoded

//세션
app.use(
    session({
        secret: 'secret key',
    })
);

//쿠키
app.get('/', (req, res) => {
    // 쿠키 요청
    res.cookie('apple', 'kdt7', cookieOption);
    res.cookie('samsung', 'kdt8', cookieOption);
    // 세션 요청
    req.session.user = {
        userid: 'dae',
        name: 'dae',
    };

    res.render('index', { data: req.cookies.apple, data2: req.cookies.samsung });
});
// 쿠키는 클라이언트에 저장되기 때문에 변질되거나 해킹당할 위험이 존재한다.
// 따라서 쿠키에는 중요한 정보를 저장하지 않는 것이 좋다.
// 세션은 서버에 저장되기 때문에 쿠키보다 안전하다.
// 세션은 서버에 저장되기 때문에 서버의 메모리를 차지한다.
// 속도는 쿠키가 더 빠르다.

//서버 열기

// 세션확인용
app.get('/session', (req, res) => {
    console.log(req.session.user);
    res.send('session');
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
