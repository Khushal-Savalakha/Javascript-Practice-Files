function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};
let user =new Person("John", 8);
console.log(user);
console.log(Person.prototype);
