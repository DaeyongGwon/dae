const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log( `${date.getFullYear()}년 ${date.getMonth() +1}월 ${date.getDate()}일 입니다.`);
document.write( `${date.getFullYear()}년 ${date.getMonth() +1}월 ${date.getDate()}일 입니다.`);

console.log(date.getDay());
console.log(date.getTime());
console.log(date.getHours());
console.log(date.toLocaleString());
