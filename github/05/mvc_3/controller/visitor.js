const visitor = require('../model/visitor');
exports.main = (req, res) => {
    res.render('index');
};
//전체
exports.CgetVisitors = (req, res) => {
    visitor.MgetVisitors((result) => {
        res.render('visitor', { data: result });
    });
};
//하나씩 querystring
exports.CgetVisitor1 = (req, res) => {
    console.log(req.query);
    visitor.MgetVisitor1(req.query.id, (value) => {
        //res.send(value);
        res.render('visitor', { data: value });
    });
};
exports.CpostVisitor = (req, res) => {
    console.log(req.body);
    visitor.MpostVisitor(req.body, (value) => {
        res.send({
            result: true,
            id: value,
            name: req.body.name,
            comment: req.body.comment,
        });
    });
};
