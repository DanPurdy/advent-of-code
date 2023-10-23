import * as fs from "fs";

const file = fs.readFileSync("./input.txt");
const groups = file.toString().split("\n\n");

const results: number[] = [];

for (let i = 0; i < groups.length; i++) {
    let total = 0;
    const group = groups[i].split("\n");
    for (let j = 0; j < group.length; j++) {
        total += +group[j]
    }

    results.push(total);
}

const sorted = results.sort((a, b) => a < b ? 1 : -1);
const result: number = sorted[0] + sorted[1] + sorted[2];

console.log("P2", result); // ~0.41ms
