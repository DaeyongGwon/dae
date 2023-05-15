// 함수 선언식
async function func1() {
    const res = await fetch(url); // 요청을 기다림
    const data = await res.json(); // 응답을 JSON으로 파싱
}
func1();

// 함수 표현식
const func2 = async () => {
    const res = await fetch(url); // 요청을 기다림
    const data = await res.json(); // 응답을 JSON으로 파싱
}
func2();


async function func1() {
    return 1;
}
const data= func1();
console.log(data);

async function resolveP() {
    return Promise.resolve(2);
}

async function rejectP() {
    return Promise.reject(2);
}