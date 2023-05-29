const mysql = require("mysql");
//DB연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "kdtuser",
  password: "1234",
  database: "kdt7",
});

//방명록 전체 보이기
exports.MgetVisitors = (callback) => {
  conn.query(`SELECT * FROM visitor`, function (err, rows) {
    if (err) {
      console.log(err);
    }

    console.log("MgetVisitors: ", rows);
    callback(rows);
  });
};

//방명록 하나 조회
exports.MgetVisitor1 = (id, callback) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("MgetVisitor1: ", rows);
    callback(rows);
  });
};

//방명록 등록
exports.MpostVisitor = (data, callback) => {
  conn.query(
    `INSERT INTO visitor( name, comment) VALUES ('${data.name}', '${data.comment}');`,
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      console.log("MpostVisitor: ", rows);
      callback(rows.insertId);
    }
  );
};

//PATCH
exports.MpatchVisitor = (data, callback) => {
  conn.query(
    `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id} `,
    function (err, rows) {
      if (err) {
        console.log(err);
      }

      console.log("patchVisitor: ", rows);
      callback(rows);
    }
  );
};

//삭제
exports.MdeleteVisitor = (id, callback) => {
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      console.log(err);
    }

    callback(true);
  });
};
