let num=[10,20,35,19,25,60];
let a=num.filter((val,ind,arr)=>{
    if(val>=10 && val<=25){
        return val;
    }
})

console.log(a);