class Clock {
    
    constructor(){
        const t = new Date()
        this.hour = t.getHours()
        this.minute = t.getMinutes()
        this.second = t.getSeconds()
        this.printTime();
        setInterval(this.tick.bind(this), 1000)
    }

    printTime(){
        console.log(`${this.hour}:${this.minute}:${this.second}`)
    }

    tick(){
        
        if (this.second === 59){
            this.second = 0
            this.addMin();
            this.printTime();
        }
        else{
            this.second += 1
            this.printTime();
        };

        
        
        
    }

   
    

    addMin(){
       
        if (this.minute  === 59){
            this.minute = 0
            this.addHour();
        }
        else{
            this.minute +=1 
        };
    };

    addHour(){
        if (this.hour === 24){
             this.hour = 0
        }
        else {
            this.hour += 1
        };
    };
}

// const clock = new Clock();

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, callback){
    if(numsLeft > 0){
        reader.question('Number please:',  (res) =>{
               let number =  parseInt(res);
               sum += number 
               let num_left = numsLeft -= 1
            console.log(`sum so far: ${sum}`);
            addNumbers(sum, num_left, callback)
        })
    }
    else {
        callback(sum);
    };
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback){
    reader.question(`Is ${el1} > ${el2}?`, (res) => {
        if (res === "yes"){
            callback(true);
        }
        else{
            callback(false);
        };
    })
}

// askIfGreaterThan(1, 2, answer => console.log(`${answer}`))


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){

    if (i === (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps);
        return;
    };

    askIfGreaterThan(arr[i], arr[i + 1],  isGreaterThan => {
            if (isGreaterThan) {
                const tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;

                madeAnySwaps = true;
            }
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
            });
   
};

function absurdBubbleSort(arr, sortCompletionCallback){
    function outerBubbleSortLoop(madeAnySwaps) {
    
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } 
        else {
            sortCompletionCallback(arr);
        };
    }

    outerBubbleSortLoop(true);
};


let arr_1 = [3, 2, 1, 1]

// absurdBubbleSort(arr_1, function (arr) {
//     console.log(` \nSorted array: ` + JSON.stringify(arr));
//     reader.close();
// });


Function.prototype.myBind = function (context) {
     return () => this.apply(context);
};



class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"


    
Function.prototype.myThrottle = function(interval) {
    let tooSoon = false
    
    return (...args) => {
        if (!tooSoon) {
            tooSoon = true 
            setTimeout(() => tooSoon = false, interval);
             this(...args);
        };

    }
};

function random() {
    return (...args) => {this(...args)}
}


console.log(random("hi"))


// class Neuron {
//     fire() {
//         console.log("Firing!");
//     };
// };


class Neuron {
    constructor() {
        this.fire = this.firee.myThrottle(5000);
    }

    firee() {
        console.log("Firing!");
    };

};

const neuronOne = new Neuron();
neuronOne.fire();
// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);


 

// const interval_2 = setInterval(() => {
//     neuron.fire
// }, 10);



