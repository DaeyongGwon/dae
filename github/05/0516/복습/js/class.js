//클래스 선언문
class Person {
    //생성자
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi My name is ${this.name}`);
    }

    static sayHello() {
        console.log('Hello!');
    }
}


// 인스턴스 생성
const me = new Person('Gwon')

//인스턴스의 프로퍼티 참조
console.log(me.name);   //Gwon
me.sayHi();       //Hi My name is Gwon
//정적 메서드 호출
Person.sayHello();