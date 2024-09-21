// Asynchronous Javascript

// Js is Synchronous one by one folow's sequence.

// Below code is Asynchronous Example

/*console.log("This");
setTimeout(()=>{
console.log("ASynchronous");
},4000)
console.log("Is");
*/


setTimeout(fun,1000)
console.log("This")

function fun(){
    console.log("Asynchronous")
}

console.log("Is");

// setTimeout(fun,0)
// console.log("This")

// function fun(){
//     console.log("Asynchronous")
// }

// console.log("Is");