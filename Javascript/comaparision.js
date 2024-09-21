// let a = 5;
// let b = 5;
// console.log(a === b); // true (values are the same)

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 == arr2); // false (different references)

// function myFunction(param) {
//     console.log(param);
// }

// // Call myFunction with argument after a delay of 3000 milliseconds (3 seconds)
// setTimeout(function() {
//     myFunction("Delayed execution");
// }, 3000);

// // setTimeout(console.log('Hello then'),2000)
// setTimeout(function() {
//     console.log('Hello then');
// }, 2000);

// function myFunction(param) {
//     console.log(param);
// }

// // Call myFunction with argument after a delay of 3000 milliseconds (3 seconds)
// setTimeout(myFunction, 3000, "Delayed execution");

// // Another example without passing arguments
// setTimeout(console.log, 2000, 'Hello then');

// let num=[10,20,30,40,50];
// num.forEach(function(val,index,array) {
//     console.log(val+" "+index+" "+num);
// })

let obj = {
    name: "Bravo",
    age: 21,
    "last name": "John",
    fun: function () {
      console.log("I am Function.");
      return "Function executed successfully.";
    },
    arr:[20,30,40]
  };

  console.log(obj.name);
  console.log(obj.age);
  console.log(obj["name"]);
  console.log(obj["age"]);
  console.log(obj["last name"]);
  console.log(obj.fun());
  // console.log(obj["fun"]);This line gives error
//   console.log(obj.fun.call(obj));
  obj.fun();
  console.log(obj.arr);
  console.log(obj);
  console.log("below----")
  console.log(obj.fun);
  //obj.a="item1";it gives error 
  obj.key='item1';
  console.log(obj.key);
  obj.key="item2";
  console.log(obj);
//   obj[a]="item2";
  console.log(obj);