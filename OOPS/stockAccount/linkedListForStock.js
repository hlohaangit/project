class node{
    constructor(data){
        this.data=data;
        this.next=null;

    }
}


class linkedList {
    constructor(){
        this.head=null;
    }



    add (data){
        if (this.head=null){
            this.head=new node (data);
        }
        else{
            var i = this.head;
            while(i.next!=null){
                i=i.next;
            }
            i.next=new node (data);
        }
    }

    remove (data){
        if(this.head == null){
            console.log('no data in linked list');

        }
        else if (this.head.data.getName()=== data.getName()){
            var temp= this.head.next;
            this.head=temp;
            
        }
        else {
            var i= this.head;
            var behindi= null;
            while (i!=null){
                if (i.data.getName()=== data.getName()){
                    var temp= i.next;
                    behindi.next=temp;
                    console.log("removed  "+data.getName());
                    return;
                }
                behindi=i;
                i=i.next;
            }

            console.log("this node is not there");
        }
    }

    search(data){
        if (this.head=null)return 0;
        else if(this.head.data === data){return 1;}
        else {
            var counter=1;
            var = this.head;
            while(i!=null){
                if (i.data.getName()===data.getName()) return counter;

                i=i.next;
                counter++;
            }
            return false;
        }
    }

    isEmpty(){
        return this.head == null? true : false;
    }

    append(data){
        if (this.head == null){
            this.head= new node (data);
        }
        else {
            if (this.search(data))return;
            var temp = this.head;
            while(temp.next!=null){
                temp=temp.next;

            }
            temp.next= new node (data);
        }
    }

    pop(position) {
        try {
            if (position > this.size() || position < 1) throw "Invalid Position Number";
            if (position == 1) {
                var value = this.head.data;
                this.head = this.head.next;
                return value;
            }
            var temp = null;
            var iterator = this.head;
            while (position-- > 1) {
                temp = iterator;
                iterator = iterator.next;
            }
            var value = iterator.data;
            temp.next = iterator.next;
            return value;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    print() {
        var iterator = this.head;
        while (iterator != null) {
            iterator.data.printDetails();
            
            iterator = iterator.next;
        }
    }


    searchAndModify(companyName, userName, amount) {
        if (this.head == null) {
            console.log("Linked List Empty");
        } else {
            var iterator = this.head;
            while (iterator != null) {
                if (iterator.data.getName() === companyName) {
                    return iterator.data.buyShares(amount,userName);
                }
                iterator = iterator.next;
            }
            console.log("No compnay with this name ");
            return null;
        }
    }
}

module.exports= linkedLisk;