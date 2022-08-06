class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable - spaceRequired < 0) {
            throw new Error("Not enough space in the garden.");
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0});
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let hasPlant = this.plants.find(x => x.plantName === plantName);
        if (!hasPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        
        if (hasPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        hasPlant.ripe = true;
        hasPlant.quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        return `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        let hasPlant = this.plants.find(x => x.plantName === plantName);
        if (!hasPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (!hasPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        let quantity = hasPlant.quantity;
        this.storage.push({plantName, quantity});
        this.spaceAvailable += hasPlant.spaceRequired;
        let idx = this.plants.indexOf(hasPlant);
        this.plants.splice(idx, 1);
        return `The ${plantName} has been successfully harvested.`
    } 

    generateReport() {
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let plantsInGarden = [];
        for (let plant of this.plants) {
            plantsInGarden.push(plant.plantName);
        }
        if (this.storage.length == 0) {
            return `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: ${plantsInGarden.join(', ')}\nPlants in storage: The storage is empty.`;
        } else {
            let result = [];
            for (let plant of this.storage) {
                let piece = `${plant.plantName} (${plant.quantity})`;
                result.push(piece);
            }
            return `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: ${plantsInGarden.join(', ')}\nPlants in storage: ${result.join(', ')}`;
        }
    }
}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());