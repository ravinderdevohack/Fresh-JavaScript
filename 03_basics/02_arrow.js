const user = {
    userName: "Ravi",
    price: 999,

    welcomeMessgae: function(){
        console.log(`${this.userName} , welccome to site`);
        console.log(this);
        
    }
}

// user.welcomeMessgae()
// user.username = "sam"
// user.welcomeMessgae()

// console.log(this);

// function one(){
//     let userName = "ravi"
//     console.log(this.userName)
// }

// one()

// const addNumber = (num1, num2) => {
//     return num1 + num2
// }

const addNumber = (num1, num2) => (num1+ num2)      // implicit-> return not mention, explicit return mention
const addNumber2 = (num1, num2) => { return num1+ num2}    // {} -> return need to mention
console.log(addNumber(2,4));
