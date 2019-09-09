var input= require("readline-sync");
var BL=require("./deckOfCardsBL");

var key=0

while(key==3){

    console.log("enter 1 to shuffle")
    console.log("enter 2 to display")
    console.log("enter 3 to exit")
    key=input.question(" ")
    Bl.deckOfCards(key)
}