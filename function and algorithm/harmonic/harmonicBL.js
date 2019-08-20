var x=0;
var value=(n) =>{
    if (n>0){
        for (i=1;i<=n;i++){
            x=x+1/i;
            console.log(x);

        }
        return "the Nth harmonic number is "+x+"."
    }
    else{
        return "enter a valid no."
    }

}
module.exports={value}