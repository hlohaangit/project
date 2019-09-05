
class crop{
    constructor(name, weight, pricePerKG){
        this._name=name;
        this._weight=weight;
        this._price=pricePerKG;
    }

    getName(){
        return this._name;
    }

    set name (value){
        try{
            if (!isNaN(value)) throw "invalid name for crop";
            this._name=value;
        }
        catch (err){
            console.log (err);
        }
    }

    getWeight(){
        return this._weight;
    }

    set weight(value){
        try{
            if (isNaN(value)) throw "invalid weight entered";
            if (value<=0 ) throw "weight cannot be negative";

            this._weight=value;
        }
        catch (err){
            console.log(err);
        }
    }

    getPrice (){
        return this._price;
    }

    netCost(){
        return this.getPrice()*this.getWeight();
    }

    printDetails(){
        console.log("Crop name:"+ this.getName());
        console.log("weight of crop = "+this.getWeight());
        console.log("price per kg= "+this.getPrice());
        console.log("net cost = "+this.netCost());
    }


}

module.exports=crop;
