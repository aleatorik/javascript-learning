/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

{
  const ellie1 = {
    name: "Ellie",
    age: "18",
  };

  const name = "Ellie";
  const age = "18";

  // 💩
  const ellie2 = {
    name: name,
    age: age,
  };

  // ✨
  const ellie3 = {
    name,
    age,
  };

  console.log(ellie1, ellie2, ellie3);
  console.clear();
}

/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 */
{
  // object
  const student = {
    name: "Anna",
    level: 1,
  };

  // 💩
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // ✨
  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ["🐶", "😽"];

  // 💩
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // ✨
  {
    const [first, second] = animals;
    console.log(first, second);
  }
  console.clear();
}

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 */
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  // array라는 기존의 object를 변경하게되면 그 array의 메모리 주소값을 참조한 변수들(spread 연산자를 이용한 복사본)도 똑같이 변경되므로 이 점을 주의할 것

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: "key3" }];
  obj1.key = "newKey";
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ["🍑", "🍓"];
  const fruits2 = ["🍌", "🥝"];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog: "🐕" };
  const dog2 = { dog: "🐶" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog); // {dog: "🐶"}
  // key값이 동일한 객체들을 병합했을 때는 마지막에 오는 객체가 이전 객체를 덮어씌운다
  console.clear();
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
  // 💩
  {
    function printMessage(message) {
      if (message == null) {
        message = "default message";
      }
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }

  // ✨
  {
    function printMessage(message = "default message") {
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }
  console.clear();
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
  const isCat = true;
  // 💩
  {
    let component;
    if (isCat) {
      component = "😸";
    } else {
      component = "🐶";
    }
    console.log(component);
  }

  // ✨
  {
    const component = isCat ? "😸" : "🐶";
    console.log(component);
    console.log(isCat ? "😸" : "🐶");
  }
  console.clear();
}

/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
  const weather = "🌤";
  const temparature = "16°C";

  // 💩
  console.log(
    "Today weather is " + weather + " and temparature is " + temparature + "."
  );

  // ✨

  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}
