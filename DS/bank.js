var read=require('readline-sync');
var Utility=require('./utility/queueBL');
  
function bankingCash(){
    var input=read.question("Enter the number of transactions: ");
   
    if(input>='a' && input<='z'||input>='A' && input<='Z'){
        console.log("Plz enter integers only....");
    }
    else{
        Utility.Banking(read,input);
    }
}
bankingCash();