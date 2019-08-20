var value=(year) =>{
    if (year.length!==4){
        return "incorrect input"

    }
    if (year%400==0){
        return "it is a leap year"
    }
    else if(year%100==0){
        return 'it is NOT a leap year'
    }
    else if(year%4==0){
        return "it is a leap year"
    }
    
    else{
        return 'it is NOT a leap year'
    }
}
module.exports={value};