console.log(document.head);
console.log(document.getElementsByTagName('div'));
console.log(document.getElementById("hello"));
console.log(document.getElementsByClassName('hi'));

//선택할 때 클래스는 #으로 호출하고 ID는 . 으로 호출한다.
console.log(document.querySelector('#hello'));
console.log(document.querySelector('.hi'));
console.log(document.querySelector('#come'));
console.log(document.querySelectorAll('.hi'));