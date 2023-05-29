const express = require('express');
const app = express();
const PORT = 8000;
const session = require('express-session');
app.use(
    session({
        secret: 'my-secret-key',
        resave: false,
        saveUninitialized: true,
    })
);
app.set('view engine', 'ejs');
app.use('views', express.static(__dirname + '/views'));
//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 열기
app.use('/user', userPageRouter);
const userPageRouter = require('./routes/user');

// 아래 코드 만든 페이지를 제외하고 접속시 404오류 페이지 띄우기
app.get('*', (req, res) => {
    res.render('404');
});

// 서버 열기
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
