import * as fs from "fs";

const file = fs.readFileSync("./input.txt").toString();
const pairs: string[] = file.split("\n");

let pairCount = 0;

for (let i = 0; i < pairs.length; i++) {
    const splitPairs = pairs[i].split(",");
    const p1 = splitPairs[0];
    const p2 = splitPairs[1];

    // destructuring arrays is slow :(
    const parts = p1.split("-")
    const parts2 = p2.split("-")
    const p1b = parts[0];
    const p1t = parts[1];

    const p2b = parts2[0];
    const p2t = parts2[1];

    if (+p1b >= +p2b && +p1t <= +p2t) {
        pairCount++;
        continue;
    }

    if (+p2b >= +p1b && +p2t <= +p1t) {
        pairCount++;
    }
}

console.log("P1", pairCount); // ~0.78ms