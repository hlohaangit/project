
var ordered=require("./utility/orderedLinklistBL");
var fileSystem=require('fs');
var data=fileSystem.readFileSync('file1.txt')

console.log('string read from file:  '+data);
data=data.toString().split(' ');

function input(){
    var readLine = require('readline');
    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl;
    }
    



function orderedList(){ 
    
    var read=input();
    read.question("Enter the element to be searched: ",function(num){
       
        if((num>='a' && num<='z')|| (num>='A' && num<='Z')){
            console.log("please enter integers only..");
        }
        else{
            ordered.orderedList(data,num);
        }
        read.close();
    });
}
orderedList();