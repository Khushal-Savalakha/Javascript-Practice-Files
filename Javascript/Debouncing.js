let counter=0;
const getData = ()=>{
    //calls an API and gets Data
    console.log("Fetching Data...",counter++);
    
}

const debounce=(fn,delay)=>{
    let timer;
    let context=this;
    args={'name':'skj'};
    return function(...args){
        let context=this;
        clearTimeout(timer);
        timer= setTimeout(()=>{
            getData.apply(context,arguments);
        },delay);
    }
}

const betterFunction=debounce(getData,800);
/*It will do some magic on getData and don't make it call again and again
 on each and every key stroke rather it should only call when use paused 
 while typing  */

// Only call getData method when difference of time between keystrokes greater than 300ms