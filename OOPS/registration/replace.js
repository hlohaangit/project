const pattern = require('./pattern');

class replaceObjects{
    replaceWithRegex(inputString, userName, fullName, mobileNumber){
        try {
            if (mobileNumber< parseInt(6*Math.pow(10,9)) || mobileNumber >= parseInt(Math.pow(10,10))) throw "invalid mobile number";
            var patternObject=new pattern();

            var replacedName= patternObject.replaceName(inputString,userName);
            var replacedFullName=patternObject.replaceFullName(replacedName,fullName);
            var replacedMobileNumber=patternObject.replaceMobileNumber(replacedFullName,mobileNumber);
            var replacedDate=patternObject.replaceDate(replacedMobileNumber);

            return replacedDate;

        }
        catch(err){
            console.log(err);
            return null;
        }
    }



    replace(inputString,userName,fullName,mobileNumber){
        var outputString=this.replaceWithRegex(inputString,userName,fullName,parseInt(mobileNumber));
        return outputString == null? null:outputString;
    }
}

module.exports=replaceObjects;
