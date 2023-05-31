const express = require('express');
const cookieParser = require('cookie-parser');
const doetenv = require('dotenv').config();
const app = express();
const PORT = 8000;
/*쿠키
//cookieParser('secret key', 옵션객체) -> 옵션객체는 maxAge, secure, httpOnly, domain, path, expires, sameSite 등이 있다.
secret key는 서명된 쿠키가 있는 경우, 서명된 쿠키를 확인하고 서명된 쿠키가 변조되었는지 확인하는데 사용된다.
*/
console.log(process.env);

// 템플릿
const cookieOptions = {
    maxAge: 1000 * 60, // 쿠키 유효기간 1분
    httpOnly: true, // 클라이언트에서 쿠키를 확인하지 못하도록 함
    signed: true, // 서명된 쿠키를 사용할지 여부
};

// ver1
// app.use(cookieParser());

// ver2
app.use(cookieParser(process.env.COOKIE_SECRET));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.cookie('data', 'dae', cookieOptions);
    res.render('index');
});
app.get('/getCookie', (req, res) => {
    const cookies = req.cookies;
    console.log(req.signedCookies);
    res.json(req.signedCookies);
});
//쿠키제거
app.get('/clearCookie', (req, res) => {
    res.clearCookie('yong', 'dae', cookieOptions);
    res.send({ result: 'ok' });
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
