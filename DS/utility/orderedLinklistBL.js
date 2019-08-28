function Node(element) { 
    this.element = element; 
    this.next = null; 
} 

function linkedList(){ 
   


    this.head = new Node("head"); 
    this.find = find; 
    this.insert = insert; 
    this.remove = remove; 
    this.display = display; 
    this.findPrevious = findPrevious; 
    this.remove = remove;
    this.search=search;
    this.size=size;
    this.getValue=getValue;
    this.searchNumber=searchNumber;
    this.insertPosition=insertPosition;
} 

function find(item) { 
    
    var currentNode = this.head; 
    while (currentNode.element != item ) { 
        currentNode = currentNode.next; 
    } 
    return currentNode;
} 


function insert(newElement, item) {

    var newNode = new Node(newElement); 
    var current = this.find(item); 
    newNode.next = current.next; 
    current.next = newNode; 
}


function display() { 
    var currentNode = this.head; 
    while (!(currentNode.next == null)) {
        console.log(currentNode.next.element); 
        currentNode = currentNode.next; 
    } 
} 


function findPrevious(item) { 

    var currentNode = this.head; 
    while (!(currentNode.next == null) && (currentNode.next.element != item)) { 
        currentNode = currentNode.next; 
    } 
    return currentNode; 
} 


function remove(item) { 
    var previousNode = this.findPrevious(item); 
    if(!(previousNode.next == null)) { 
        previousNode.next = previousNode.next.next; 
    } 
}


function search(values){ 
    var temp=this.head
    while(temp.element!=values && temp.next !=null){
        temp=temp.next;
    }
        console.log('element is\n'+temp.element)
    if(temp.element===values){
        return true; 
    }
    else {
        return false;
    }
}



function size(){
    var temp=this.head;
    var count=0;
    while(temp.next!=null){
        temp=temp.next
        count++;
    }
    return count;
}


function getValue(){
    var temp=this.head;
    var a='';
    while (!(temp.next == null)){        
        temp=temp.next;
        a=a+temp.element;
        a=a+' '     
    }
return a;
}



function searchNumber(values){
    var temp=this.head
    while((temp.element)!== values && temp.next !== null){
        temp=temp.next;   
    }
    if((temp.element)==values){
        return true;
    }
    else {
        return false;
    }
}


function insertPosition(values){ 
    var newNode = new Node(values)  
    var current=this.head.next;
    var temp=this.head;
    while(current!=null&&(current.element)<newNode.element){  
        temp=current;
        current=current.next;
    }
    newNode.next=current;
    temp.next=newNode;
}



module.exports={
    orderedList: function (data,num) {
        var fileSystem = require('fs'); 
        var array = []
        for (var i = 0; i < data.length; i++) {
            var a = data[i]
            array.push(a);
        }
        array = array.sort(function (a, b) {
            return a - b;
        });

        var list = new linkedList();
        list.insert(array[0],'head')
        for (var i = 1; i < array.length; i++) {
            list.insert(array[i], array[i - 1])
        }

        list.display();
        var bool = list.searchNumber(num)

        if (bool) {
            console.log('deleting....');
            list.remove(num);
            var a = list.getValue();
            console.log(a);
            fileSystem.writeFileSync('file1.txt', a.trim())
            console.log('deleted sucessfully..')
            process.exit();
        }

        else {
            console.log('adding....');
            list.insertPosition(num);
            var a = list.getValue();
            console.log(a)
            fileSystem.writeFileSync('file1.txt', a.trim());
            console.log('added sucessfully');
            process.exit();
        }
    }
}