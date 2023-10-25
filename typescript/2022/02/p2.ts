import * as fs from "fs";
console.time();
const file = fs.readFileSync("./input.txt").toString();
const rounds = file.split("\n");

const scores: {[ key: string]: number} = {
    A: 1,
    B: 2,
    C: 3,
}

const losing: {[key: string]: string} = {
    A: "C",
    B: "A",
    C: "B",
}

const winning: {[key: string]: string} = {
    A: "B",
    B: "C",
    C: "A",
}

let score = 0;
for (let i = 0; i < rounds.length; i++) {
    const output = rounds[i].split(" ");

    // quicker than destructuring..
    const outcome = output[1];
    const move = output[0];

    if (outcome === "X") {
        score += scores[losing[move]]
        continue;
    }

    if (outcome === "Y") {
        score += scores[move] + 3
        continue;
    }

    score += scores[winning[move]] + 6

}
console.timeEnd();
console.log("P2", score); // ~0.68ms