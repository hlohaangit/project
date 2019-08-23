var value=(stake, goal, trails) =>{
    var inHand=stake
    var wins=0;
    var n=0
    

    while(inHand<goal && inHand>0 && n<trails){
        n++
        if (Math.round(Math.random())==1){
            console.log("you won match "+n);
            inHand=inHand+2;
            wins++;
        }
        else{
            console.log("you lost match "+n);
            inHand=inHand-1 
        }
    }
    var pwin = wins/n *100;
    var ploss = 100-pwin
    return "no of wins are "+wins+" and percentage of win and loss is" +pwin+ "% & "+ploss+"%"
}
module.exports={value}