const fileReader = require("fs");
const list = require("../stockAccount/linkedListForStockMarket")
const stock = require("../stockAccount/stock")

class stockAccount {
    constructor() {
        this.list = null;
    }

    /**
     * @description : Add potfolio of companies
     * @param {filepath} : path of file which contains details of all companies
     */
    addData(filePath) {
        this.list = new list();
        var contents = fileReader.readFileSync(filePath, 'utf-8')
        var jsonObject = JSON.parse(contents);

        var keys = Object.keys(jsonObject);
        keys.forEach(element => {
            this.list.add(new stock(jsonObject[element]["name"],
                jsonObject[element]["number of shares"],
                jsonObject[element]["share price"]));
        });
    }

    /**
     * @description : Prints all the stocks
     */
    print() {
        this.list.print();
    }

    /**
     * @description : Buy Shares of Company
     * @param {companyName} : Name of Company whose shares are bought
     * @param {userName} : Name of User who wants to buy the shares
     * @param {amount} : Amount to buy shares
     */
    buyShares(companyName,userName,amount) {
        return this.list.searchAndModify(companyName,userName,parseInt(amount));
    }
}

module.exports = stockAccount;