const input = require("readline-sync")
const fileReaderWriter = require("fs")
const stockAccount = require("../stockAccount/stockAccount")
const stack = require("../stockAccount/stackUsingLinkedList")
const queue = require("../stockAccount/queueUsingLinkedList")

/**
 * @description : Stock Market
 */
var menu = () => {
    var stockMarket = new stockAccount();
    stockMarket.addData("company.json");

    var buyerStock = new stack();
    var transaction = new queue();

    outer: while (true) {
        console.log("1. Show All Company whose shares are for sale ");
        console.log("2. Buy Shares ");
        console.log("3. Exit");
        var choice = input.questionInt();
        switch (choice) {
            default:
                console.log("Invalid Choice");
                break;
            case 1:
                stockMarket.print();
                break;
            case 2:
                var buyer = input.question("Enter Name of Buyer ");
                var companyName = input.question("Enter company Name: ");
                var amount = input.questionInt("Enter amount to buy share: ");

                var purchaseDetails = stockMarket.buyShares(companyName, buyer, amount);
                if (purchaseDetails != null) {
                    buyerStock.push(buyer + " bought " + purchaseDetails[0] + " of " + companyName);
                    transaction.enqueue("Sold " + purchaseDetails[0] + " shares of " + companyName + " at time " + getTime());
                }
                break;
            case 3:
                stockMarket.print();
                buyerStock.printToFile("buyer.txt");
                transaction.printToFile("transanctions.txt");
                break outer;
        }
    }
}

/**
 * @description : Get Current Date and Time
 */
var getTime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}

module.exports = {
    menu
}