function range(start, end){
    
    if (start === end) {
         return [start];
    };

    let r = range(start, end-1)
        r.push(end)
     return r
   
     ///4 and 2///3 and 2    
};

console.log(range(1, 5)); // [1, 2, 3, 4, 5]


function sumRec(arr) {
    if (arr.length === 1){return arr[0]};
    let sum = sumRec(arr.slice(0, 1)) + sumRec(arr.slice(1))  // [2, 3] sum which is 5
    return sum
}

console.log(sumRec([1, 2, 3])); // 6 
console.log(sumRec([1, 2, 3, 4, 5, 6])); // 21

function exponent(base, exp) {
    if (exp === 0) { return 1}
    else if (exp === 1) {return base};

    let raised = exponent(base, exp -1) * base

    return raised
};

function exponent_2(b, e){
    if (e === 0) { return 1 }
    else if (e === 1) { return b };

     if (e % 2 === 0){
         return exponent_2(b, e/2) ** 2}
     else {
        return b * exponent_2(b, (e-1)/2) ** 2
     };

    
};

console.log(exponent_2(5, 3)) // 125
console.log(exponent(5, 2)) // 25

// return n fibnacci numbers so 3 would mean [0, 1, 1]
function fibonacci(n) {
    if (n === 1 ){return [0]};
    if (n === 2 ){return [0, 1]}

    let arr = fibonacci(n-1) // [0, 1]

    let i = arr.length

    arr.push(arr[i - 1] + arr[i - 2]);

    return arr

    

};

// [0] + 
console.log(fibonacci(11)); //[0, 1, 1]