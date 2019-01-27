'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {

    let highest;
    const height = arr.length;
    const width = arr[0].length;
    
    for (let i = 0; i < height - 2; i++) {
        for (let j = 0; j < width - 2; j++) {
            let current = 0;
            current += arr[i]    [j];
            current += arr[i]    [j + 1];
            current += arr[i]    [j + 2];
            current += arr[i + 1][j + 1];
            current += arr[i + 2][j];
            current += arr[i + 2][j + 1];
            current += arr[i + 2][j + 2];
            if (highest === undefined) {
                highest = current;
            }
            else if (current > highest) {
                highest = current;
            }
        }
    }
    
    return highest;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
