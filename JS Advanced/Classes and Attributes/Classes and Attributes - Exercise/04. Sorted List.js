class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    sortList() {
        return this.list.sort((a, b) => a - b);
    }

    updateSize = () => this.size = this.list.length;

    add(element) {
        this.list.push(element);
        this.sortList();
        this.updateSize();
    }

    remove(index) {
        if (this.list[index] !== undefined) {
            this.list.splice(index, 1);
            this.sortList();
            this.updateSize();
        }
    }

    get(index) {
        if (index < this.list.length) {
            return this.list[index];
        }
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));