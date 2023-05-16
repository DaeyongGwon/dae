//배열 구조 분해
//특징 : 구조 분해 당시 순서가 중요!

const lists = ["apple", "grape"];
[item1, item2, item3 = 'peach'] = lists;

console.log("lists[0] : ", lists[0]);

console.log( "item1 : ", item1);
console.log( "item2 : ", item2);
console.log( "item3 : ", item3);


function test() {
    return ['one', 'two', 'three', 'four'];
}

const [one, two, three, four]  = test();
console.log([one, two, three, four]);

//swap
let a = 10;
let b = 20;
console.log('[a,b]', [a, b]);
[a, b] = [b, a];
console.log('[a,b]', [a, b]);