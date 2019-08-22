const input = require('readline-sync');

// @purpose: takes no of elemets in as input and coverts the string to number array 
// @author: Harshit Lohaan
// @since: 08/20/19
// @overview: inputs no of elements displays error if insufficient values and converts to number array discards if too many input
var inputArray = (numberOfInput) => {
    var tempArr = input.question("Enter the values ").split(" ");
    var array = []
    tempArr.forEach(element => {
        array.push(parseInt(element))
    });
    return (array.length == numberOfInput)?array:"Insufficient Values";
}

    // @purpose: find triplets satisfying the condition.
    // @author: Harshit Lohaan
    // @since: 08/20/19
    // @overview: inputs and array and finds the triplets and displays is none found 

var distinctTripletCount = (array) => {
    array.sort();
    let distinctTripletArray = [];//an array to store distinct triplets
    for(let firstIterator = 0; firstIterator < array.length; ++firstIterator){
        for(let secondIterator = firstIterator+1; secondIterator < array.length; ++secondIterator){
            for(let thirdIterator = secondIterator+1; thirdIterator < array.length; ++thirdIterator){
                if(array[firstIterator]+array[secondIterator]+array[thirdIterator] == 0){// triplet found
                    let varTemp = new Array(3);
                    varTemp[0]=array[firstIterator];
                    varTemp[1]=array[secondIterator];
                    varTemp[2]=array[thirdIterator];
                    if(!(distinctTripletArray.includes(varTemp)))distinctTripletArray.push(varTemp);// storing distinct triplet
                }
            }
        }
    }
    if(distinctTripletArray.length != 0){
        console.log("No Of Distinct Triplets: "+distinctTripletArray.length);
        distinctTripletArray.forEach(element => {
            console.log(element);
        });
    }else console.log("No Triplet exists whose sum is zero");
}

module.exports = {inputArray,distinctTripletCount};