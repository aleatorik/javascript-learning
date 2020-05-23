"use strict";

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position -- 인덱스를 활용해서 어떻게 데이터를 검색,삽입,삭제
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); //배열의 마지막 아이템 찾을 때는 -1 (index가 0부터시작하므로)

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach -- forEach는 Callback 함수를 받아온다(배열 안에 들어있는 value들마다 내가 전달한 함수들을 출력한다)
fruits.forEach((fruit) => console.log(fruit));
