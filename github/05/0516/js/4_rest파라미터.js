//rest 파라미터

//()앞에 필요한 거만 빼먹고 rest를 이용해서 나머지만 출력한다.
const i = [10, 20, 30];

function restFunction(a, b,...rest) {
    console.log("a,b : ", a,b);
    console.log("rest : ", rest);
}
restFunction(...i)