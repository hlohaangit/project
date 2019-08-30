var readline=require('readline-sync');
var BL= require('./BstBl')

var numberOfNodes = parseInt(readline.question('enter the no'))

try{
    if(numberOfNodes < 0)throw error;
    else{
        console.log(BL.numberOfBSTPossible(numberOfNodes));
    }
}catch(error){
    console.log("invalid no");
}