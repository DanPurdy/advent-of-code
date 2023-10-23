import * as fs from "fs";

const file = fs.readFileSync("./input.txt").toString();
const rounds = file.split("\n");

const scores: {[ key: string]: number} = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
}

const losing: {[key: string]: string} = {
    A: "Y",
    B: "Z",
    C: "X",
}

let score = 0;
for (let i = 0; i < rounds.length; i++) {
    const [move, response] = rounds[i].split(" ");
    const responseScore = scores[response];
    score += responseScore;

    // win
    if (losing[move] === response) {
        score += 6;
        continue;
    }

    const moveScore = scores[move];

    //draw
    if (moveScore === responseScore) {
        score += 3;
    }
}

console.log("P1", score); // ~0.82ms