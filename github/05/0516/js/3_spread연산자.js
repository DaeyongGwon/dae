//spread 연산자

const i = [10, 20 ,30];
const j = [40, 50];
const x = [60, 70, 80, 90];

const spread = [...i,...j];
console.log(spread);


const z = [..."hello"];

console.log(z);

//spread 연산자는 특히 함수를 호출할 때 많이 사용한다.
function spreadFunc (num1,num2,num3) {
    console.log("a+b+c : ", num1+num2+num3);
}

spreadFunc(...x)
