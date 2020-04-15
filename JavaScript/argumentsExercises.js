function sum(){
    let sum = 0
    for(let i = 0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum
}   


// console.log(sum(1, 2, 3, 4, 5)) // 15

Function.prototype.myBind1 = function(el){
        const fn = this;
        const bindArgs = Array.from(arguments).slice(1);
        return function _boundFn(){
            const callArgs = Array.from(arguments);
            return fn.apply(ctx, bindArgs.concat(callArgs));
        };
};

function curriedSum(numArgs){
    const numbers = [];


    function _curriedSum(num){
        numbers.push(num);

        if(numbers.length === numArgs){
            let total = 0;
            numbers.forEach((n)=> {total += n})
            return total;
        }
        else{
            return _curriedSum;
        }
    }
    
}
