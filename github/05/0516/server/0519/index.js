const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//multer설정
const upload = multer({
    dest: 'uploads/',
});
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});
//템플릿
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

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
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
