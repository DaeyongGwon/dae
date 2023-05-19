const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Multer 설정
const storage = multer.diskStorage({
    destination(req, file, done) {
        done(null, 'uploads/');
    },
    filename(req, file, done) {
        const ext = path.extname(file.originalname);
        const filename = `uploads-${req.body.id}${ext}`;
        done(null, filename);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});

// 템플릿
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', upload.single('profile_image'), function (req, res) {
    // 요청 데이터 처리
    const id = req.body.id;
    const pwd = req.body.pwd;
    const username = req.body.username;
    const age = req.body.age;
    const profileImagePath = `uploads/${req.file.filename}`;

    // 응답 데이터 전송
    res.render('result', {
        id: id,
        pwd: pwd,
        username: username,
        age: age,
        profileImagePath: profileImagePath,
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
