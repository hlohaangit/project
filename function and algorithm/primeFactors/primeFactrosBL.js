var value=(n) =>{
    while (n % 2 == 0)  
    {  
        console.log('2 ')  
        n = n/2;  
    }  
 
    for (i = 3; i <= Math.sqrt(n); i = i + 2)  
    {  
        
        while (n % i == 0)  
        {  
            console.log(i+' ')  
            n = n/i;  
        }  
    }  
  
    if (n > 2)  {
        console.log(n+" ")  
    }
return;

}
module.exports={value}