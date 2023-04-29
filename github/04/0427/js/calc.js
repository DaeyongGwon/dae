function calc(a,b){
    if(str === '+'){
        return a+b;
    }
    else if(str === '-'){
        return a-b;
    }
    else if(str === '*'){
        return a*b;
    }
    else if(str === '/'){
        return a/b;
    }
    else{
        alert("잘못된 입력입니다.");
    }
}
const num1 = Number(prompt("첫 번째 숫자를 입력해주세요."));
const str = prompt("문자를 입력해주세요.");
const num2 = Number(prompt("두 번째 숫자를 입력해주세요."));
console.log(num1, num2, str);

const result = calc(num1,num2);
console.log("결과 : ", result);

