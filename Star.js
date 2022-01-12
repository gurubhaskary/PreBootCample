* 
* * 
* * * 
* * * 
* * 
* 

const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const userInput = [];
inp.on("line", (data) => {userInput.push(data);});inp.on("close", () => 
{
   var a=3;
     var t="";
  for(var i=0;i<a;i++)
  {
      for(var j=0;j<i;j++)
      {
          t+="*"+" ";
      console.log(t);
      }
      
  } 
  for(var i=0;i<a;i++)
  {
      var t="";
      for(var j=0;j<a-i;j++)
      {
          t+="*"+" ";
      
      }
      console.log(t);
  } 
});
 
