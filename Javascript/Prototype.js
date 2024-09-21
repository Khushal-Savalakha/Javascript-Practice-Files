function Person(name,age){
let person=Object.create(Person.prototype)
person.name=name
person.age=age

return person
}
Person.prototype.greet=function(){
        console.log(`Hello ${this.name}`)
    };
let user=Person("John",8)
console.log(user)
console.log(Person.prototype)