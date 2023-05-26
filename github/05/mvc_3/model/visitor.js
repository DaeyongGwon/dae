const mysql = require('mysql');
//DB연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdtuser',
    password: '1234',
    database: 'kdt7',
});
//방명록 전체 보이기
//GET /visitor/visitor
exports.MgetVisitors = (callback) => {
    conn.query(`SELECT * FROM visitor`, function (err, rows) {
        if (err) {
            console.log(err);
        }
        console.log('MgetVisitors: ', rows);
        callback(rows);
    });
};
//방명록 하나 조회
//GET /visitor/visitor/get?id=index
exports.MgetVisitor1 = (id, callback) => {
    conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('MgetVisitor1: ', rows);
        callback(rows);
    });
};
//방명록 등록
exports.MpostVisitor = (data, callback) => {
    conn.query(`INSERT INTO visitor( name, comment) VALUES ('${data.name}', '${data.comment}');`, function (err, rows) {
        if (err) {
            console.log(err);
        }
        console.log('MpostVisitor: ', rows);
        callback(rows.insertId);
    });
};
