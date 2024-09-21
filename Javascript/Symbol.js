//A "Symbol" represents a unique identifier.

/*let sym=Symbol("id");
console.log(sym);
console.log(sym.toString());
console.log(sym.description);
let sym1=Symbol("id");
console.log(sym===sym1);*/

let id=Symbol('id');
let obj={
    name:'john',
    [id]:1,age:25
}

console.log(obj);
console.log('id:'+obj.id);
console.log('id:'+obj[id]);
console.log("---------->Symbol is headen properly we can't see it in  below output.");
for(let key  in obj){
    console.log(key);
}

