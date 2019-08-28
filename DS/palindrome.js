var dequeue=require('./utility/palindromeBL');

function input(){
    var readLine = require('readline');
    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl;
    }
    



function palindromeChecker(){


    var read=input();
    read.question("Enter a string: ",function(str){
        if(str>='a' && str<='z'||str>='A' && str>='Z'){
            dequeue.Palindrome(str);    
        }
        else if(str==""){
            console.log("Plz enter a string....");
        }
        else {
            console.log("Plz enter a character string only...");
        }
        read.close();
    });
}
palindromeChecker();