function syed(name){
    if (name === "Syed") { 
            console.log(`Yes, this is Syed`);
        } 
    else {
            console.log(`This is actually ${name}`.toUpperCase())
         };
};

class User {
        constructor(name, password_digest) {
        this.name = name 
        this.password_digest = password_digest
    };  



    get show() {
        return `${this.name} ${this.password_digest}`
    };

    times(num) {
        return `${this.name} `.repeat(num)
    };

    jumble() {
        
    };

};

function loopty(count, name){
    while (count <= 10) {
        console.log(`${count}.${name}`)
        count += 1
    };
};

function arr(array){
    let bool = array.includes(1)
   if (bool) {
       console.log(`${array}`)
   }
   else {
        console.log(`Oh no WRONG DUDE`)
   }
};

function tes(t){
    if (t) {
        console.log('Not Falsey')
    }
    else {
        console.log('Falsey Alert')
    }

};
syed(`Dude`)
syed(`Syed`)
syed(`Tom`)
syed(`Henry`)
const test = new User(`Syed`, `ndisnf`);
console.log(test.show)
console.log(test.times(3))
loopty(-1, `Syed`)
let arr_1 = [1, 2, 3, 4, 6]
let arr_2 = [2]
arr(arr_1)
arr(arr_2)
console.log(20 * `lala`) // Nan 
tes(99999999999999)
tes(0 || "")

 
const fun = () => {
    console.log("OMG THAT IS SO FUN!!!")
}


function myForEach(array, func) {
    for (let i = 0; i < array.length; i++){
        func(array[i]);
    }
}

let by_2 = (num) => {
   console.log(num*100)
}

function times_2(num){
    console.log(num * 2)
}

let yao = (name) => {
    console.log(`YAO ${name}-DAWG!`)
}

let arr_99 = [1, 2, 3]

myForEach([1, 2, 3], times_2);

yao("SIDDY-SYD")





class Salty_Spatoon {
    constructor(name, toughness){
        this.name = name
        this.toughness = toughness  // out of 10
        this.in = false 
    };

    Question(){
        return `How tough are ya?`
    }

    how_tough(){
       
            return `Im a ${this.toughness}`
    };



    let_in(){
        if (this.toughness > 7) {
            this.in = true
            return `Right this way ${this.name}, sorry to keep you waiting!`
        }
        else {
            this.in = false
            return `Sorry ${this.name}, you're not tough enough!`
        };
    };
};

let Sponge = new Salty_Spatoon(`Spongebob`, -99);
let Lobster = new Salty_Spatoon(`Larry`, 9.5)

console.log(Sponge.Question());
console.log(Sponge.how_tough());
console.log(Sponge.let_in());

console.log(Lobster.Question());
console.log(Lobster.how_tough());
console.log(Lobster.let_in());


let cat = {
    purr: function() {
        console.log(`Meooooow`);
    },

    purr2: function() {
        for (i=0; i<5; i++){
        this.purr();
    }
    }
}

cat.purr();
cat.purr2();