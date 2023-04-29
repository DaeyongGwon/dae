let arr2 = [{ name : '나비', age : 1}, {name : '고양이', age : 3}, {name : '초코', age : 5}];

// for( var i = 0; i < arr2.length; i++){
//   console.log(arr2[i]);
// }

const dog = {
    name : '토니',
    age : 2,
    gender: 'boy'
}

//for in 문법
for(var i in dog) {
    console.log(dog[i]);
}
const arr1 = [1,2,3, "안녕", "반가워",{name : '고양이', age : 3}, {name : '초코', age : 5}]
for (var i of arr1) {
    console.log(i)
}