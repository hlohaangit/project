var BL=require('./utility/unorderedLinklistBL');
var data = fileSystem.readFileSync('file.txt');
var readline=require('readline-sync');
console.log("String read from file: \n\n"+data);
data= data.toString().toLocaleLowerCase().split(' ');


function input(){
    var readLine = require('readline');
    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl;
    }
    



function unorderedList(){
    
    var read=input();
    read.question("Enter the element to search: \n",function(element){
        if(element>='a' && element<='z'||element>='A' && element<='Z'){
            BL.unorderedList(data,element); 
        }
        else{
            console.log("plz enter a string...");
        }
        read.close();
    });  
}
unorderedList();