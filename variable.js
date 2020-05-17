// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous (1.선언되지 않는 변수에 값을 할당함 2. 기존에 존재하는 prototpye을 변경함)
// added ECMAScript 5
// use strict 이점: 자바스크립트 엔진이 더 효율적이고 빠르게 자바스크립트를 분석할 수 있다. 실행하는 데 성능개선.
"use strict";

// 2. Variable, rw(read/write) --메모리에 읽고 쓰는 것이 가능!
// let (added in ES6)
let globalName = "global name";
{
  let localName = "daniel";
  console.log(localName);
  localName = "alex";
  console.log(localName);
  console.log(globalName);
}
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

//glbal variable은 어플리케이션이 실행되는 순간부터 끝날 때까지 항상 메모리에 탑재되어있기 떄문에
//촤소한으로 쓰는 것이 좋다. 가능하면 클래스나 함수, if, for문 등으로 필요한 부분에서만 정리해서 쓰는 것이 권장된다.

// 3. Contant(상수), r(read only)
// use const whenever possible.
// only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types(데이터 자체를 절대 변경 못함): primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS

// favor immutable(값을 변경할 수 없음) data type always for a few reasons:
// - security(해커의 코드변경 시도를 차단)
// - thread safety(다양한 쓰레드들이 동시에 변수에 접근해서 값을 변경할 수 있음->위험, 그러므로 상수로 고정)
// - reduce human mistakes

// 4. Variable types(어떤 프로그래밍 언어든 primitive 그리고 object 타입으로 나뉘어짐)
// primitive, single item: number, string, boolean, null, undefined, symbol --value가 메모리에 저장됨
// object, box container(single item들을 한 단위로 묶어서 관리할 수 있게 해줌) --value를 가리키는 reference가 메모리에 저장됨(value 바뀔 수 있음)
// function, first-class function(함수도 다른 데이터타입처럼 변수에 할당이 가능하고, 그렇기 때문에 함수의 파라미터 인자로도 전달되고, 함수에서 리턴타입으로도 함수를 리턴할 수 있는 것이 가능하다는 뜻)
ㄷ;
// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string (template literals or string)
const alex = "alex";
console.log(`value: ${alex}, type: ${typeof alex}`);
const helloAlex = `hallo ${alex}!`;
console.log(`value: ${helloAlex}, type: ${typeof helloAlex}`);
console.log("value: " + helloAlex + " type: " + typeof helloAlex); //template literals보다 사용하기 불편

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects -- map 등 자료구조에서 고유한 식별자가 필요하거나 아니면 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 사용
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
//같은 Symbol 만들기(string이 똑같다면 동일한 symbol을 만들고 싶을 때는 아래와 같이 Symbol.for(''))
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true
//console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // 에러발생
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // .description 통해 string으로 변환해서 사용해야함!

// object, real-life object, data structure
const daniel = { name: "daniel", age: 20 };
daniel.age = 21;

// 5. Dynamic typing: dynamically typed language --자바스크립트는 런타임으로 타입이 정해지기 때문에, 에러가 런타임으로 발생하는 경우가 잦다.(타입스크립트의 탄생배경!!!)
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 런타임 중 에러 발생!!
