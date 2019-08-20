var n = require ('readline-sync');
var year = n.question('enter the year');
var BLogic=require('./leapYearBL');

console.log(BLogic.value(year))