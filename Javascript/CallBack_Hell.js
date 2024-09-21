function loadingData(callback) {
    setTimeout(() => {
        console.log("1] Loading Data")
    }, 4000);
    callback();
}

function collectingData() {
    setTimeout(()=>{
        console.log("2] Collecting Data")
    },5000)
}

function approvingData() {
    console.log("3] Approving Data")
}

function approved() {
    console.log("4] Approved");
}

loadingData(
    function () {
        collectingData();
        approvingData();
        approved();
    }
);

/*
function loadingData(callback) {
    setTimeout(() => {
        console.log("1] Loading Data")
    }, 4000);
    callback();
}

function collectingData(callback) {
    setTimeout(()=>{
        console.log("2] Collecting Data");
        callback();
    },5000)
}

function approvingData(callback) {
    setTimeout(()=>{
        console.log("3] Approving Data")
        callback();
    })
}

function approved() {
    console.log("4] Approved");
}

loadingData(
    function () {
        collectingData(function(){
            approvingData(function(){
                approved();
            });
        });
    }
);

*/