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
