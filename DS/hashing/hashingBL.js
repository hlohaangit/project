const sortedLinkedList = require("../utility/sortedLinkedList");

class hashObject {
    constructor() {
        this.array = new Array(11);
        for (let iterator = 0; iterator < 11; ++iterator) {
            this.array[iterator] = new sortedLinkedList();
        }
    }
    
    add(element) {
        var remainder = element % 11;
        this.array[remainder].add(element);
    }
    
    print() {
        for (let iterator = 0; iterator < 11; ++iterator) {
            process.stdout.write(iterator + " : ");
            var temp = this.array[iterator];
            if (!temp.isEmpty()) {
                var tempIterator = temp.head;
                while (tempIterator != null) {
                    process.stdout.write(tempIterator.data + " ");
                    tempIterator = tempIterator.next;
                }
            }
            console.log();
        }
    }

   
    search(element) {
        var index = parseInt(element % 11);
        if(this.array[index].search(element))this.array[index].remove(element);
        else this.array[index].add(element);
    }
}


var store = (userInput,searchElement) => {

    var arrayObject = new hashObject();
    var numbers = [];
    userInput.forEach(element => {
        if (!isNaN(parseInt(element))) numbers.push(parseInt(element));
    });

    numbers.forEach(element => {
        arrayObject.add(element);
    });

    console.log("Before Removal ");
    arrayObject.print();
    arrayObject.search(searchElement)
    console.log("After removal");
    arrayObject.print();
}


module.exports = { store };