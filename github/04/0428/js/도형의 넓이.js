


const a = Number(prompt("가로 : "));
const b = Number(prompt("세로 : "));
const c = Number(prompt("반지름 : "));

function rectangle(a,b){
    return a*b;
}

function triangle(a,b){
    return (a*b)/2;
}
function circle(c){
    return c*c*3.14;
}
console.log("정사각형의 넓이 : ", rectangle(a,b));
console.log("삼각형의 넓이 : ", triangle(a,b));
console.log("원의 넓이 : ", circle(c));
