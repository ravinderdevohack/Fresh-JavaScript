//  for of   -> can be work on array but on no object , cause object is non-iterable
//  for in   -> can wokr on object
//  foreach  -> will only work for array, as its a proto of arry, a call back function, call back function doesn't have a name
//  filter   -> same as foreach proto of array, difference is its return value but for each not
//  map      -> call back function

//  Map -> give latest unqiue value if duplicate is found  , 

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


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filterValue = myNums.filter( (item) => item > 5 )    // implicit return
// console.log(filterValue);

const filterValue2 = myNums.filter( (item) => { return item < 5} )    // explicit return
// console.log(filterValue2);
// console.log(typeof(filterValue));



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook = books.filter( (item) => item['genre'] == 'Fiction')
console.log(userBook);



// Chaining

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNums = myNumbers
                    .map( (iteam) => iteam*10 )
                    .map( (iteam) => iteam +1 )
                    .filter( (iteam) => iteam > 40)

console.log(newNums);
