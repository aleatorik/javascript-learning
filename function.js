//  Function
//  -fundamental building block in the program
//  -subprogram can be used multiple times
//  -performs a task or calculates a value

//  1. Function declaration
//  function name(param1, param2) { body... return;} -- body안에 비즈니스 로직
//  one function === one thing
//  naming: doSomething, command, verb
//  e.g. createCardAndPoint -> createCard, createPoint --하나의 함수는 하나의 기능만 수행하도록!
//  function is object in JS --그러므로 함수는 변수에다가 할당할 수 있고, 파라미터로 전달이 되고, 함수를 리턴할 수도 있게 됨!

function printHello() {
  console.log("hello");
}
printHello();
//계속 'hello'만 출력하므로 위의 함수는 쓸모가 없음

function log(message) {
  //자바스크립트에는 타입이 정해지지 않았기 때문에, 파라미터로 string인지 숫자인지 명확하지 않음--typescript 필요한 이유!!
  // 파라미터로 메세지를 전달하면, 전달된 메세지를 화면에 출력하는게 효율적
  console.log(message);
}

log("hello");
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = "coder";
}

const alex = { name: "alex" };
changeName(alex);
console.log(alex);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  // 파라미터 옆에다 원하는 default 값을 넣으면 사용자가 파라미터를 전달하지 않으면 이 값이 대체되어서 사용되어짐
  console.log(`${message} by ${from}`);
}
showMessage("hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // ... 쓰면 이것이 배열 형태로 전달됨
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    // 위에 보다 간편식으로 --args에 있는 모든 값들이 차례대로 arg에 지정 되면서 아래에서 출력됨
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg)); // 배열에 forEach라는 함수형 언어를 이용해서 출력도 가능
}
printAll("ich", "liebe", "dich");

// 5. Local scope
// "마치 유리창 틴트: 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다." -- closure, lexical environment, scope와 관련한 설명!
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);

  function printAnother() {
    //하나의 함수 안에서 또 다른 함수를 선언 가능
    console.log(message);
    let childMessage = "hello";
  }
  //  console.log(childMessage); // 부모 함수에서 자식 함수 안의 변수를 볼 수 없다! (에러발생)
  //이렇게 중첩된 함수에서 자식 함수가 부모함수에서 정의된 변수들에 접근 가능한 것이 바로 '클로저'이다.

  // 위의 리턴타입이 없는 함수들(printMessage)은 'return undefined;' 이 생략된 것!
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, eraly exit // <- 같은 코드 지적을 받을 수 있음. ( 현업에서 쓰는 TIP! )
// bad
function upgradeUser(user) {
  //유저의 포인트가 10 이상일 때 만 무언가 업그레이드 진행하는 로직
  if (user.point > 10) {
    //long upgrade logic... //이렇게 block 안에서 로직을 많이 작성하면 가독성이 떨어짐!
    // 이 경우 if와 else를 번갈아가며 사용하는 것 보다 아래와 같이...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    //이처럼 조건이 맞지 않을 때는 빨리 return을 해서 함수를 종료하고 조건이 맞을 때만 그다음에 와서 필요한 로직을 실행하는 것이 더 좋음. (추가로, 코드작성 할 때, 위와 같이 <1> 조건이 맞지 않는 경우, <2>값이 undefined인 경우, <3> 값이 -1인 경우 빨리 리턴하고 필요한 로직을 뒤에 작성하는 것이 좋은 코드작성법!)
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions -- 파라미터로 전달이 됨
// can be returned by another function

// 위의 것 들이 가능한게 function expression이다

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
//function declaration VS function expression 두 개의 가장 큰 차이점은 function expression은 할당 된 다음부터 호출이 가능한 반면에, functino declaration는 hoisted가 되기 때문에 함수가 선언(정의)되기 이전에 호출해도 가능. 이것은 자바스크립트의 V8엔진이 선언된 것을 제일 위로 올려주기 때문!
const print = function () {
  //<- ()처럼 함수의 이름이 없는 것을 anonymous function이라고 부른다. (<->named function)
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  // printYes, printNo가 Callback function이다.
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  //anonymous function
  console.log("yes!");
};

const printNo = function print() {
  //named function --쓰는 이유: 1) better debugging in debugger's stack traces(디버깅할 때 stack traces에 함수의 이름이 나오게 하기 위해서 씀) 2) recursions(재귀함수;함수 안에서 자신 스스로 또 다른 함수를 호출, 부르는 것) 사용하기 위함 -- 피보나치 수를 계산할 때, 반복되는 평균값을 계산할 때 등 사용 쓰임새가 다양함.
  console.log("no!");
  // print(); //Maximum call stack size exceeded 에러 발생
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function -- 함수를 간결하게 만들어주는 도구 (함수형 프로그래밍, 즉 array, list 다룰 때 이 기능이 더욱 빛을 발휘!)
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplerPrint = () => console.log("simplePrint!"); // -- arrow function 문법
const add = (a, b) => a + b; // <- 이렇게 한 줄인 경우는 {} block없이 작성이 가능하지만

const simpleMultiply = (a, b) => {
  //<- 함수 안에서 좀 더 다양한 일을 해야해서 block이 필요하다면 이런식으로 작성도 가능 --대신 return 써야함!
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression --함수를 선언함과 동시에 호출
(function helo() {
  //함수의 선언을 () 괄호로 묶은다음에 함수를 호출하듯이 (); <- 이렇게 작성하면 함수가 바로 호출됨.
  console.log("IIFE");
})();

// Quiz♥️
// function calculate (command, a, b)
// command: add, substract, divide, multiply, remainder
