class validationError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}


class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class sortedLinkedList {
    constructor() {
        this.head = null;
    }

   
    add(data) {
        if (this.search(data)) return;
        if (this.head == null) {
            this.head = new node(data);
        } else if (this.size() == 1) {
            var temp = new node(data);

            if (this.head.data == data) return;

            if (this.head.data > data) {
                temp.next = this.head;
                this.head = temp;
            } else {
                this.head.next = temp;
            }
        } else {
            var position = 1;
            var iterator = this.head;
            while (iterator != null && iterator.data < data) {
                position++;
                iterator = iterator.next;
            }
            this.insert(position, data);
        }
    }

   
    remove(data) {
        try{
            if (this.head == null) {
                throw error;
            } else if (this.head.data == data) {
                var temp = this.head.next;
                this.head = temp;
            } else {
                var iterator = this.head.next;
                var behindIterator = this.head;
                while (iterator != null) {
                    if (iterator.data == data) {
                        var temp = iterator.next;
                        behindIterator.next = temp;
                        console.log("Removed node " + data);
                        return;
                    }
                    iterator = iterator.next;
                    behindIterator = behindIterator.next;
                }
                console.log("This node is already not present");
            }
        }catch(error){
            console.log("No data in Linked List");
        }
    }

    
    search(data) {
        if (this.head == null) {
            return false;
        } else if (this.head.data == data) {
            return true;
        } else {
            var iterator = this.head;
            while (iterator != null) {
                if (iterator.data == data) return true;
                iterator = iterator.next;
            }
            return false;
        }
    }

    isEmpty() {
        return this.head == null ? true : false;
    }


    size() {
        if (this.head == null) return 0;
        else {
            var counter = 0;
            var temp = this.head;
            while (temp != null) {
                counter++;
                temp = temp.next;
            }
            return counter;
        }
    }

    index(data) {
        if (this.head == null) return -1;
        else {
            var counter = 1;
            var temp = this.head;
            while (temp != null) {
                if (temp.data == data) return counter;
                counter++;
                temp = temp.next;
            }
            return -1;
        }
    }

    insert(position, data) {
        try {
            if (position < 1) throw new validationError("poistion cannot be less than one");
            if (this.search(data)) throw new validationError("element already present ");
            if (this.size() < (position - 1)) {
                console.log("Your Position is greater than size of list. Appending at end of linked list");
                this.append(data);
            } else if (position == 1) {
                var temp = this.head;
                this.head = new node(data);
                this.head.next = temp;
            } else {
                var newNode = new node(data);

                var iterator = this.head;
                var temp = null;

                while (position-- > 1) {
                    temp = iterator;
                    iterator = iterator.next;
                }

                temp.next = newNode;
                newNode.next = iterator;
            }
        } catch (validationError) {
            console.log(validationError.message);
        }
    }
    
    popFromLast() {
        if (this.head == null) {
            console.log("Empty linked list");
            return null;
        } else if (this.size() == 1) {
            var value = this.head.data;
            this.head = null;
            return value;
        }
        else {
            var iterator = this.head;
            var behindIterator = null;
            while (iterator.next != null) {
                behindIterator = iterator;
                iterator = iterator.next;
            }
            behindIterator.next = null;
            return iterator.data;
        }
    }
    
    pop(position) {
        try {
            if (position > this.size() || position < 1) throw new validationError("Invalid Position Number");
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
        } catch (validationError) {
            console.log(validationError.message);
            return null;
        }
    }
    
    print() {
        var iterator = this.head;
        while (iterator != null) {
            process.stdout.write(iterator.data + " ");
            iterator = iterator.next;
        }
        console.log();
    }
}

module.exports = sortedLinkedList;