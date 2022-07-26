function classHierarchy() {
    
    class Figure {
        constructor(unit = 'cm') {
            this.unit = unit;
        }

        get area() {
            return 0;
        }

        changeUnits(unit) {
            this.unit = unit;

        }

        convertUnit(value) {
            if (this.unit == 'm') {
                return value /= 100;
            } else if (this.unit == 'mm') {
                return value *= 10;
            }
            return value;
        }

        
        toString() {
            return `Figures units: ${this.unit}`;
        }
    }

    class Circle extends Figure {
        constructor(r, unit) {
            super(unit);
            this.r = r;
        }

        get area() {
            this.rad = this.convertUnit(this.r);
            return Math.PI * this.rad ** 2;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.rad}`;
        }
    }

    class Rectangle extends Figure {
        constructor(w, h, unit) {
            super(unit);
            this.w = w;
            this.h = h;
        }

        get area() {
            this.wid = this.convertUnit(this.w);
            this.hei = this.convertUnit(this.h);
            return this.wid * this.hei;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.wid}, height: ${this.hei}`;
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}