

class LinkedList <T> {
    linkedList: T[]

    constructor(linkedList: T[]) {
        this.linkedList = linkedList 
    }

    append (item: T): void {
        this.linkedList.push(item);
    }

    prepend(item: T): void {
        this.linkedList.unshift(item);
    }

    delete(value: T): void {
        let index = this.linkedList.findIndex(item => item = value);
        if (index !== -1) {
            this.linkedList.splice(index, 1);
        }
    }

    toArray(): T[] {
        return this.linkedList.slice()
    }
}

let linkedList = new LinkedList([1,2,3,4])
linkedList.append(3)
linkedList.prepend(2)
linkedList.delete(3)
console.log(linkedList.toArray());


