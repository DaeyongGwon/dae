const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/videos'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('26', {
        title: 'GET 폼 요청 결과 확인하기',
    });
});
app.post('/', (req, res) => {
    res.render('26', {
        title: 'GET 폼 요청 결과 확인하기',
    });
});

app.get('/getForm', (req, res) => {
    const name = req.query.name;
    const gender = req.query.gender;
    const year = req.query.year;
    const month = req.query.month;
    const day = req.query.day;
    const check = req.query.check;

    res.render('result', {
        title: 'GET 폼 요청 결과 확인하기',
        name: name,
        gender: gender,
        year: year,
        month: month,
        day: day,
        check: check,
        userInfo: req.query,
    });
    console.log(`name: ${name}, gender: ${gender}, year: ${year}, month: ${month},day: ${day}, interests: ${check}`);
});

app.post('/postForm', (req, res) => {
    const name = req.query.name;
    const gender = req.query.gender;
    const year = req.query.year;
    const month = req.query.month;
    const day = req.query.day;
    const check = req.query.check;
    const file = req.query.file;
    const email = req.query.email;
    res.render('result_post', {
        title: 'POST 폼 요청 결과 확인하기',
        name: name,
        gender: gender,
        year: year,
        month: month,
        day: day,
        check: check,
        file: file,
        email: email,
        userInfo: req.query,
    });
    console.log(`name: ${name}, gender: ${gender}, year: ${year}, month: ${month},day: ${day}, interests: ${check}`);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
