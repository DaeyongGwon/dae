// var cat = {
//   name : '나비', age : 1, mew: function(){
//     return '냐옹';
//   }
// }
// cat['gender'] = "남";

// console.log(cat);
// console.log(cat.mew())


const arr1 = [1,2,3, "안녕", "반가워", { name : '나비', age : 1}, {name : '고양이', age : 3}];
console.log(arr1);
// arr1.push("배고파");
// arr1.unshift("배고파2");
// arr1.shift();



console.log(arr1[5].name)

console.log(arr1);
console.log(arr1.length);

let arr2 = [{ name : '나비', age : 1}, {name : '고양이', age : 3}, {name : '초코', age : 5}];
for( var i = 0; i < arr2.length; i++){
  console.log(arr2[i].name);
}
