'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // 더 흔하게 쓰이는 방법

// 2. Index position -- 인덱스를 활용해서 어떻게 데이터를 검색,삽입,삭제 아는지가 중요!
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); //배열의 마지막 아이템 찾을 때는 -1 (index가 0부터시작하므로)

console.clear();
//💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠
//💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠
//💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠
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

console.clear();

// c. forEach -- forEach는 Callback 함수를 받아온다(배열 안에 들어있는 value들마다 내가 전달한 함수를 출력한다)

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});
//--> anonymous 함수는 arrow function으로 변환가능! (바로 아래 확인)

fruits.forEach((fruit, index, array) => console.log(fruit, index, array));
// forEach는 배열 안에 들어있는 value들마다 내가 전달한 함수(콜백함수)를 출력한다!

console.clear();
//💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠
//💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠
//💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠
// 4. Addition, deletion, copy
// push: add an item to the end (뒤에서 value 추가)
fruits.push('🍓', '🍇');
console.log(fruits);
// pop: remove an item from the end (뒤에서 value 삭제)
fruits.pop();
console.log(fruits);
const poped = fruits.pop();
console.log(poped);

/*

// unshift: add an item to the beginning (앞에서 value 추가)
fruits.unshift('🍒', '🥝');
console.log(fruits);
// shift: remove an item from the beginning (앞에서 value 삭제)
fruits.shift();
fruits.shift();
console.log(fruits);

// important note!! shift, unshift are slow than pop, push. --shift, unshift는 기존에 들어있던 데이터가 다른 데이터 공간으로 움직이기 때문에 특히 배열의 길이가 긴 경우 처리속도가 pop, push보다 느리다.

// splice: remove an item by index position -- 아이템을 지정된 위치에서 삭제 + 원하는 부분에 데이터를 넣을 수도 있음
fruits.push('🍍', '🍐', '🍏'); // Emoji는 전부 문자열
console.log(fruits);
fruits.splice(1); // 두 번째 인자로 deleteCount 지정하지 않으면, 첫 번째 인자의 인덱스 번호부터 해당 배열의 끝까지 데이터를 삭제
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
//원하는 위치에 데이터 삽입 가능
fruits.splice(1, 1, '🌶', '🥕'); // 삭제한 자리에 새로운 값 추가
console.log(fruits);
fruits.splice(1, 0, '🌶', '🥕'); // 지우지 않고 새로운 값만 추가 가능!
console.log(fruits);

// combine two arrays
const fruits2 = ['🥑', '🍅'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching -- 검색 API

console.clear();

// indexOf : find the index -- 배열 안에 어떤 값이 몇 번째 index에 있는지 알고 싶을 때 사용
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍐'));
console.log(fruits.indexOf('🍕')); // 배열 안에 해당하는 값이 없는 경우, -1이 리턴

// includes -- 배열에 특정값이 있는지 없는지 True/False로 리턴

console.log(fruits.includes('🥕'));
console.log(fruits.includes('🍟'));

console.clear();

// lastIndexOf -- 제일 마지막에 들어있는 값의 index를 리턴

fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); //'indexOf'는 제일 첫번째로 해당하는 값을 만나면 그 값이 들어있는 index를 리턴
console.log(fruits.lastIndexOf('🍎'));

*/
