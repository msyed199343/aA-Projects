// setTimeout(function () {
//     alert('HAMMER TIME!');
// }, 5000);

// // // Timeout with a Closure

// function hammerTime(time) {
//     window.setTimeout(function () {
//         alert(`${time} is HAMMER TIME!`);
//     });
// }




// const readline = require('readline');
// let first, second;

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// function teaAndBiscuits() {

//     reader.question('Would you like some tea?', function(res) {
//         console.log(`You replied "${res}."`);
//     });

//         reader.question('Would you like biscuits?', function (res){
//             console.log(`You replied "${res}".`)
//         });

//     const firstRes = (first === 'yes') ? 'do' : 'don\'t';
//     const secondRes = (second === 'yes') ? 'do' : 'don\'t';
//     console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
//     reader.close();
// };

function Cat() {
    this.name = 'Funky';
    this.age = 3;
}

function Dog() {
    this.name = 'Spunky';
    this.age = 4;
}

Dog.prototype.chase = function (cat) {
    console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Spunky = new Dog();
const Funky = new Cat();

Spunky.chase.call(Spunky, Funky);
Spunky.chase.apply(Spunky, [Funky])