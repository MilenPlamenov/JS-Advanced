function createSortedList() {
    class SortedList {
        constructor() {
            this.list = []
            this.size = 0
        }

        sortList = () => (this.list = this.list.sort((a, b) => a - b))

        checkIndex = i => {
            if (this.list[i] === undefined) {
                throw new Error()
            }
        }

        updateSize = () => (this.size = this.list.length)

        add = e => {
            this.list.push(e)
            this.sortList()
            this.updateSize()
        }

        remove = i => {
            this.checkIndex(Number(i))
            this.list.splice(i, 1)
            this.sortList()
            this.updateSize()
        }

        get = i => {
            this.checkIndex(Number(i))
            this.sortList()
            return this.list[i]
        }
    }

    return new SortedList()
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));