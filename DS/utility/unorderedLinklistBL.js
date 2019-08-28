
class Node {
    constructor(element) {
        this.element=element;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    add(element){
        var node= new Node (element);
        var current;
        if (this.head==null){
            this.head=node;
        }
        else {
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size+=1;
    }

    insertAt(element, index){
        if(index<0 && index>this.size){
            return 0
        }
        else{
            var node=new Node(element);
            var current, previous;
            current=this.head;

            if (index==0){
                node.next=head;
                this.head=node;
            }
            else {
                current = this.head;
                var i=0;
                while(i<index){
                    i++;
                    previous=current;
                    current=current.next;
                }



                node.next=curent;
                previous.next=node;
            }
            this.size++;
        }
    }




    removeFrom(index){

        if (index<0 && index >this.size){
            return 0;
        }
        else{
            var current, previous;
            current=this.head;
            previous=current;

            if(index===0){
                this.head=current.next;
            }
            else{
                while(i<index){
                    i++;
                    previous=current;
                    current=current.next;
                }

                previous.next = current.next;
            }
            this.size--;
            return current.element;
        }


    }

    removeElement(element){
        var current = this.head;
        var previous= null;
        while(current!=null){
            if (current.element === element){
                if (previous == null){
                    this.head = current.next;
                }
                else {
                    previous.next=current.next;
                }
                this.size--;
                return current.element;
            }

            previous=current;
            current=current.next;
        }
        return 0;
    }

    indexOf(element){
        var count=0;
        var current = this.head;
        while(current!=null){
            if (current.element === element){
                return count
            }
            count++;
            current=current.next;
        }

        return 0
    }



    isEmpty(){
        return this.size==0;
    }

    sizeOflist(){
        return this.size;
    }

    printList(){
        var current = this.head;
        var string="";
        while (current){
            string += current.element+" ";
            current= current.next;
        }

        console.log=string;
        return string;
    }
}


fileSystem=require('fs');


module.exports={
    unorderedList(array, element){

        var list= new linkedList();
        
        
        for (i=0;i<array.length;i++){
            list.add(array[i]);
        }

        if (list.indexOf(element)==0){
            list.add(element);
            console.log("added successfully......")

        }

        else{
            list.removeElement(element);
            console.log('removes successfully....');
        }

        var dataWrite=list.printList();
        fileSystem.writeFileSync('/home/admin1/Desktop/projects/DS/file.txt',dataWrite);

    }
}
