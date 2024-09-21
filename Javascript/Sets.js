const arr=[10,20,30,40,50,40];
console.log(arr);

const s=new Set([10,20,30,40,50,40,50]);
console.log(s)
s.add('Hello');
console.log(s.length);
console.log(s);
length=0;
for(let element of s){
    length++;
}

console.log('set length:'+length);
console.log('Set Size:'+s.size);