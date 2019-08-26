var readline= require("readline-sync");
var utility=require('../utility');

var arr=[];
var n=readline.question('enter the no of inputs');
while (n--){
    console.log('enter '+(n+1)+'th element')
    arr.push(parseInt(readline.question()));

}

var ne = utility.mergesort(arr);
console.log();
console.log('sorted array is ')

console.log(ne)
