const arry = [1,2,3,4,5,6,7]

// move the arry to right with k value

const k = 2;

function reverse(arry, l, r){
    while(l<r){
    // let temp = arry[l];
    // arry[l] = arry[r];
    // arry[r] = temp;

    [arry[l], arry[r]] = [arry[r], arry[l]]

    l++;
    r--;
    }
}


function rotate(arry, k){   
    k = k % arry.length;

    reverse(arry, 0, arry.length-1)
    console.log(arry)

    reverse(arry, 0, k)
    console.log(arry)

    reverse(arry, k+1, arry.length-1)
    console.log(arry)

}

rotate(arry, k)