
var simpleBP = require('./utility/parenthesisBL');

function input(){
    var readLine = require('readline');
    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl;
    }

function balancedParenthesis() {
    var read = input();
    read.question("Enter an expression:", function (expression) {
       
        if (expression == "") {
            console.log("plz enter an expression");
        }
        else {
            simpleBP.balancedParenthesis(expression);
        }
        read.close();
    });
}
balancedParenthesis();