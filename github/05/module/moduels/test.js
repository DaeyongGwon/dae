const a = 10;
const b = 20;

// 1. 함수를 내보낼 때
function connect() {
    return a + b;
}
// module.exports = connect;

// 2(부분)
module.exports.add = () => {
    return a + b;
};

// 1번 축약
exports.add2 = () => {
    return a + b;
};

/*  변수만 보낼 때
module.exports = {
    a,
    b,
};
*/

// function testFunc() {
//     return a + b;
// }

// export default testFunc;
