// object can be literals and constructor

// constructor object are singleton object

// Object.create  // -> this is a contructor method and it will create a singleton


// object literals 

// object are key value pair 

const mySym = Symbol("key1")

const jsObject = {
    name: "ravinder",
    "full name": "Ravinder Chauhan",
    [mySym]: "mykey1",                       // typeOf of this will be now symbol
    age: 24,
    location: "Jaipur",
    email: "ravi@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(jsObject.name)   // not th right way but of the way to access object why?
// console.log(jsObject["name"]);    // why inside the "" cause key is considers as string in object
// console.log(jsObject["full name"]);     // full name can't be access by jsobject.full name
// console.log(jsObject[mySym]);


// Object.freeze(jsObject)         // this will freeze the object means no change in object
jsObject.email = "ravinder@microsoft.com"

// console.log(jsObject);      // object is freeze no email updated


//  in JS we ca treat function as a variable aslo

jsObject.greeting = function(){
    console.log(`Hello JS user ${this["full name"]}`)
}

// console.log(jsObject.greeting)
// console.log(jsObject.greeting())
// jsObject.greeting()


// objects can be nested

const amazonUser = {
    name: "ravi",
    fullName: {
        userFullName: {
            firstName: "ravinder",
            lastName: "chauhan"
        }
    },
    age: 23
}

// console.log(amazonUser.fullName?.userFullName.lastName);                // ? is used if we are not sure its exites like in url

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {1: "a", 2: "b", 3: "c"}

// console.log(Object.assign({}, obj1, obj2));        

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(jsObject))
console.log(Object.values(jsObject));


//  object de-structure

const course = {
    courseName: "JavaScript",
    prine: "free",
    courseInstructor: "Ravinder"
}

// now to access this we use
console.log(course.courseInstructor);

// but we can also de-structure this and access the course object this way 

const {courseInstructor: instrutor} = course        // de-structure the code

console.log(instrutor);


// de-structure use in React , example
// ()=> {}  ; -> also function declaration
// const navBar = ({comapany}) => {                 // ({conmpany})  -> de-structure, mainly there should be (props.company)

// }


//  API nows mostly comes in Jsom format
//  json format
// {
//     "id": "1",
//     "name": "ravinder",
// }

// [{},{}]