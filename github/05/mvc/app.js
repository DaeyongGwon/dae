const express = require('express');
const app = express();
const PORT = 8000;

//view
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

//404
app.get('*', (req, res) => {
    res.render('404');
});

//PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
