// Datatype = 2 -> Primitive and Non-Primitive

// Primitive DataType

/* 7 types : string, number, boolean, null(means empty like in temperture), 
    undefiend(memory space is declare but what need to defiened there is not)
    symbol, bigint
*/


let userEmail;
let outsideTemp = null;

let id = Symbol('123')
let anotherId = Symbol('123')

// console.log(id === anotherId);
// console.log(id);
// console.log(typeof id);

// const bigNumber = 234343n;


// Non-Primitive or Reference type

// Arrays, Objects, Functions

const heros = ["shaktiman", "doga", "nagraj" ];
const firstObj = {
    name: "ravinder",
    age: 22
}

let firstFunction = function(){
    console.log("hello world");
}

// firstFunction()

// JS Object and Events(web and browser) main thing in JS

/* JS dynamical type of static type language ?
    in Static type language variable need to predefine like int or char example typescript
    but in JS we don't need to define the const or let so it's a dynamic type language
    JavaScript allows changing the type of variable anytime → dynamic typing.
*/

// ===================================================================================


// Stack (Primitive Datatype) and Heap (Non- Primitive Datatype) memory type

//Stack  memory type example
let firstUserName = "ravinder"
let anotherUserName = firstFunction;

anotherUserName = "kissan"

console.log(firstUserName);
console.log(anotherUserName);


//Heap memory type example
let userOne = {
    email: "ravinder@google.com",
    upi: "233243@ybl",
}

let userTwo = userOne;

userTwo.email = "kissan@yahoo.com"

console.log(userOne);
console.log(userTwo);

