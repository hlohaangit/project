var d=require('../utility');
module.exports = {
    

    coupon(l){
        var arr=[l];
        var g=0;
        var count=0;
        var flag= true;
        while (l>0){
            flag= true;
            var n = Math.floor((Math.random()*10000)+1000);
            if (n>9999){
                n= Math.floor(n/10);
            }
            count++;
            for (i=0;i<(g+1) && flag; i++){
                if (arr[i]==n){
                    flag= false;

                }

            }
            if (flag){
                arr[g++]=n;
                l--;
            }
        }
        d.display2d(arr);
    }
    
}