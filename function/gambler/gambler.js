var n = require ('readline-sync');
var stake = n.question('enter the stake amount');
var goal = n.question('enter goal amont');
var trials = n.question('enter trials')
var BLogic=require('./gamblerBL');

console.log(BLogic.value(stake,goal,trials))