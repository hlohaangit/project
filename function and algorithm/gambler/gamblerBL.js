var value=(stake, goal, trails) =>{
    var inHand=stake
    var wins=0;
    var n=0

    while(inHand<goal && inHand>0 && n<trails){
        n++
        if (Math.random<0.5){
            console.log("you won match "+match);
            inHand=inHand+2;
            wins++;
        }
        else{
            console.log("you lost match "+match);
            inHand=inHand-1 
        }
    }
    var pwin = wins/n *100;
    var ploss = 100-pwin
    return "no of wins are "+wins+" and percentale of win and loss is" +pwin+ "% & "+ploss+"%"
}
module.exports={value}