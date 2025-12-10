//  Immediately Invoke Function Expression

//  we use IIFE, to remove global variable pollution and to exicute funtion immediately

// ()();  ()-> define the funtion ()-> execute the funtion   ;-> to end the function

(function chai(){
    // named IIFE
    console.log("DB connected");
})();

( (name) => {
    console.log(`DB connected two ${name}`);  
})('Ravinder')

const value = (val) => { console.log("hi");
    return val;
}

console.log(value('ravi'));
