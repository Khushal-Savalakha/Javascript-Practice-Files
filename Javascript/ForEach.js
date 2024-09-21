let arr=[["john",30],["Thomas",28],["Robert",22]];
arr.forEach(data=>{
    data.forEach(val=>{
        console.log(val);
    })
})
console.log("----------------------");
for(i of arr){
    for(val of i){
        console.log(val);
    }
}