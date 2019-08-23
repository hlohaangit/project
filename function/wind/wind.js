 var readline=require('readline-sync');
 var BL= require("./windBL");

 var t= readline.question("enter the value of t - ");
 var v=readline.question('enter the value of v - ');
 var w=BL.wind(t,v);
 console.log('t= '+t);
console.log('v= '+v);
 console.log('w= '+w);
