const express = require('express');
const app = express();
const PORT = 8000;
//템플릿
app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'views'));
//body-parser 포스트 전송으로 받을 값들을 받을 수 있다.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//port 생성
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.render('30');
});

app.get('/axios', (req, res) => {
    res.send(req.query);
});

app.post('/axios', (req, res) => {
    const { id, pwd } = req.body;
    const myId = '1'; // 내가 지정한 아이디
    const myPwd = '12'; // 내가 지정한 패스워드
    if (id == myId && pwd == myPwd) {
        res.send({ success: true, message: '로그인 성공' });
    } else {
        res.send({ success: false, message: '아이디 또는 비밀번호를 잘못 입력했습니다.' });
    }
});
// app.get('/ajax', (req, res) => {
//     console.log(req.query);
//     res.send(req.query);
// });

// app.post('/ajax', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// });

// app.get('/fetch', (req, res) => {
//     res.send(req.query);
// });
// app.post('/fetch', (req, res) => {
//     res.send(req.body);
// });
