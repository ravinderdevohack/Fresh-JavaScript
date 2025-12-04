// console.log(2 < 3);
// console.log(2 <= 3);
// console.log(2 != 3);


console.log("2" == 2);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*  why this happen
    in JS comparsion operator and equal operator works differently
    comprasion opertor convert value to interger that why null>=0 is true and null>0 is false 
    remember to avoid this type of messy code, always do clean code
*/

//  ===  -> strict check, also check datatype

console.log("2" === 2 );
