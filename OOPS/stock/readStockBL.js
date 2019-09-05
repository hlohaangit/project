const input=require('readline-sync');
const stock=require('./stock');

var readStock = (number) => {
    var arrayOfStocks=new Array();
    try{
        if (number<0) throw error;
        while (number-- > 0){
            var string=input.question("");
            var characters= string.split(" ");

            var companyName= characters[0];
            try{
                if (parseInt(characters[1]).toString().length != characters[1].length ||
                parseInt(characters[2]).toString().length != characters[2].length ||
                parseInt(characters[2]) < 0 || parseInt(characters[1]) < 0) throw err;

                var numberOfShares= characters [1];
                var sharePrice=characters[2];

                arrayOfStocks.push(new stock(companyName, numberOfShares,sharePrice));

            }
            catch (err){
                console.log("invalid data entered");

            }
        }
    
        return arrayOfStocks;


    }
    catch(error){
        console.log('invalid no of companies');
        return null;
    }
}


var companyValue= (arrayOfStocks)  => {

    try {
        if (arrayOfStocks == null)throw error;
        console.log ("company name with their total value");
        arrayOfStocks.forEach(element => {
            console.log(element.name+ " "+ element.calculateTotalValue());
            
        });

    }
    catch (error){
        console.log("no stocks");

    }
}

module.exports = {readStock, companyValue}