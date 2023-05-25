const mysql = require('mysql');
//db 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'daeyong',
    password: '4230',
    database: 'kdy7',
});

// visitor.js 방명록 전체가 보이게.
exports.getVisitors = (callback) => {
    conn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) {
            console.log(err);
            // callback(err, null);
        }
        console.log('visitor.js ', rows);
        callback(rows);
    });
};

// 방명록 하나 조회
// GET /visitor/visitor/get/id

// 방명록 등록
exports.postVisitor = (data, callback) => {
    conn.query(`INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}')`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('visitor:  ', rows);
        callback(rows.insertId);
    });
};
