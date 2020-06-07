"use strict";
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`my name is ${this.name}: hello!`);
  }
}

const alex = new Person("alex", 24);
console.log(alex.name);
console.log(alex.age);
alex.speak();

//  2. Getter and Setters -- 사용이유: 특정 값을 설정하기 위해. (예를 들어, 커피머신의 커피생산단위에 음수는 없음, 즉 사용자가 '-1'이라는 잘못된 값을 입력했을 때에도 올바른 값으로 바뀌어서 입력되게끔 바꾸는 역할. -> Line 52)
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; //getter, setter가 정의되어 있는 경우, 'this.age'는 메모리에 올라가 있는 데이터를 읽어오는 대신 get함수를 호출!
    //' = age; '는 age가 메모리에 값을 바로 할당하는 것이 아니라 line 43의 setter함수를 호출한다
  }

  get age() {
    // 특정 값을 리턴
    return this._age;
  }
  /*
  set age(value) {
    this.age = value; //getter 와 setter안에 쓰이는 변수 이름을 변경하므로써 class.js:39 Uncaught RangeError: Maximum call stack size exceeded 에러를 방지한다. 에러 발생이유: Line 43의 value가 'set age(value) {}' <- set 함수를 무한호출한다. 그러므로 이름 변경필요!
  }
*/
  set age(value) {
    // 특정 값을 설정 -- 설정할 값을 받아와야함! 여기서는 'value'
    //    if (value < 0) {
    //     throw Error("age can not be negative");
    //    }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private) -- 이런 것이 업뎃 되었다 정도로 학습(너무 최근이라 잘 사용안함)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
// 생성자를 쓰지 않고 Field를 정의
class Experiment {
  publicField = 2; // 그냥 정의하면 'public' --외부에서 접근가능
  #privateField = 0; // 해쉬기호 '#'를 붙이면 'private' --클래스 내부에서만 값이 보여지고, 변경, 접근가능
}
//너무 최근 업뎃이라 Safari에도 적용안됨 --정말 쓸려면 babel 사용
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods -- 메모리 사용을 줄여줌! (최근 업뎃, 쓰기엔 무리가 있음, 이런게 있다 정도!)
// Object와 상관없이 공통적으로 클래스에서 사용할 수 있는 거라면 static과 static method를 사용
class Article {
  static publischer = "Dickmann";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPubliser() {
    console.log(Article.publischer);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publischer);
Article.printPubliser();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} //Shape에서 정의한 field, method가 자동으로 포함됨
class Triangle extends Shape {
  // 필요한 함수만 재정의 --오버라이딩 + 다형성위력
  draw() {
    super.draw(); //부모의 draw() 함수를 호출
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    //object의 함수 toString()을 오버라이딩
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
//왼쪽에 있는 object가 오른쪽의 클래스의 instance인지 아닌지 확인하는 기능(boolean타입)
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());
