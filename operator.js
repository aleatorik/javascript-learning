// 1. String concatenation -- '+' 기호
console.log("my" + "cat");
console.log("1" + 2); // 숫자가 문자열로 변환되어 더해짐
console.log(`string literals: 1 + 2 = ${1 + 2}`); // 숫자 값을 연산 후 결과를 string으로 반환
console.log("alex's adventure");

// 2. Nummeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder --나머지 값
console.log(1 ** 1); // exponentiation --2의 3승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //바로 업데이트되서 할당 됨
// counter = counter + 1; -- counter === 3
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
//================================================================
const postIncrement = counter++; //할당을 해놓고 그 뒤에 업데이트
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
//================================================================
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
//================================================================
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value -- 처음으로 true가 나오면 거기서 멈춘다!
console.log(`or: ${value1 || value2 || check()}`);
//line 52 -- computation이 heavey한 expression이('check()') 맨 마지막에 와야 효율적인 코드작성법!!

// && (and), finds the first false value
console.log(`and: ${value1 && value2 && check()}`);
//line 56 -- computation이 heavey한 expression이('check()') 맨 마지막에 와야 효율적인 코드작성법!!

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

//often used to compress long if-statement
//nullableObject && nullableObject.something
//-- null 인지 체크할 때 사용됨. 위의 경우 nullableObject가 null이 아닐 때만 nullableObject.something이라는 value를 받아오게 된다.

/*if (nullableObject != null) {
  nullableObject.something;
}
*/

// ! (not) -- 값을 반대로 바꿈
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose eqality, with type conversion -- 타입을 변경해서 검사(value값 일치하면 true 리턴)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion -- 타입 검사
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const alex1 = { name: "alex" };
const alex2 = { name: "alex" };
const alex3 = alex1;
console.log(alex1 == alex2); //alex1과 alex2에는 각기 다른 reference가 저장되어 있기 때문에 false
console.log(alex1 === alex2);
console.log(alex1 === alex3);

//(quiz) equality
console.log(0 == false); // true -- '0'과 'null', 'empty string', 'undefined'은 모두 false로 간주!
console.log(0 === false); // 0은 boolean타입 아니기 때문에 'false'
console.log("" == false); // true
console.log("" == false); // empty 문자열은 boolean타입 아니기 때문에 'false'
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = "alex";
if (name === "alex") {
  console.log("Welcome, alex!");
} else if (name === "programmer") {
  console.log("You are amazing engineer");
} else {
  console.log("unknown");
}

// 9. Ternary oerator: ?
// condition ? value1 : value2;
console.log(name === "alex" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks --if문에서 else if else if 가 너무 많이 반복되면 switch문으로 대체!
// use for enum-like value check -- enum 비슷한 아이를 검사할 때 사용
// use for multiple type checks in TS --타입스크립트에서 정해져 있는 타입을 검사할 때 사용
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// While loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do-while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops -- while, for문은 서로 nesting해서 작성 가능
// 아래의 경우 빅오가 n의 2승 => 이렇게 작성하는 것은 cpu에 좋지 않으므로 가능한 피할 것!
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

//break, continue -- continue는 지금 것만 스킵하고 바로 다음 스텝으로 넘어가는 것.
// Q1. iterate from 0 to 10 and print only even numbers (use continue)

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (i = 0; i <= 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
