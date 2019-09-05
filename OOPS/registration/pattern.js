class pattern{

    replaceName(inputString, userName){
        return inputString.replace (/(?:^|\W)<name>(?:$|\W)/, userName);
    }

    replaceFullName(inputString,fullName){
        return inputString.replace(/(?:^|\W)<full name>(?:$|\W)/, fullName);
    }

    replaceMobileNumber(inputString,mobileNumber){
        return inputString.replace(/(?:^|\W)xxxxxxxxxx(?:$|\W)/, mobileNumber);
    }

    replaceDate(inputString){
        var today = new Date();
        var todayDate = today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear();
        var replaceDate = inputString.replace(/[0-9]{2}[-|\/]{1}[0-9]{2}[-|\/]{1}[0-9]{4}/,todayDate);
        return replaceDate;
    }
}


module.exports=pattern;