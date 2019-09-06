const linkedList = require("../stockAccount/linkedList")

class stack{
    constructor(){
        this.top = null;
    }

    /**
     * @description : Push the data to top of stack
     * @param {data} : data which needs to be pushed to stack
     */
    push(data){
        if(this.top == null){
            this.top = new linkedList();
        }
        this.top.add(data);
    }

    /**
     * @description : pop the data from stack
     */
    pop(){
        if(this.top.size() == 1){
            var temp = this.top.popFromLast();
            this.top = null;
            return temp;
        }else return this.top.popFromLast();
    }

    /**
     * @description : returns true if stack is empty
     */
    isEmpty(){
        return this.top == null;
    }

    /**
     * @description : Prints the Stack
     */
    print(){
        if(this.top != null)this.top.print();
    }

    /**
     * @description: Print The Contents of Stack to file.json
     * @param {filepath} : Output file Location
     */
    printToFile(filepath){
        this.top.printToFile(filepath);
    }
}

module.exports = stack