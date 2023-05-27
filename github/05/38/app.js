const express = require('express');
const indexRouter = require('./routes/user');
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
app.use('/user', indexRouter);

app.get('*', (req, res) => {
    res.render('404');
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
