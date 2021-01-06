// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();
  const result2 = fruits.join('|');
  console.log(fruits.toString());
  console.log(result);
  console.log(result2);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  //구분자를 지정 안하면, 한 개의 index에 데이터가 모두 담김.. 구분자 지정 필수!
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  //리턴 값의 순서가 바뀌었을 뿐만 아니라, array 배열자체의 순서도 바뀌게 됨
  console.log(array);
}

console.clear();
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //const result = array.splice(0, 2);
  //console.log(result);
  //console.log(array);

  //array를 변형시키지 않고 특정 엘리먼트로 이루어진 새로운 array를 만드는 api는 아래
  //두 번째 'end' param는 배제가 됨 --ex) (0, 2)인 경우 index[0], index[1]까지만 전달됨
  const result2 = array.slice(2, 5);
  console.log(result2);
  console.log(array);
  //정리: splice()는 배열자체를 수정하는 것, slice() 배열에서 원하는 부분만 return해서 받아옴
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score * 2);
  //배열 안에 있는 요소들을 우리가 원하는 함수를 이용해서 다른 방식의 데이터를 만들고 싶을 때 사용
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  //some: 배열 중에 어떤 것이라도 하나 만족하는 것이 있는지 없는지 검사할 때 사용
  const result = students.some((student) => student.score < 50);
  console.log(result);
  //every: 모든 배열의 조건이 만족되어야 할 때는 every 사용
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  //reduce()는 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용함
  //reduceRight()은 배열의 제일 뒤에서부터 시작하는 것(배열의 순서가 거꾸로 시작됨)
  const result = students.reduce((prev, curr) => {
    console.log('-------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score; // 리턴값인 curr은 90번째 줄의 prev 파라미터로 들어간다.
  }, 0); // 0은 initial value
  // 총점
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  //⭐️아래는 함수형 프로그래밍의 예제⭐️
  //연산, api를 섞어서 호출도 가능
  const result = students
    .map((student) => student.score) //점수만으로 이루어진 배열 새로 생성
    .filter((score) => score >= 50) //50점 이상인 값만 가져옴
    .join(); //string으로 변환
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
