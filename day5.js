'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//codigo importante

function main() {
    let N = parseInt(readLine())
    
    for(let i = 1; i < 11; i++){
        let result = N * i
        console.log(N.toString() + " x " + i.toString() + " = " + result.toString())
    }
    
}
