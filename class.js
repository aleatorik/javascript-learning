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
    console.log(`${this.name}: hello!`);
  }
}

const alex = new Person("alex", 23);
console.log(alex.name);
console.log(alex.age);
alex.speak();

//  2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
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

// 4. Static properties and methods -- 최근 업뎃, 쓰기엔 무리가 있음, 이런게 있다 정도!
// Object와 상관없이 공통적으로 클래스에서 사용할 수 있는 거라면 static과 static method를 사용 -- 메모리의 사용을 줄여줌!
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

// 5. Ingeritance
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
