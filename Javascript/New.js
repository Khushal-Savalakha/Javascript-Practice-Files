// //new
// function fun(){
//     let fname='john';
//     this.fname=fname;
//     return this;
// }
// console.log('-->'+fun().fname)

// console.log(new fun())
/*
function fun(){
    let fname='john';
    this.fname=fname;
}

var obj=new fun();
console.log(obj.fname);*/

function User(name){
    if(!new.target){
        return new User(name);
    }
    this.name=name;
}

let person=User("Jack");
console.log(person.name);

let person2=new User('Khushal');
console.log(person2.name);
