const input = require("readline-sync")
const hashingObject = require("./hashingBL")


var userInput = input.question("Enter elements which needs to be stored seperated by spaces: ").split(" ");
var removalElement = input.questionInt("Enter element to add remove: ");

hashingObject.store(userInput,removalElement);