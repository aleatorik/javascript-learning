// 함수 선언
// 함수 호출

function doSomething(add) {
  const result = add(1, 2);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

doSomething(add);
