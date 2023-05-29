//models/visitor.js 모듈을 불러와서 visitor 변수에 담는다.
const visitor = require('../models/visitor');

//index.ejs 렌더링.
exports.main = (req, res) => {
    res.render('index');
};
//전체
exports.CgetVisitors = (req, res) => {
    models.Visitor.findAll().then((result) => {
        console.log(result);
    });
};
