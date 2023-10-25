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
    "p":16,
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

// function is slightly slower than just looking up the priority score
// function getPriorityScore(input: string) {
//     const charCode = input.charCodeAt(0);
//
//     //upper case should be 27-52 priority score
//     if (charCode >= 65 && charCode < 91) {
//         return charCode - 38;
//     }
//
//     //lower case should be 1-26 priority score
//     return charCode - 96;
// }

let score = 0;
for(let i = 0; i < rucksacks.length; i++) {
    const rucksack = rucksacks[i].split("");
    const c1 = rucksack.splice(0, rucksacks[i].length/2)
    const seen: {[key: string]: number} = {};

    for (let j = 0; j < c1.length; j++) {
        seen[c1[j]] = priorities[c1[j]];
    }

    for (let j = 0; j < rucksack.length; j++) {
        if (seen[rucksack[j]]) {
            score+= seen[rucksack[j]];
            // need to break as we only count priority once
            break;
        }
    }
}
console.log("P1", score); // ~1.65ms