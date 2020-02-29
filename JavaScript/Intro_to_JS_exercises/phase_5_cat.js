function Cat(name, owner){
        this.name = name
        this.owner = owner
}

Cat.prototype.cuteStatement = function () {
    if ((this.owner).toUpperCase() ===`JERRY`){
        return `${this.owner} isn't too fond of ${this.name}.`
    }
    return `${this.owner} loves ${this.name}`
};

Cat.prototype.cuteStatement = function(){
    return `Everyone loves ${this.name}!!!!`
}

Cat.prototype.meow = function(){
    return `MEOWWWWWWWW`
};



const cat_1 = new Cat(`Garfield`, `Jon`)
const cat_2 = new Cat(`Tom`, `Jerry`)

cat_1.meow = function () {
    return `${this.name} meowed!`
}


console.log(cat_1.cuteStatement())
console.log(cat_2.cuteStatement())
console.log(cat_1.meow())
console.log(cat_2.meow())

