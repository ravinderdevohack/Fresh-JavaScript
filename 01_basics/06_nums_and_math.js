const score = 455;
// console.log(score);

const balance = new Number(343)
// console.log(balance);


// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 233.7893
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(2)); // -> to precision returns value in string datatype
// console.log(otherNumber.toPrecision(5));

const hundreds = 100000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-In'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// ============================  Maths ======================

// console.log(Math);
// console.log(Math.abs(-33))
// console.log(Math.round(234.67));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(6.8));



//  mostly Math library is used in Math.random()

// console.log(Math.random());
// console.log((Math.random()*5)+1);

const minValue = 10
const maxValue = 20

// we need random value b/w them max and min

let randomValue = Math.floor((Math.random() * (maxValue - minValue + 1)) + minValue)
console.log(randomValue);

// console.log(Math.floor((Math.random()*(maxValue-minValue+1)+minValue)));
