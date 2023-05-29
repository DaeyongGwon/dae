const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'daeyong',
    password: '4230',
    database: 'kdy7',
});

//POST : localhost:8000/user/signup
exports.Mpost_signup = (data, call) => {
    const query = `INSERT INTO user (userid, name, pw) VALUES 
    ( '${data.userid}', '${data.name}', '${data.pw}' )`;

    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('Mpost_signup', rows);
        call();
    });
};
//POST : localhost:8000/user/signin
exports.Mpost_signin = (data, call) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log('err:', err);
        }
        console.log('Mpost_signin', rows);
        call(rows);
    });
};
//회원정보
exports.Mpost_profile = (data, call) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log('err:', err);
        }
        console.log('Mpost_profile', rows);
        call(rows);
    });
};
//수정
exports.Medit_profle = (data, call) => {
    const query = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('Medit_profle', rows);
        call();
    });
};
//삭제
exports.Mdel_profile = (data, call) => {
    const query = `DELETE FROM user WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('Mdel_profile', rows);
        call();
    });
};
