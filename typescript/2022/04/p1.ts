import * as fs from "fs";

const file = fs.readFileSync("./input.txt").toString();
const pairs: string[] = file.split("\n");

let pairCount = 0;

for (let i = 0; i < pairs.length; i++) {
    const [p1, p2] = pairs[i].split(",");

    const [p1b, p1t] = p1.split("-");
    const [p2b, p2t] = p2.split("-");

    if (+p1b >= +p2b && +p1t <= +p2t) {
        pairCount++;
        continue;
    }

    if (+p2b >= +p1b && +p2t <= +p1t) {
        pairCount++;
    }
}

console.log("P1", pairCount); // ~0.97ms