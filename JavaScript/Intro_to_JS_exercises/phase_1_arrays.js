Array.prototype.uniq = function(){
    let arr = []
    this.forEach (num =>{
        arr.includes(num) ? null : arr.push(num) 
    })

   console.log(arr)
};

// return num's index 
Array.prototype.twoSum = function(){
    let arr = []
    for(let i = 0; i < (this.length-1); i++){
        let sum = this[i] + this[i + 1]  
        let sum_index = [i, i+1]

        if (sum === 0) { arr.push(sum_index) };
    };

    console.log(arr)
};

Array.prototype.transpose = function () {
    let transposed = []
    
    for(let i = 0; i < this.length; i++){
        let j = 0
        let part = []

        for (let j = 0; j < this.length; j++) {
            part.push(this[j][i])
        }
        transposed.push(part)
    };
    console.log(transposed)
};

let a = [   [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
]
a.transpose();
[0, 0, 1, 1, 1, 5, 6, 0, 0].twoSum(); 


[1, 2, 3, 5, 5, 6, 6, 7].uniq();
[1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq();