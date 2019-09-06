const list = require("../stockAccount/linkedList")
const stock = require("../stockAccount/stock")
const fileReader = require("fs");

var fileContent = fileReader.readFileSync('company.json', 'utf-8')
var jsonObject = JSON.parse(fileContent);


var keys = Object.keys(jsonObject);
var stocks = new list();

keys.forEach(element => {
    stocks.add(new stock(jsonObject[element]['name'],
        jsonObject[element]['number of shares'],
        jsonObject[element]['share price']))
});

stocks.print();