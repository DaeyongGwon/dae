const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    // 아래 주석은 fs.readFile을 사용해서 필요가 없는 코드
    // res.writeHead(200);
    // res.write( '<hi>Hello!</hi><div>hi</div>')
    // res.end("<p>End</p>");
    fs.readFile('./6_server.html', (err, data) => {
        res.writeHead(200);
        res.end(data);
    })
});

server.on('request', (code) =>  {
    console.log('request 이벤트');
})
server.on('connection', (code) => {
    console.log('connection 이벤트');
})

server.listen(8080, function () {
    console.log('8080번 포트로 서버 실행.');
})

