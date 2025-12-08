const myArr = [0, 1, 2, 3, 4, 5, 6]
const myArr2 = new Array('ravi', 23, 43, 23)

// console.log(myArr)
// console.log(myArr2)

// Array method

// myArr.push(23)
// console.log(myArr);
// console.log(myArr.includes(3));


const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof(newArr));

// console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1,3)

// console.log(myn2);
// console.log("C ", myArr);


const marvelHeros = ["iron man", "Hulk", "Caption"]
const dcHeros = ["Superman", "Batman", "Speed"]

const allHeros = marvelHeros.concat(dcHeros)   // only 2 array can concatenate
// console.log(allHeros); 
// console.log(typeof(allHeros));

const allNewHeros = [...marvelHeros, ...dcHeros ]  // multipe arrays can be add together -> spread method
// console.log(allNewHeros);
// console.log(typeof(allNewHeros));

const anotherNewArray = [2, 3, 5, [3, 6], 3, [3, 5, [4, 2, 7]]]
// console.log(anotherNewArray.flat(Infinity));

// console.log(Array.from("Ravinder"));

console.log(Array.of(myArr, myArr2));

console.log((Array.of(myArr, myArr2)).flat(Infinity));





