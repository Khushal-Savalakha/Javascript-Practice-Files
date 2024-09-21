//Map
var map1=new Map([[1,"One"],["fname","Mickey"],['whole number',[0,1,2,3,4]]])
console.log(map1);
console.log(map1.get(1))

// var map2=new Map();
// map2.set("fname","Mouse")
// console.log(map2)
var k=map1.keys();
console.log('--->Keys are printed below')
for(var key of k){
    console.log(key);
}
console.log('--->Values are printed below')
var v=map1.values();
for(var values of v){
    console.log(values);
}
