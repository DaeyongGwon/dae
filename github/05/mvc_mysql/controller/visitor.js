const visitor = require('../model/visitor');

exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitors = (req, res) => {
    //getVisitors() 는 모델에서 가져온 데이터다.
    res.render('visitor', { data: visitor.getVisitors() });
};

exports.getVisitors = (req, res) => {
    visitor.getVisitors((result) => {
        res.render('visitor', { data: result });
    });
};

exports.postVisitor = (req, res) => {
    console.log(req.body);
    visitor.postVisitor(req.body, (value) => {
        res.send({ result: true, id: value, name: req.body.name, comment: req.body.comment });
    });
};
