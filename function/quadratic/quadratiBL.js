module.exports={
    calculateRoots (a,b,c){
        var delta = b*b - 4 * a * c;
        if (delta <0) return "complex roots"

        else if( delta ==0 ) return (-b/(2*a));

        var arr=[];
        var x1= (-b + Math.sqrt(delta))/(2*a);
        var x2= (-b - Math.sqrt(delta))/(2*a);

        arr.push(x1);
        arr.push(x2);
        return arr;
    },
    
    printRoots ( a,b,c){
        var roots = this.calculateRoots(a,b,c);
        console.log(roots);
    }

}