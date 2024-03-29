(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        let res = [];
        for (let i = n; i < this.length; i++) {
            res.push(this[i]);
        }
        return res;
    }

    Array.prototype.taken = function(n) {
        let res = [];
        for (let i = 0; i < n; i++) {
            res.push(this[i]);
        }
        return res;
    }

    Array.prototype.sum = function() {
        return this.reduce((acc, x) => acc + x, 0);
    }

    Array.prototype.average = function() {
        return this.sum / this.length;
    }
})()