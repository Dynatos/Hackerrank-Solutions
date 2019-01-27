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

// Complete the twoStrings function below.
function twoStrings(s1, s2) {

  const s1l = {};
  const s2l = {};
  const longestStr = Math.max(...[s2.length,s1.length]);
  
  for (let i = 1; i < 2; i++) {
    let curStr1 = '';
    let curStr2 = '';
    for (let j = 0; j < longestStr; j++) {
      curStr1 += s1[j];
      curStr2 += s2[j];
      if (curStr1.length === i) {
        if (curStr1.length){s1l[curStr1] = 1}
        if (curStr2.length){s2l[curStr2] = 1}
        if (s1l[curStr2] || s2l[curStr1]) {
          return 'YES'
        }
        curStr1 = curStr1.slice(1);
        curStr2 = curStr2.slice(1);
      }
    } 
  }
  
  // for (let i = 1; i <= s2.length; i++) {
  //   let curStr = '';
  //   for (let j = 0; j < s2.length; j++) {
  //     curStr += s2[j];
  //     if (curStr.length === i) {
  //       if (s1l[curStr] === 0) {
  //         return 'YES'
  //       }
  //       curStr = curStr.slice(1);
  //     }
  //   } 
  // }
  
  return('NO')
  return(['NO', longestStr, Object.keys(s1l), Object.keys(s2l)]);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
