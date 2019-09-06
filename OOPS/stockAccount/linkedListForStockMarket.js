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

class linkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @description : add a new node to start of Linked list
     * @param {data} value of data in new node
     */
    add(data) {
        if (this.head == null) {
            this.head = new node(data);
        } else {
            var iterator = this.head;
            while (iterator.next != null) {
                iterator = iterator.next;
            }
            iterator.next = new node(data);
        }
    }

    /**
     * @description : remove node from linked list
     * @param {data} node having value data needs to be removed from Linked List
     */
    remove(data) {
        if (this.head == null) {
            console.log("No data in Linked List");
        } else if (this.head.data.getName() === data.getName()) {
            var temp = this.head.next;
            this.head = temp;
        } else {
            var iterator = this.head;
            var behindIterator = null;
            while (iterator != null) {
                if (iterator.data.getName() === data.getName()) {
                    var temp = iterator.next;
                    behindIterator.next = temp;
                    console.log("Removed Company " + data.getName());
                    return;
                }
                behindIterator = iterator;
                iterator = iterator.next;
            }
            console.log("This node is already not present");
        }
    }

    /**
     * @description : search whether a value exists in linked list or not. Returns true is present else false
     * @param {data} search whether node with value data is present in linked list or not
     */
    search(data) {
        if (this.head == null) {
            return 0;
        } else if (this.head.data === data) {
            return 1;
        } else {
            var counter = 1;
            var iterator = this.head;
            while (iterator != null) {
                if (iterator.data.getName() === data.getName()) return counter;
                iterator = iterator.next;
                counter++;
            }
            return false;
        }
    }

    /**
     * @description: find whether linked list in empty or not
     */
    isEmpty() {
        return this.head == null ? true : false;
    }

    /**
     * @description: returns the size of linked list i.e. the number of elements in linked list
     */
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

    /**
     * @description : add a new node to end of linked list
     * @param {data} add a new node with value data to linked list
     */
    append(data) {
        if (this.head == null) {
            this.head = new node(data);
        } else {
            if (this.search(data)) return;
            var temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = new node(data);
        }
    }

    /**
     * @description : returns index of node in linked list having value equal to data
     * @param {data} node with value data which needs to searched in linked list
     */
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

    /**
     * @description : insert a node at a give position in linked list
     * @param {position} : the position where node has to be entered
     * @param {data} : data of new node which is to be added to linked list
     */
    insert(position, data) {
        try {
            if (position < 1) throw new validationError("poistion cannot be less than one");
            if (this.search(data)) throw new validationError("element already present ");
            if (this.size() < (position - 1)) {
                console.log("Your Position is greater than size of list. Appending at end of linked list");
                this.append(data);
            } else if (position == 1) {
                this.add(data);
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

    /**
     * @description : remove last element from linked list
     */
    popFromLast() {
        if (this.head == null) {
            console.log("Empty linked list");
            return null;
        } else if (this.size() == 1) {
            var value = this.head.data;
            this.head = null;
            return value;
        } else {
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

    /**
     * 
     * @param {position} : remove a node from particular position
     */
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

    /**
     * @description : Prints the linked list on console
     */
    print() {
        var iterator = this.head;
        while (iterator != null) {
            iterator.data.printDetails();
            // console.log(Object.getOwnPropertyNames(iterator.data))
            
            iterator = iterator.next;
        }
    }

    /**
     * 
     * @param {companyName} Name of Company whose share are being bought
     * @param {userName} Name of buyer
     * @param {amount} amount to buy shares
     */
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

module.exports = linkedList;