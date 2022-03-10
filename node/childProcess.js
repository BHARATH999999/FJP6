let ch = require('child_process');

// ch.execFileSync("calc") //Opens Calculator

// ch.execSync("code") //Opens VS Code

let content = ch.execSync("node test.js");

console.log("Output of test.js file  \n---> \t" + content);