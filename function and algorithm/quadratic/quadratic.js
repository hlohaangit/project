var readline=require ('readline-sync');
var BL=require('./quadratiBL');

console.log('Form of the equation is --  ax^2 + bx + c');
console.log("enter the values of a,b and c");

var a= readline.question('enter the value of a');
var b= readline.question('enter the value of b');
var c= readline.question('enter the value of c');

BL.printRoots(a,b,c);