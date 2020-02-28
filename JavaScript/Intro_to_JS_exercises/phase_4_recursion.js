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

function deepDup(arr){
    if(!(arr instanceof Array)){
        return arr;
    }

    return arr.map((el) => {
        return deepDup(el);
    });
};

console.log(deepDup([1, 1, 1, 2, 3, 5]));

//without recursion solve 
function bsearch(arr, target){
    if (!arr.includes(target)) {return -1};
    if (arr.includes(target)) {return arr.indexOf(target)};
};

//with recursion

function bsearch_2(arr, target){
    if (arr.length === 0 ){
        return -1
    };

    const mid_idx = Math.floor(arr.length/2)
    const mid = arr[mid_idx]

    if (target === mid){
        return mid_idx
    }
    else if (target < mid) {
        const left = arr.slice(0, mid_idx)
        return bsearch_2(left, target)
    }
    else {
        const right = arr.slice(mid_idx+1)
        const func = bsearch_2(right, target)
        return func === -1 ? -1 : func + (mid_idx +1)
    };

};

console.log(bsearch_2([1,2,3,4,5], 5)) // 4
console.log(bsearch([1, 2, 3, 4, 5], 5)) // 4

function combine (left, right){
   const arr = [];
    
    while (left.length > 0 && right.length > 0 ) {
        if (left[0] < right[0]){
          arr.push(left.shift()) }  
        else {
            
            arr.push(right.shift());
        };
    };

    return arr

};

function mergeSort(arr){
    if (arr.length < 2  ){return arr}
    else {
    const middle = Math.floor(arr.length/2);

    const left_side = mergeSort(arr.slice(0, middle)); //b/a[3] // [2]
    const right_side = mergeSort(arr.slice(middle)); // b [2, 1] a  // [1]

    return combine(left_side, right_side)};
};
//[3, 2, 1]
                    // [9, 1, 5]  [6, 4, 3, 2]
console.log(mergeSort([9, 1, 5, 6, 4, 3, 2])) //[1, 2, 3, 4. 5. 6. 9]
console.log(mergeSort([3, 2, 1]))
console.log(combine([5, 1, 6], [3, 5, 7]))