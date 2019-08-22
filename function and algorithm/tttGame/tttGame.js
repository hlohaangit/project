var BL=require('./tttGameBL');
var readline= require("readline-sync");
var cx={0,0,0,0,0};
var cy={0,0,0,0,0};
var px={0,0,0,0,0};
var py={0,0,0,0,0};

var l2='***';
var l3='***';
var l1='***';


function playgame(){
    var i=0;
    while (BL.checkWin===false || BL.isOver===false){
        px[i]=readline.question('enter cordinate of x');
        py[i]=readline.question('enter cordinate of y');
        i++;
        BL.makeMove(l1,l2,l3,px[i],py[i]);

    }
    
}