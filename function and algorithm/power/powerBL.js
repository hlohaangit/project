var x=2;
var value= (n) => {
    if (n>1&&n<32){
        for (i=0;i<n;i++){
         x=x*2;
         console.log(x)
        }
        return;
    }
    else{
        return "enter value greater than 1 and less than 32";
    }
}
module.exports={value}