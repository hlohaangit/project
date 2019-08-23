var input = require('readline-sync');
var sumObject= require('./zeroSumBL');

try{
    var inputSize= input.question("enter no of digits");
    if (inputSize<=0) throw error;
    else{
        var inputArray=sumObject.inputArray(inputSize);
        if(typeof inputArray === 'string')
        console.log(inputArray);
        else{
            sumObject.distinctTripletCount(inputArray);
        }
    }
}
catch(error){
    console.log('input correct digits');
}