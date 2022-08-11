class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (!this.goals[peak]) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }

        return `${peak} has already been added to your goals`;
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources < 0) {
            throw new Error("You don't have enough resources to start the hike")
        }

        if (this.resources - time * 10 < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= time * 10;
        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left` // % ??
    }

    rest(time) {
        if (this.resources + time * 10 >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }
        this.resources += time * 10;
        return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }

    showRecord(criteria) {
        // hard, easy, all
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === "all") {
            let output = "All hiking records:\n";
            this.listOfHikes.forEach(el => {
                output += `${this.username} hiked ${el.peak} for ${el.time} hours`
            })
            return output.trim();
        }
        let hasCriteria = this.listOfHikes.find(x => x.difficultyLevel === criteria);
        if (!hasCriteria) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }
        let bestTime = 9999999;
        let bestPeak = "";
        this.listOfHikes.forEach(el => {
            if (el.time < bestTime && el.difficultyLevel === criteria) {
                bestTime = el.time;
                bestPeak = el.peak;
            }
        });
        return `${this.username}'s best ${criteria} hike is ${bestPeak} peak, for ${bestTime} hours`;
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.addGoal('Botev', 2131);
user.hike('Musala', 8, 'easy');
user.rest(100);
user.hike('Botev', 4, 'easy');
console.log(user.showRecord('easy'));




// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours