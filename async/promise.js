'use strict';
//비동기를 간편하게 처리할수있도록 도와주는 object
//정해진 장시간의 기능을 수행하고나서 정상적으로 기능이 수행되어졌다면
//성공 메세지와 함께 처리된 결과값을 전달해줌
//만약 예상치 못한 문제가 발생했다면 에러를 전달

//어떻게 콜백을 쓰지 않고 promise object를 통해서 비동기코드를 깔끔하게 처리할 수 있는가 포인트
// Promise is a Javascrtip object for asynchronous operation
// 중요 포인트 두 가지) 1. state(상태) 2. producer consumer의 차이점
// State: pending -> fulfilled or rejected

//Promise 만들기
// 1. producer
// When new Promise is created, the executor runs automatically
// 예: 유저가 버튼을 클릭할 때만 네트워크 요청을 해야하는 경우라면, 사용자가 요구하지 않았는데 불필요한 네트워크통신이 발생하므로 유의.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('daniel'); //성공 시 메세지
    //reject(new Error('no network')); //실패 시 메세지
  }, 2000);
});
// 위의 promise설명-> 어떤 일을 2초정도 하다가 결국에는 일 잘 마무리해서 resolve라는 콜백함수를 호출하면서 daniel이라는 값을 전달해주는 promise.

//Promise 이용하기
// 2. consumer : then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
//값이 정상적으로 잘 수행된다면(then) 이제 값(프로미스가 정상적으로 잘 수행되어서 마지막으로 resolve 콜백함수에서 전달된 daniel value)을 받아와서 원하는 기능을 수행하는 이 콜백함수를 전달해주면 된다

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
//then은 값을 바로 전달 할 수도 있고, 또 다른 비동기인 promise를 전달해도 된다.
//위의 프로미스 출력 총 소요시간 2초

// 4. Error Handling (promise 체이닝을 했을 때, 에러를 어떻게 핸들링하는지)
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

/*getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal)); */

//이렇게 한가지만 받아서 그대로 전달하는 경우에는 아래 처럼 생략 가능 (시작줄에 // 붙여서 prettier가 한줄처리 못하도록 해야 코드 보기가 좋음)
getHen() //
  .then(getEgg) // 여기서 발생한 에러를 처리하고 싶을 때, 79번줄 처럼 바로 그 다음에 catch를 작성하면서 바로 문제해결 가능
  .catch((error) => {
    return '🥖';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
