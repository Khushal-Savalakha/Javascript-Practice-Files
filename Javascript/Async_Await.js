function loadingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1] Loading Data")
            resolve();
        }, 2000);
        
    })

}

function collectingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2] Collecting Data");
            // resolve();
            reject("Error:Not fullfilled!");
        }, 2000);
    });
}

function approvingData() {
    return new Promise((call_,reject)=>{
        setTimeout(() => {
            console.log("3] Approving Data")
            call_();
            // reject("Error:Not fullfilled!");
        },2000);
    })
}

function approved() {
    console.log("4] Approved");
}


async function Ex(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}

Ex().catch((err)=>{
    console.log(err)
});