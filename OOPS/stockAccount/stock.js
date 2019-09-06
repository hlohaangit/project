class error extends Error {
    constructor(message) {
        super(message)
    }
}

class stock {
    constructor(companyName, numberOfShares, priceOfShare) {
        this.companyName = companyName;
        this.numberOfShares = numberOfShares;
        this.priceOfShare = priceOfShare;
    }

    /**
     * @description : Buy Shares of a company
     * @param {amount} : Amount to buy shares
     * @param {buyer} : Person buying the shares
     */
    buyShares(amount, buyer) {
        try {
            if (amount < 0) throw new error("Amount cannot be negative");
            if (amount < this.priceOfShare) throw new error("Amount cannot be less than price of one share");
            if (isNaN(amount)) throw new error("Amount should be a number ");

            var shareAmount = parseInt(amount / this.priceOfShare);
            var remainingAmount = amount % this.priceOfShare;

            if (shareAmount > this.numberOfShares) {
                shareAmount = this.numberOfShares;
                remainingAmount = amount - this.stockValue();
                this.numberOfShares = 0;
            } else {
                this.numberOfShares -= shareAmount;
            }

            console.log(shareAmount + " shares of " + this.companyName + " sold to " + buyer);
            console.log("Remaining amount was " + remainingAmount);

            var resultArray = [];
            resultArray.push(shareAmount);
            resultArray.push(remainingAmount);

            return resultArray;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    /**
     * @description : Find how many shares of company are available for sale
     */
    sharesAvailable() {
        return this.numberOfShares;
    }

    /**
     * @description : Returns the net value of Company
     */
    stockValue() {
        return this.numberOfShares * this.priceOfShare;
    }

    /**
     * @description : return Name of Company
     */
    getName() {
        return this.companyName;
    }

    /**
     * @description : Print details of Stock
     */
    printDetails() {
        console.log("Company Name: " + this.companyName);
        console.log("Share in Company: " + this.numberOfShares);
        console.log("Price of Share: " + this.priceOfShare);
        console.log(" ");
    }
}

module.exports = stock;