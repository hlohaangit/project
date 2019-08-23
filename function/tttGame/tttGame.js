var BL=require('./tttGameBL');
var utility=require('../utility')
var readline= require("readline-sync");

function playgame(){
var gameBoard=BL.createBoard();
var p1chance=true;  
while(!BL.checkWin(gameBoard) && ! BL.boardFull(gameBoard)){
    if (p1chance) {
        console.log("\t\t move for player 1");
        BL.drawBoard(gameBoard);
        var move = readline.question("enter row and column of cell");
        var row=move.split(" ")[0];
        var col=move.split(" ")[1];   
    }
    
    else {
        console.log("move for player 2");
    BL.drawBoard(gameBoard)
    var row=utility.getRandomNo(1,4);
    var col=utility.getRandomNo(1,4);
    console.log(row+ " "+col);
    }
    if (p1chance){
        BL.makeMove(gameBoard,row-1,col-1,'X');
        p1chance=false
    }
    else{
        BL.makeMove(gameBoard,row-1,col-1,'0');
        p1chance=true;
    }


    if (BL.checkWin(gameBoard)){
        console.log("game over");
        BL.drawBoard(gameBoard);

    }
}

if(BL.boardFull(gameBoard)){
    BL.drawBoard(gameboard);
    console.log("draw game");
}
    
}

playgame();