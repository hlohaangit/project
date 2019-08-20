var r1 = require ('readline-sync');
var userName = r1.question('enter unsername',{
    hideEchoBack: true
});
var BLogic = require('./replaceBL');
console.log(BLogic.newName(userName));

