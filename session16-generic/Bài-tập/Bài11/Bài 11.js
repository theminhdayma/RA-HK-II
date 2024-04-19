"use strict";
class LinkedList {
    constructor(linkedList) {
        this.linkedList = linkedList;
    }
    append(item) {
        this.linkedList.push(item);
    }
    prepend(item) {
        this.linkedList.unshift(item);
    }
    delete(value) {
        let index = this.linkedList.findIndex(item => item = value);
        if (index !== -1) {
            this.linkedList.splice(index, 1);
        }
    }
    toArray() {
        return this.linkedList.slice();
    }
}
let linkedList = new LinkedList([1, 2, 3, 4]);
linkedList.append(3);
linkedList.prepend(2);
linkedList.delete(3);
console.log(linkedList.toArray());
