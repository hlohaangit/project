var n = require ('readline-sync');
var no = n.question('enter the harmonic value');
var BLogic=require('./harmonicBL');

console.log(BLogic.value(no))