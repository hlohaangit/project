module.exports={
    isAnagram(firstString, secondString){
        if(firstString.length!=secondString.length)return false;

        var firstStringArray = firstString.toLowerCase().split('');
    var secondStringArray = secondString.toLowerCase().split('');

    var countArrayForFirstString = new Array(128);
    var countArrayForSecondString = new Array(128);

    countArrayForFirstString.fill(0);
    countArrayForSecondString.fill(0);

    firstStringArray.forEach(element => {
        countArrayForFirstString[element.charCodeAt(0)]++;
    });

    secondStringArray.forEach(element => {
        countArrayForSecondString[element.charCodeAt(0)]++;
    });

    for(let iterator = 0; iterator < 128; ++iterator){
        if(countArrayForFirstString[iterator] != countArrayForSecondString[iterator])return false;
    }
    return true;
    
    }
}