var BL=require('../utility.js');
 var readline=require('readline-sync');
function twoD()
{
    var col=readline.question('Enter the required column number ');
    var row=readline.question('Enter the required row number ');
    var res=BL.input2dArray(row,col);

console.log(res)
}
twoD(); 