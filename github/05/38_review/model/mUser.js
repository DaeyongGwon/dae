const mysql = require('mysql');
//db 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'daeyong',
    password: '4230',
    database: 'kdy7',
});
//db 연결을 확인하는 코드.
conn.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
    } else {
        console.log('Connected to database');
    }
});
//회원가입
exports.mPostSignup = (name, userId, password, callback) => {
    const query = `INSERT INTO user (name, userId, password) VALUES ('${name}','${userId}','${password}')`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log(rows);
        callback(rows);
    });
};

//로그인
exports.mPostLogin = (userId, password, callback) => {
    const query = `SELECT * FROM user WHERE userId='${userId}' AND password='${password}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('login :', rows);
        callback(rows);
    });
};

//프로필
exports.mPostProfile = (data, callback) => {
    const query = `SELECT * FROM user WHERE userId='${data.userId}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('프로필 rows : ', rows);
        callback('mPostProfile', rows);
    });
};

//회원정보 수정
exports.mPostEdit = (data, callback) => {
    const query = `UPDATE user SET name='${data.name}', password='${data.password}' WHERE userId='${data.userId}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('mPostEdit : ', rows);
        callback();
    });
};

//회원탈퇴
exports.mPostDelete = (data, callback) => {
    const query = `DELETE FROM user WHERE userId='${data.userId}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('mPostDelete : ', rows);
        callback();
    });
};
