import * as fs from "fs";

const file = fs.readFileSync("./input.txt");
const groups: string[] = file.toString().split("\n\n");

let highest = 0;

for (let i = 0; i < groups.length; i++) {
    let total = 0;
    const group = groups[i].split("\n");
    for (let j = 0; j < group.length; j++) {
        total += +group[j];
    }

    if (total > highest) {
        highest = total;
    }
}

console.log("P1", highest); // ~0.34ms
