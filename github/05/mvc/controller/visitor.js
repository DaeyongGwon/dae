// 모듈 만들어.
const visitor = require('../model/visitor');

// 데이터 가공
// ~~~~~~~~
//
exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitor = (req, res) => {
    console.log(visitor.getVisitor());
    res.render('visitor', { data: visitor.getVisitor() });
};
