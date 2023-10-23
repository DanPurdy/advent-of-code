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

const Losing: {[key: string]: string} = {
    A: "Y",
    B: "Z",
    C: "X",
}

let score = 0;
rounds.forEach(round => {
    const [move, response] = round.split(" ");
    const responseScore = scores[response];
    score += responseScore;

    // win
    if (Losing[move] === response) {
        score += 6;
        return;
    }


    const moveScore = scores[move];


    //draw
    if (moveScore === responseScore) {
        score += 3;
    }
})

console.log("P1", score); // ~1.05ms