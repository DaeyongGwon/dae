const mysql = require('mysql');
//db 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'daeyong',
    password: '4230',
    database: 'kdy7',
});

//아래에 코드는 db 연결을 확인하는 코드.
conn.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
    } else {
        console.log('Connected to database');
    }
});

//회원가입 전송
exports.signup = (name, userId, password, callback) => {
    const sql = `INSERT INTO user (name, userId, password) VALUES ('${name}','${userId}','${password}')`;
    conn.query(sql, [name, userId, password], (err, result) => {
        if (err) {
            console.error('회원가입 실패 : ', err);
            callback(err, null);
        } else {
            console.log('회원가입 완료');
            callback(null, result);
        }
    });
};

//로그인 전송
exports.login = (userId, password, callback) => {
    const sql = `SELECT * FROM user WHERE userId = '${userId}' AND password = '${password}'`;
    conn.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            callback(null);
        }

        console.log('로그인 성공', rows);
        callback(rows[0]);
    });
};

//회원정보 수정
exports.edit = (name, userId, password, callback) => {
    const sql = `UPDATE user SET name = '${name}', userId = '${userId}', password = '${password}' WHERE userId = '${userId}'`;
    conn.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log(rows);
        callback(rows);
    });
};
//Mysql에서 회원정보를 삭제하는 기능
exports.delete = (userId, callback) => {
    conn.query(`DELETE FROM user WHERE userId=${userId}`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log(rows);
        callback(true);
    });
};
