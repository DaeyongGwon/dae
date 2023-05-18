const express = require('express');
const app = express();
const PORT = 8080;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//엔진 불러오기
app.set('view engine', 'ejs');
//views 폴더 사용한다는 명령어
app.use(express.static(__dirname + 'views'));

// localhost:8080 으로 들어갔을 때 나오는 페이지의 코드
app.get('/', (req, response) => {
    response.render('index');
});

app.get('/practice26', (req, response) => {
    response.render('26');
});

app.get('/practice27', (req, response) => {
    response.render('27');
});

//localhost:8080 페이지의 result페이지.
app.get('/result26', (req, response) => {
    response.render('result26', {
        title: '실습26번 해설입니다.',
        info: req.query,
    });
});

app.post('/result27', (req, response) => {
    const info = req.body;
    console.log(req.body);
    console.log(req.query);
    response.render('result27', {
        title: '실습27번.',
        info: info,
    });
});

// 안해도 되는데 잘 열렸는지 확인하려고 만든 코드
app.listen(PORT, () => {
    console.log(`https://localhost:${PORT}`);
});
