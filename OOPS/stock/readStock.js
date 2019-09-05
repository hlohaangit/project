const input = require ("readline-sync");
const stocks= require("./readStockBL");

var numberOfInput=input.questionInt('enter the no of companies');

var arrayOfStocks = stocks.readStock(numberOfInput);
stocks.companyValue(arrayOfStocks);