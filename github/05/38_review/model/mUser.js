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
exports.mPostSignup = (data, callback) => {
    const query = `INSERT INTO user (name, userid, pw) VALUES 
    ('${data.name}','${data.userid}','${data.pw}')`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('mpost_signip', rows);
        callback(rows);
    });
};

//로그인
exports.mPostLogin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND password='${data.pw}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log('err', err);
        }
        console.log('login :', rows);
        callback(rows);
    });
};

//프로필
exports.mPostProfile = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('프로필 rows : ', rows);
        callback(rows);
    });
};

//회원정보 수정
exports.mPostEdit = (data, callback) => {
    const query = `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
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
    const query = `DELETE FROM user WHERE id='${data.id}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('mPostDelete : ', rows);
        callback();
    });
};
