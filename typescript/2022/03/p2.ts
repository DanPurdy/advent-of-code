import * as fs from "fs";

const file = fs.readFileSync("./input.txt").toString();
const rucksacks = file.split("\n");

const priorities: {[key: string]: number} = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
    "A": 27,
    "B": 28,
    "C": 29,
    "D": 30,
    "E": 31,
    "F": 32,
    "G": 33,
    "H": 34,
    "I": 35,
    "J": 36,
    "K": 37,
    "L": 38,
    "M": 39,
    "N": 40,
    "O": 41,
    "P": 42,
    "Q": 43,
    "R": 44,
    "S": 45,
    "T": 46,
    "U": 47,
    "V": 48,
    "W": 49,
    "X": 50,
    "Y": 51,
    "Z": 52
}

let group = 1;
let seen: {[key:string]: number} = {};
let score = 0;

for(let i = 0; i < rucksacks.length; i++) {
    const rucksack = rucksacks[i].split("");

    if (i % 3 === 0) {
        group++;
        seen = {}

        for (let j = 0; j < rucksack.length; j++) {
            seen[rucksack[j]] = priorities[rucksack[j]];
        }
        continue;
    }

    // keep track of what we've seen in this 1 backpack
    const seenInt: {[key: string]: number} = {};

    for (let j = 0; j < rucksack.length; j++) {
        // Have we seen the item previously - lets narrow it down here
        if (seen[rucksack[j]]) {
            if (i % 3 === 2) {
                // We know there is only 1 item that is consistent for all 3 in the group - as soon as we find it we can score it and break
                score += priorities[rucksack[j]];
                break;
            }
            // else record that we've seen the item in 2 bags now
            seenInt[rucksack[j]] = priorities[rucksack[j]];
        }
    }

    //store the outcome of what we've seen consistently in the bags we've looked at for this group
    seen = seenInt;
}

console.log("P2", score); // ~1.67ms