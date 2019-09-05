const crop = require("./crop");

var jsonContents =(string) => {
    var jsonObject = JSON.parse(string);
    var keys = Object.keys(jsonObject);

    var data =[];
    var jsonString = "["
    keys.forEach(element => {
        var cropName= jsonObject[element].name;
        var cropWeight = jsonObject[element].weight;
        var costPerKg= jsonObject[element].price;

        var myCrop = new crop(cropName, cropWeight, costPerKg);
        data.push(myCrop);

        var netCost= myCrop.netCost();

        jsonString += "{"+"'name'"+": "+'"'+cropName+'"'+
                      ","+'"weight":'+'"'+cropWeight+'"'+
                       ","+'"Cost Per Kg":"'+costPerKg+'"'+
                       ","+'"Net Cost":"'+netCost+'"'
                      +"},";
    });

    var finalString=
    jsonString.substring(0,jsonString.length-1)
    finalString=+"]"

    printDetailsOfCrops(data);
    return finalString;
}

var printDetailsOfCrops=(crops)=>{
    try {
        if (crops==null || crops.length==0) throw "no crops"

        crops.forEach(element => {
            element.printDetails();
            console.log();
        });

    }
    catch (err){
        console.log(err);
    }

}

module.exports= {jsonContents};