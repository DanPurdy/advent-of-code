import * as fs from "fs";

const file = fs.readFileSync("./input.txt");
const groups = file.toString().split("\n\n");

const results: number[] = [];

groups.forEach(group => {
    let total = 0;
    group.split("\n").forEach(item => {
        total += Number(item);
    });

    results.push(total);
});

const sorted = results.sort((a, b) => a < b ? 1 : -1);
const result: number = sorted[0] + sorted[1] + sorted[2];

console.log("P2", result); // ~0.43ms
