const fileReader = require("fs");

var fileContent = fileReader.readFileSync('company.json','utf-8')
var jsonObject = JSON.parse(fileContent);


var keys = Object.keys(jsonObject);

keys.forEach(element => {
    console.log(jsonObject[element]['name'])
    console.log(jsonObject[element]['number of shares'])
});