const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//multer 파일 업로드 경로 설정
const multer = require('multer');
const upload = multer({
    dest: 'uploads/',
});
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            ㅌ;
            const ext = path.extname(file.originalname);
            done(null, path.basename('uploads', ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});
//템플릿
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', (req, res) => {
    res.render('index');
});
app.post('/upload', uploadDetail.single('fileName'), function (req, res) {
    console.log(req.file);
    console.log(req.body);
    res.send('파일업로드');
});
app.post('/upload/array', uploadDetail.array('fileName'), (req, res) => res.send('멀티파일업로드'));
app.post('/upload/fields', uploadDetail.fields([{ name: 'fileName1' }, { name: 'fileName2' }]), (req, res) =>
    res.send('각각 멀티 파일업로드')
);

app.post('/dynamic', uploadDetail.single('dynamicUpload'), function (req, res) {
    res.send('dynamic 업로드');
    res.send({ path: req.file.path });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
