//객채 구조 분해
//특징 : 키값이 중요!!
const obj = {
    key1 : 'one',
    key2 : 'two'
}
console.log(obj.key1);
console.log(obj['key1']);
const {key2:newKey2, key1, key3 = 'three'} = obj;

console.log(key1, newKey2);
console.log(newKey2, key1,key3);


function test2() {
    return {result: true, statuscode : 200, a: 10, b: 20}
}

const {result, statuscode, a, b} = test2();
console.log(result, a);