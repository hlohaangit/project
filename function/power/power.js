var r1 = require ('readline-sync');
var n = r1.question('Enter the power of 2 required.');
var BLogic=require('./powerBL');

console.log(BLogic.value(n))