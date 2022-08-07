class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === "" || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!")
        }

        this.availableCars.push({model, horsepower, price, mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let hasModel = this.availableCars.find(x => x.model === model);

        if (!hasModel) {
            throw new Error(`${model} was not found!`)
        }
        
        if (hasModel.mileage > desiredMileage) {
            if (hasModel.mileage - desiredMileage <= 40000) {
                hasModel.price = hasModel.price - (5 * hasModel.price) / 100;
            } else {
                hasModel.price = hasModel.price - (10 * hasModel.price) / 100;
            }
        }
        this.availableCars.splice(this.availableCars.indexOf(hasModel), 1);
        let soldPrice = hasModel.price;
        this.totalIncome += soldPrice;
        let horsepower = hasModel.horsepower;
        this.soldCars.push({model, horsepower, soldPrice });
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;

    }

    currentCar() {
        let output = "-Available cars:\n"
        this.availableCars.forEach(car => {
            output += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`
        })
        return output.trim();
    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }

        if (criteria === "model") {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }

        let output = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        output += `-${this.soldCars.length} cars sold:\n`;

        this.soldCars.forEach(car => {
            output += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$\n`;
        })

        return output.trim();
    }
}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));