const fileRW=require('fs');
const BL= require ("./cropBL");

var text = fileRW.readFileSync("crops.json");
var jsonObject=BL.jsonContents(text);


fileRW.writeFileSync("output.json",jsonObject);