var n = require ('readline-sync');
var no = n.question('enter the no to find prime factors of ');
var BLogic=require('./primeFactrosBL');

console.log(BLogic.value(no))