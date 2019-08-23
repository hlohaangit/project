var n = require ('readline-sync');
var no = n.question('How many times do you want to flip?');
var BLogic=require('./flipCoinBL');

console.log(BLogic.value(no))