
function deQueue(){
    this.string=new Array();
    
    this.popback=function(){
        return this.string.pop();
    }
    
    this.pushback=function(item){
        return this.string.push(item);
    }
    
    this.popfront=function(){
        return this.string.shift();
    }
    
    this.pushfront=function(item){
        return this.string.unshift(item);
    }
    
    this.printQueue=function(){
        var str='';
        for(var i=0;i<this.string.length;i++){
            str+=this.string[i]+" ";
        }
        return str;
    }
    
    this.size=function(){
        return this.string.length;
    }
}

module.exports={
    Palindrome(str){
        
        var deque=new deQueue();
        var array=[];
        array=str.split('');
        for(var i=0;i<array.length;i++){
            deque.pushback(array[i]);
        }
        console.log(deque.printQueue());
        var flag=true;
        
        if(deque.size()%2==0){
            
            while(deque.size()>0){
                var a=deque.popfront();
                var b=deque.popback();
                if(a!=b){
                    flag=false;
                }
            }
        }
        else{
            
            while(deque.size()>1){
                var a=deque.popfront();
                var b=deque.popback();
                if(a!=b){
                    flag=false;
                }
            }
        }
        
        if(flag==true){
            console.log("Palindrome");
        }
        else{
            console.log("Not a Palindrome");
        }
    }
}