// map
// for each

const list = [10,20,30,40,50];
console.log(...list);

for(let i = 0; i < list.length; i++){
    console.log(list[i]);
}

// map
list.map((value) => {
    console.log(`value : ${value}`)
})

// forEach
list.forEach((value, index) => {
    console.log(value + index);
});

// filter
const words = ['dog', 'cat', 'rabbit', 'bird', 'apple', 'wolf'];
let result = words.filter( (word) => word.length > 3);
console.log(result);

// 화살표 함수 안에 {} 중괄호가 포함되면 값을 무조건 return 해줘야 오류가 나지 않는다.
// 그에 비해 그냥 ()를 사용해 짧게 사용하면 자동 return.
let result2 = words.filter( (word) => {
    return word.includes("a")
});
console.log(result2);

// reduce
let result3 = words.reduce((acc, word) => {
    return acc + word.length;
}, 0);
console.log(result3);