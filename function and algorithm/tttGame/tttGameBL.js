module.exports={
    createBoard(l1,l2,l3){
        console.log(l1);
        console.log(l2);
        console.log(l3);
        
    },
    makeMove(l1,l2,l3,px,py){
        if (cx==1){
            if (cy==1)l1.replaceAt(1,"X");
            else if (cy==2)l1.replaceAt(2,"X");
            else if (cy==3)l1.replaceAt(3,"X");            
        }
    }

}