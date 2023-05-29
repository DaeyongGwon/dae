const models = require('../models');
exports.index = (req, res) => {
    res.render('index');
};
//전체
exports.CgetVisitors = (req, res) => {
    models.visitor.findAll().then((result) => {
        res.render('visitor', { data: result });
    });
};
//하나씩 querystring
exports.CgetVisitor1 = (req, res) => {
    models.visitor.findOne({ where: { id: req.query.id } }).then((result) => {
        res.render('visitor', { data: [result] });
    });
};
//하나씩 params
exports.CgetVisitor2 = (req, res) => {
    models.visitor.findOne({ where: { id: req.params.id } }).then((result) => {
        res.send([result]);
    });
};

//등록
exports.CpostVisitor = (req, res) => {
    models.visitor.create({ name: req.body.name, comment: req.body.comment }).then((result) => {
        res.send({
            result: true,
            id: result.dataValues.id,
            name: req.body.name,
            comment: req.body.comment,
        });
    });
};

//수정
exports.CpatchVisitor = (req, res) => {
    models.visitor
        .update(
            {
                name: req.body.name,
                comment: req.body.comment,
            },
            {
                where: { id: req.body.id },
            }
        )
        .then(() => {
            res.send({ result: true });
        });
};

//삭제
exports.CdeleteVisitor = (req, res) => {
    models.visitor.destroy({ where: { id: req.body.id } }).then(() => {
        res.send({ result: true });
    });
};
