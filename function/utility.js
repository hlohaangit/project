var readline = require('readline-sync');

module.exports={
  
  
    // @purpose: to display an array with each element in next SVGPathSegLinetoAbs
    // @author: Harshit Lohaan
    // @since: 08/20/19
    // @overview: inputs an array and displays it in the console

    display2d(array){
        for (i=0;i<array.length;i++)
        console.log(array[i]);
    },


    // @purpose: to input a 2d array
    // @author: Harshit Lohaan
    // @since: 08/20/19
    // @overview: inputs a 2d array from the user 

    input2dArray(rows, cols){
        var arr=[];
        console.log("enter the elements");
        for (i=0;i<rows;i++){
            arr.push([]);
            for (j=0;j<cols;j++){
                arr[i][j]=readline.question(" ");
            }
        }
        return arr;
    },

    // @purpose: generate a random no in the given range
    // @author: Harshit Lohaan
    // @since: 08/20/19
    // @overview: retrn a Number betweena range of specified no

    getRandomNo(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }


    

}