class Queue{
   
    constructor(){
        this.items=[];
    }
    
    enQueue(element){
        return this.items.push(element);
    }
  
    deQueue(){
       
        if(this.isEmpty())
            return "underflow";
        return this.items.shift();
    }
    front(){
        
        if(this.isEmpty())
            return "No elements in the queue";
        return this.items[0];
    }
    
    isEmpty(){
        return this.items.length==0;
    }
  
    length(){
        return this.items.length;
    }
    printQueue(){
       
        var str="";
        for(var i=0;i<this.items.length;i++)
        str+=this.items[i]+" ";
        return str;
    }
}

module.exports={
   Banking(read,num){
       
        var queue=new Queue(); 
        var balance=0;
        for(var i=0;i<num;i++){
            queue.enQueue(i);
        }
        while(queue.length()){
            var option=read.question("Press 1 to deposit money and Press 2 to withdrawal money: ");
            
            if(option==1){
                var depositAmount=read.question("Enter the am ount to deposit: ");
                balance=(parseInt(balance)+parseInt(depositAmount));
                console.log("Total Balance is= "+balance);
            }
            
            else if(option==2){
                var withdrawAmount=read.question("Enter the amount to withdrawal: ");
                if(balance>=withdrawAmount){
                    balance=balance-withdrawAmount;
                    console.log("Total balance:"+balance);
                }
                
                else{
                    console.log("Running out of balance..");
                }
            }
            else{
                console.log("plz contact to nearby branch...");
            }
            queue.deQueue();
        }
    }
}