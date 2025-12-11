//  for of   -> can be work on array but on no object , cause object is non-iterable
//  for in   -> can wokr on object
//  foreach  -> will only work for array, as its a proto of arry return a call back function, call back function doesn't have a name
//  Map -> give latest unqiue value if duplicate is found

const arr = [1, 2, 3, 4, 5]

for (const item of arr){
    // console.log(item);
    
}

const greetings = "Greetings"
for (const item of greetings){
    // console.log(item);
    
}

const map = new Map()
map.set('In', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')
map.set('In', 'Indonesia')

for (const [key, value] of map){
    // console.log(`${key} :-> ${value}`);
    
}

// for (const key in map) {
//     console.log(key);
// }


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}



const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {console.log(item);
// } )

// coding.forEach( (item, index, arr) => { console.log(item, index, arr);
// })

// myObject.forEach( (item) => {console.log(item.key);
// })