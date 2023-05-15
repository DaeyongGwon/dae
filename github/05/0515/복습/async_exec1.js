async function f(){
    return 1;
}

//async가 붙은 함수는 반드시 프라미스를 반환하고, 
//프라미스가 아닌 것은 프라미스로 감싸 반환합니다.
async function f() {
    return Promise.resolve('Daeyong');
}

f().then(console.log);

async function g() {
    let promise = new Promise((resolve, reject) => {
        setTimeout( () => resolve("완료!"), 1000)
    });

    let result = await promise;
    console.log(result);
}

g();