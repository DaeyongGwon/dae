// console.log(document.head);
// console.log(document.getElementsByTagName('div'));
// console.log(document.getElementById("hello"));
// console.log(document.getElementsByClassName('hi'));

//선택할 때 클래스는 #으로 호출하고 ID는 . 으로 호출한다.
// console.log(document.querySelector('#hello'));
// console.log(document.querySelector('.hi'));
// console.log(document.querySelector('#come'));
// console.log(document.querySelectorAll('.hi'));

// document.querySelector('#come').innerHTML = "컴온"
// document.querySelectorAll('.hi')[0].innerHTML = "Hello World"

document.getElementById('world').className = 'hi';
const world = document.getElementById('world');
console.log(world.getAttribute('class'));

const link = document.querySelector('#link');
console.log(link);
console.log(link.getAttribute('href'));
link.setAttribute('href','https://google.com');
// link.href = "https://www.daum.net"
//속성값을 가져오거나 설정할 경우
//가져오는 경우 getAttribute()
//설정하는 경우 setAttribute()
console.log(world)
// world.style.color = "red"
world.style.fontWeight = 'bold'
world.style.fontSize = 50
console.log(world.getAttribute('style'));

//없는 태그를 새로 생성시키는 코드
//하지만 그냥은 안나타나는데 append명령어를 사용해서 나타나게 할 수 있다.
const p = document.createElement('p').innerHTML = " 222";
world.append(p);

