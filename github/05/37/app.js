const express = require('express');
const app = express();
const PORT = 8000;
//템플릿
app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'views'));

//body-parser 포스트 전송으로 받을 값들을 받을 수 있다.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
const loginRouter = require('./routes/index');
app.use('/', loginRouter);

//404
app.get('*', (req, res) => {
    res.render('404');
});
//port 생성
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
