const readline = require('readline');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('Would you like some tea?', (res) =>{
    console.log(`You replied "${res}."`);
});

reader.question('Would you like biscuits?', (res)=>{
    console.log(`You replied "${res}".`)
});
