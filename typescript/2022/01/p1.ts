import * as fs from "fs";

const file = fs.readFileSync("./input.txt");
const groups: string[] = file.toString().split("\n\n");

let highest = 0;

groups.forEach(group => {
    let total = 0;
    group.split("\n").forEach(item => {
        total += +item;
    });

    if (total > highest) {
        highest = total;
    }
});

console.log("P1", highest); // ~0.34ms
