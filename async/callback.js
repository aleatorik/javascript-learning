"use strict";

// JavaScript is synchronous(동기적)
// Execute the code block by order after hoisting
// 호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행됨
// hoisting: var, function declaration 들이 자동적으로 제일 위로 올라가는 것

// synchronous
console.log("1");
console.log("2");
console.log("3");

// asynchronous: 비동기 --언제코드가 실행될지 예측할 수 없는 것
console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000); //우리가 지정한 시간이 지나면 우리가 전달한 함수(콜백함수)를 전달하는 것
// 즉, 이 경우에는 1초가 지난 다음에 위에 함수('2'를 출력)를 실행. -- callback: 나중에(1초가 지난다음) 다시 불러줘(실행)
//callback 함수: 우리가 전달해준 함수를 나중에 니가 불러줘
// setTimeout(() => console.log("2)"), 1000);

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "daniel" && password === "dev") ||
        (id === "js" && password === "javascript")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
}
