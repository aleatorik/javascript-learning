// JSON
/*
- simplest data interchange format
- lightweight text-based structure
- easy to read
- key-value pairs
- used for serialization and transmission of data between the network the network connection
- independent programming language and platform *** (i.e. other programming languages are compatible with it)
*/

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'alex',
  color: 'white',
  size: null,
  birthDate: new Date(),
  //  symbol: Symbol('id'), // 자바스크립트에만 있는 데이터는 제외된다.
  jump: () => {
    console.log(`${name} can jump!`);
  }, //이 함수는 object에 있는 데이터가 아니기 때문에 제외된다(출력 x)
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']); //토끼 object에서 이름만 JSON으로 하고 싶을 경우 배열 안에 property이름만 넣는다.
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'daniel' : value; //콜백함수를 이용해서 33줄 보다 더 세밀하게 처리 가능
});
console.log(json);
// 2. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value; //key가 birthDate는 새로운 Date 객체를 만들거고, key가 birthDate가 아니면 그냥 원래 있던 value를 쓰자
});
console.log(obj);
rabbit.jump(); // 함수는 json으로 변환되지 않음. 오로지 데이터만 변환됨 그러므로 해당 함수는 obj로 변환 불가능. 해당 json에 포함되지 않았기 때문에
//obj.jump();

console.log(obj.birthDate.getDate()); //birthDate는 string이기 때문에 에러발생
