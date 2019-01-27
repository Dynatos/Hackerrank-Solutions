'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {

  const lookup = {};
  const numReq = {};
  
  note.forEach((e) => {
    lookup[e] = 0;
    numReq[e] ? numReq[e]++ : numReq[e] = 1;
  });
  
  magazine.forEach((e) => {if (lookup[e] || lookup[e] === 0) {lookup[e]++}});
  
  const lookupKeys = Object.keys(lookup);
  
  for (let i = 0; i < lookupKeys.length; i++) {
    
    const e = lookupKeys[i];
    
    if (lookup[e] < numReq[e]) {
      console.log('No'); 
      break
    }
    
    if (i === lookupKeys.length - 1) {
      console.log('Yes');
      return
    }
  }
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
