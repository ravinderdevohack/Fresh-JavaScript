
function addTwoNumber(number1, number2){
    return `sum of ${number1} and ${number2} = ${number1 + number2}`
}

const result = addTwoNumber(2,6)
// console.log(result);

function calculateCartPrice(...sum){
    return sum
}
// console.log(calculateCartPrice(23, 200, 300, 400));

// object handling

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(myNewArray));
