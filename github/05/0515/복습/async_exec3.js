
// 프로미스 객체 반환 함수
function delay(ms) {
    return new Promise(resolve => {
        setTimeout( () => {
            console.log(`${ms} 밀리초가 지났습니다.`);
            resolve();
        }, ms);
    });
}

// 기존 Promise.then() 형식
function main() {
    delay(1000).then( () => {
        return delay(2000);
    })
    .then( () => {
        return Promise.resolve('finished')
    })
    .then(result => {
        console.log(result);
    });
}
main();

//async await 방식
async function main2() {
    await delay(2100);
    await delay(2500);
    const result = await Promise.resolve('finished');
    console.log(result);
}
main2();