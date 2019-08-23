var BL=require('./couponBL');
var rl= require('readline-sync');
function couponNum(){
    console.log("How many coupon number you wants");
    var l1 = rl.question();
    if (l1>0&&l1<10000)
    BL.coupon(l1);
    else
    console.log('enter valid input');
 

}
couponNum();
