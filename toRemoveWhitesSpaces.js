// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

 
var txt = userInput[0];
var a=txt.replace(/\s+/g, '')
var len = a.length;

 console.log(len);
});

Sample Input :
Lorem Ipsum
Sample Output :
10
