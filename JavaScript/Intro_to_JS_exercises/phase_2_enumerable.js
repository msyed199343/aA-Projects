Array.prototype.myEach = function (callback) {
    
    this.forEach (ele => {
        callback(ele)
    })
}

Array.prototype.myMap = function(cb) {
    let arr = []
     this.forEach(ele => {
        arr.push(cb(ele))
    })
    console.log(arr)
}

let test_func = function(acc, el) {
     return acc + el
}   

let test_func_2 = function (el) {
    return el + 1
}   
let arr = [1, 2, 3, 4, 5]

console.log(arr.myEach(test_func_2))
arr.myMap(test_func_2)

Array.prototype.myReduce = function(callback,initialValue){
    let sum = initialValue
    for (i =0; i<this.length; i++) {
        sum = sum + this[i] 
    }
    console.log(sum)
};


arr.myReduce(test_func, 20)