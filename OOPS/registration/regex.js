const fileRW = require('fs');
const input= require("readline-sync");
const reges= require("./replace");

var stringFromFile= fileRW.readFileSync("input.txt",'utf-8');


var userName=input.question("enter you name");
var fullName=input.question('enter you fullname');
var mobile=input.question('enter mobile number ');

var patternReplaceObject=new reges();
var output= patternReplaceObject.replace(stringFromFile, userName, fullName,mobile);

fileRW.writeFileSync("output.txt", output);
 