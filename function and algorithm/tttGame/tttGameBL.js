module.exports={
    createBoard(){
        var arrayboard = [];
        for (i=0;i<3;i++){
            var secondArray = [];
            for (j=0;j<3;j++){
                secondArray.push("*");

            }
            arrayboard.push(secondArray);
        }
        return arrayboard;

    },

    makeMove(arrayboard,rowNumber,colNumber, char){
      try{
          if (rowNumber>3||colNumber>3||rowNumber<0||colNumber<0) throw "invalid cell" ;
          else if (arrayboard[rowNumber][colNumber]!='*') throw "cell already occupied";
          else{
              arrayboard[rowNumber][colNumber]=char;
          }   
        }
        catch(err){
            console.log('the error message is-  ');
            console.log(err)
        }  
    },
checkWin (arrayBoard) {
    if (arrayBoard[0][0] == arrayBoard[0][1] && arrayBoard[0][1] == arrayBoard[0][2] && arrayBoard[0][0] != '*') return true;
    if (arrayBoard[0][0] == arrayBoard[1][1] && arrayBoard[1][1] == arrayBoard[2][2] && arrayBoard[0][0] != '*') return true;
    if (arrayBoard[0][0] == arrayBoard[1][0] && arrayBoard[1][0] == arrayBoard[2][0] && arrayBoard[0][0] != '*') return true;
    if (arrayBoard[0][1] == arrayBoard[1][1] && arrayBoard[1][1] == arrayBoard[2][1] && arrayBoard[0][1] != '*') return true;
    if (arrayBoard[0][2] == arrayBoard[1][2] && arrayBoard[1][2] == arrayBoard[2][2] && arrayBoard[0][2] != '*') return true;
    if (arrayBoard[1][0] == arrayBoard[1][1] && arrayBoard[1][1] == arrayBoard[1][2] && arrayBoard[1][0] != '*') return true;
    if (arrayBoard[2][0] == arrayBoard[2][1] && arrayBoard[2][1] == arrayBoard[2][2] && arrayBoard[2][0] != '*') return true;
    if (arrayBoard[0][2] == arrayBoard[1][1] && arrayBoard[1][1] == arrayBoard[2][0] && arrayBoard[0][2] != '*') return true;
    return false;
},
boardFull(arrayBoard){
if (this.checkWin(arrayBoard))return false;
for (i=0;i<arrayBoard.length;i++){
    for (j=0;j<arrayBoard[i].length;j++){
        if (arrayBoard[i][j]=='*')return false;
    }
}
return true;
},
drawBoard (arrayBoard){
    console.log(arrayBoard[0]);
    console.log(arrayBoard[1]);
    console.log(arrayBoard[2]);
}

}