/*Constructor functions
technically are regular functions.There are two conventions though:*/

//They are named with capital Letter first.
//They should be executed only with 'new' operator.

function User(name){
    this.name=name;
}
let person=new User("Jack");
console.log(person.name);



let person2 = User("Khushal Savalakha");
console.log(person2.name); // This will throw an error because 'person' is undefined