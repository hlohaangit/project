var readline = require('readline-sync');

module.exports ={
    dist(){
      
        var x =readline.question("enter the distance value x");
        var y =readline.question("enter the distance value y");
        var dist=Math.sqrt((Math.pow(x, 2))+(Math.pow(y, 2)));
        console.log("distance from (" + x + ", " + y + ") to (0, 0) = " + dist);
    }   
}