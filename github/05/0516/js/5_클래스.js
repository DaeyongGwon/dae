class Cat {
    constructor(name , age) {
        //속성
        this.name = name;
        this.age = age;
    }
    // 클래스 안에서 메소드를 작성할 때는 함수 선언을 안해도 된다.
    // 메소드
    mew() {
        console.log(`${this.name} : 야옹`);
    }
    eat() {
        console.log('먹이를 먹습니다.');
    }
}

let cat1 = new Cat('나비', 1);
let cat2 = new Cat('비나', 2);

cat1.mew();
cat1.eat();
document.getElementById('cat1').innerHTML = `${cat1.name} : 야옹`;

cat2.mew();
cat2.eat();
document.getElementById('cat2').innerHTML = `${cat2.name} : 멍멍`;

//상속
//부모 = 상위 클래스 = 슈퍼 클래스
//자식 = 하위 클래스 = 서브 클래스

//부모 클래스
class Product {
    name = '';
    price = 0;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    //getter는 가져올 때 클래스 밖에서 쓸때
    getPrice() {
        return this.price + '만원';
    }
    //setter는 직접적으로 값을 변환시키지 않는다. 외부에서 price값을 가져와서 사용한다. 캡슐화.
    setPrice(price) {
        this.price = price;
    }
}

//자식 클래스 extends를 사용해서 클래스를 상속 받는다.
class TV extends Product {
    constructor(name, price, weight) {
        super(name, price);
        this.weight = weight;
    }
    getWeight() {
        return this.weight
    }
}
        

const tv1 = new TV('samsung', 200, '27inch');
//setter
tv1.setPrice(150);
document.querySelector('#tv1').innerText = 
    `${tv1.name} : ${tv1.price}
    ${tv1.name} : ${tv1.weight}`;

console.log('tv1 : ', tv1);
tv1.setPrice(100);
console.log(tv1.getPrice());
console.log(tv1.getWeight());


//부모 인스턴스는 자식을 변환해도 자식꺼를 못가져옴.
const prod1 = new Product('LG TV', 300);
console.log(prod1);
console.log(prod1.getWeight);
