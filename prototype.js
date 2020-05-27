function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return this.first + this.second;
};

const song = new Person("song", 89, 2);

const alex = new Person("alex", 10, 7);

console.log(song.name);
//song
console.log(alex.sum());
//17
