let arr = [2, 3, 5, 7, 21, 1, 1, 1, 3, 4]
//compare two elements next to each other 
//and switch places if left is larger than right

Array.prototype.bubbleSort = function () {
    let sort = true
    while (sort) {
        sort = false
        for (i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
               [ this[i], this[i + 1]] = [this[i + 1], this[i]]
                sort = true
            };
        };
    };
    console.log(this)
};

arr.bubbleSort();

String.prototype.substrings = function (){
    let substrings = []
    
    for(i=0; i<this.length; i++){
       
        for (i_2 = 0; i_2 < this.length; i_2++) {
            substrings.push(this.slice(i,i_2+1))
        };
    };
    console.log(substrings.filter( char => char))
};
 
"abc".substrings() //=> [ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]
