class stock{
    constructor(name, numberOfShares,priceOfShare){
        this.name=name;
        this.numberOfShares=numberOfShares;
        this.priceOfShare=priceOfShare;
    }

    calculateTotalValue(){
        return this.numberOfShares*this.priceOfShare;
    }
}

module.exports=stock;