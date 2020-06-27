// async & await => awiat 뒤에 수치만큼 시간(아래 예제 1초)이 지나고 promise를 만들어주는 것이 async!
// clear style of using promise
// 상황에 따라 promise 또는 async & await을 선택해서 사용해야함

// 1. async
async function fetchUser() {
  // do network request in 10 secs.....
  return 'daniel';
}
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  //   throw 'error';
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

//아래는 promise chaining -> 위의 await async가 더 편리함
function getBanana() {
  return delay(1000).then(() => '🍌');
}

//아래는 promise chaining의 콜백지옥 예시 => 해결책: async & await
/*function pickFruits() { 
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log);
*/

//아래 코드가 더 간단하고 가독성이 좋은 이유는 동기적으로 작성하듯 코드를 쓰기 때문(원래 자연스럽게 코드를 작성하는 것처럼)
/*async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
  } catch() {

  }
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
*/
// 위의 예시의 문제점의 경우 banana가 apple받아오는 것을 기다릴 필요가 없으므로(2초 소요) 병렬적으로 만드는게 효율적
/*async function pickFruits() {
  const applePromise = getApple(); //promise가 만들어지자마자 getApple() 함수가 바로 실행됨
  const bananaPromise = getBanana(); // promise가 만들어지자마자 getBanana 함수가 바로 실행됨, 즉 두 개가 병렬적으로 동시에 실행
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
*/
//pickFruits().then(console.log);

//위의 예시는 병렬적으로 기능적으로는 문제가 없으나, 코드가 길다.
// Promise.all([]) : promise 배열을 전달하게 되면 모든 promise들이 병렬적으로 다 받을 때까지 모아주는 api
// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

// 어떤 것이든 상관없고 먼저 따지는 첫 번째 과일만 받아오고 싶을 때 pickOnlyOne() 사용
// 따는데 사과 2초, 바나나 1초 걸린다고 가정
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]); // 배열에 전달된 Promise중에서 가장 먼저 값을 리턴하는 것만 전달이 되어진다
}

pickOnlyOne().then(console.log);
