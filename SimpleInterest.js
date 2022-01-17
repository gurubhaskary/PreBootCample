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

 
var a=userInput[0];
var b=a.split("");
Simple=((b[0]*b[1]*b[2])/100);
console.log(Simple.toFixed(2));
});

Sample Input :
1000 2 5
Sample Output :
100.00
