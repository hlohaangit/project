var heads=0;
var tails =0;

var value=(flip) =>{
    if (flip<1){
        return ('incorrent no of flips');

    }

    for (i=0;i<flip;i++){
        if (Math.random()<0.5){
            heads++
            console.log("it is a head");
        }
        else{
            tails++
            console.log("it is a tail");
        }
    }
var totalHeads= (heads/flip)*100;
var totalTails= 100-totalHeads;
return "the presentage of heads and tails is "+totalHeads+"% and "+totalTails+"%.";
}
module.exports={value}