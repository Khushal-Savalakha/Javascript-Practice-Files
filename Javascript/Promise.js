function fun(task) {
    return new Promise((resolve, reject) => {
        if (task) {
            resolve("completed.");
        } else {
            reject("Not completed!!");
        }
    });
}
var count=0
let onResolve = (res) => {
    count+=1
    console.log(count+"]"+res);
}

let onReject = (err) => {
    count+=1
    console.log(count+"]"+err);
}

fun(true).then(onResolve).catch(onReject);
fun(false).then(onResolve).catch(onReject);
// fun(true).then(onResolve).catch(onReject);
// fun(false).then(onResolve).catch(onReject);