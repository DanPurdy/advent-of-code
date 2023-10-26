import * as fs from "fs";

console.time();
const file = fs.readFileSync("./input.txt").toString();
const pairs: string[] = file.split("\n");

let overlapCount = 0;

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

    if (+p1b >= +p2b && +p2b <= +p1t && +p2t >= +p1b) {
        overlapCount++;
    } else if (+p2b >= +p1b && +p1b <= +p2t && +p1t >= +p2b) {
        overlapCount++;
    }
}
console.timeEnd();
console.log("P2", overlapCount); // ~0.77ms