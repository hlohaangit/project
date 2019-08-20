var n = require ('readline-sync');
var stake = n.question('enter the stake amount');
var BLogic=require('./gamblerBL');
var goal = n.question('enter goal amont');
var trials = n.question('enter trials')
console.log(BLogic.value(stake,goal))