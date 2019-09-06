const linkedList = require("../stockAccount/linkedList")

class queue{
    constructor(){
        this.head = null;
    }

    /**
     * @overview : add data to queue
     * @param {data} data which needs to enqueued in queue
     */
    enqueue(data){
        if(this.head == null){
            this.head = new linkedList();
        }
        this.head.add(data);
    }
    
    /**
     * @overview : dequeue data i.e. remove data from front of queue
     */
    dequeue(){
        try{
            if(this.head == null || this.head.size() == 0)throw error;
            else return this.head.pop(1);
        }catch(error){
            console.log("Empty Queue");
        }
    }
    
    /**
     * @overview : returns the number of elements in queue
     */
    size(){
        return this.head.size();
    }

    /**
     * @description : prints the queue
     */
    print(){
        if(this.head != null)this.head.print();
    }

    /**
     * @description : Print the Queue to file
     */
    printToFile(filepath){
        this.head.printToFile(filepath);
    }
}

module.exports = queue;