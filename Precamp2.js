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

   var str=userInput[0];
   let t="";
  // console.log(str.split(""));
   for (var i=0;i<str.length-1;i++)
   {
       let a=str[i];
             t+=a+",";
   }
   t+=str[str.length-1];
   console.log(t);
  //end-here
});
/*
Input Description:
A single line contains a string.

Output Description:
Print the characters in a string separated by comma.

Sample Input :
guvi
Sample Output :
g,u,v,i*/
