(function solve() {
    String.prototype.ensureStart = function(data) {
        if (!this.startsWith(data)) {
            return `${data}${this}`;
        }
        return this;
    }

    String.prototype.ensureEnd = function(data) {
        if (!this.endsWith(data)) {
            return `${this}${data}`;
        }
        return this;
    }

    String.prototype.isEmpty = function() {
        return this.length === 0 ? true : false;
    }
    
    String.prototype.truncate = function(n) {

        if(Number(n) < 4) {
            return ".".repeat(Number(n));
        }

        if (Number(n) >= this.length) {    
            return this.toString();
        }
        
        let lastWhitespace = this.toString().substring(0, n - 2).lastIndexOf(" ");
        return lastWhitespace !== -1 
            ? `${this.toString().substring(0, lastWhitespace)}...` 
            : `${this.toString().substring(0, n - 3)}...`; 
    }

    String.format = function(string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }
        return string;
    }
})()