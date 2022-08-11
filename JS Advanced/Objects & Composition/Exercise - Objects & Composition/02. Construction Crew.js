function solve(worker) {
    if (worker.dizziness) {
        let waterNeeded = worker.weight * worker.experience * 0.1;
        worker.levelOfHydrated += waterNeeded;
    }
    return worker;
}

let worker = { weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true
 }

console.log(solve(worker));