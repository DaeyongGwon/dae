const comment = require('../model/comment');

exports.main = (req, res) => {
    res.render('index');
};

exports.comments = (req, res) => {
    res.render('comments', { commentInfos: comment.commentInfos() });
};

exports.comment = (req, res) => {
    console.log(req.params);
    const commentId = req.params.page;
    const comments = comment.commentInfos();

    // comment/pages의 숫자가 배열보다 크다면 404페이지 출력
    if (commentId < 1 || commentId > comments.length) {
        res.render('404');
    }
    if (isNaN(commentId)) {
        res.render('404');
    }
    res.render('comment', { commentInfos: comments[commentId - 1] });
};
