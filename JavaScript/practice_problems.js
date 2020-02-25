function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}


function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping3() {
    var x = 'out of block';
    if (true) {
        var x = 'in block'; //<---- x is already a declared const so will throw error
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping5() {
    var x = 'out of block';
    if (true) {
        let x = 'in block';
            x = "still in block"
        console.log(x);
    }
    
    var x = 'out of block again';
    console.log(x);
}
// mysteryScoping1();
// mysteryScoping2();
// mysteryScoping3();
// mysteryScoping4();
mysteryScoping5();


function madLib(verb, adj, noun) {
   console.log( `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`);

}

madLib('make', 'best', 'guac');

function isSubstring(searchString, subString){
    if (searchString.includes(subString)){
        console.log(true)
    }
    else {
        console.log(false)
    };

}

isSubstring("time to program", "time")
isSubstring("Jump for joy", "joys")

function fizzBuzz(array) {
    const arr = []
    array.forEach(num => {
        if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)){
            arr.push(num)
        }

    });
    console.log(arr)
}

let arr_1 = [1, 2, 5, 10] //[5, 10]
fizzBuzz(arr_1)

function isPrime(number) {
    
  for (let num = 2; num < number; num++) {
  if (number % num === 0 ){
      return false;
  }
 
  
  };
  
  return true;
}

console.log(isPrime(2))
console.log(isPrime(10))
console.log(isPrime(15485863))
console.log(isPrime(3548563))
console.log(isPrime(1))

function sumOfNPrimes(n) {
    let sum = 0
    let count = 0;
    let i = 2
    while (count < n){
        if (isPrime(i)){sum += i
            count++ 
        };
        i++;
    };
    return sum
}

console.log(sumOfNPrimes(0))
console.log(sumOfNPrimes(1))
console.log(sumOfNPrimes(4))

function titleize(array, callback){
    let arr = []
    array.map(name => {
        let name_1 = name[0].toUpperCase() + name.substr(1);
        arr.push(`Mx. ${name_1} Jingleheimer Schmidt`)
    })


    return callback(arr)
}

const callback_1 = function name_final(name_arr) {
    let names = ""
    name_arr.forEach((name, index) => {
        index === (name_arr.length - 1) ? names += `${name}` : names += `${name} \n` 
    });
    return names
};

let names = ["mary", "brian", "leo"]

console.log(titleize(names, callback_1))