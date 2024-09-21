var obj = {
  fname: "john",
  age: 8,
  fun: function () {
    console.log(this.fname);
  },
};

obj.fun();
console.log("-------------------------");
console.log(this);
fun();
function fun() {
  console.log(this);
}
console.log('--------------------------');
console.log(window);
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      var obj = {
        fname: "john",
        age: 8,
        fun: function () {
          console.log(this);
        },
      };

      obj.fun();
      console.log("-------------------------");
      console.log(this);
      fun();
      function fun() {
        console.log(this);
      }
      console.log("--------------------------");
      console.log(window);
    </script>
  </body>
</html>
*/