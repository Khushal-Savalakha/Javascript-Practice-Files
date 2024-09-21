var obj={
    fname:"john",
};

var obj2={
    lname:"Smith",
};

/*obj2.__proto__ = obj;

console.log(obj2);
console.log(obj2.fname);
console.log(obj2.__proto__.fname);
console.log(obj2.__proto__.__proto__.fname);*/
obj2=Object.create(obj)//It will create a new object which has __proto__ property which points to obj
console.log(obj2)
console.log(obj2.fname)
console.log(obj2.lname)
// obj.skj="hello"
// console.log(obj.skj)