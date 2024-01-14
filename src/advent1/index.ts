// Read a text file
import { readFileSync, writeFileSync } from "fs";

const substrings = [
  { str: "1", num: 1 },
  { str: "2", num: 2 },
  { str: "3", num: 3 },
  { str: "4", num: 4 },
  { str: "5", num: 5 },
  { str: "6", num: 6 },
  { str: "7", num: 7 },
  { str: "8", num: 8 },
  { str: "9", num: 9 },
  { str: "one", num: 1 },
  { str: "two", num: 2 },
  { str: "three", num: 3 },
  { str: "four", num: 4 },
  { str: "five", num: 5 },
  { str: "six", num: 6 },
  { str: "seven", num: 7 },
  { str: "eight", num: 8 },
  { str: "nine", num: 9 },
];

console.time("advent1");
// read the input file
const text = readFileSync("./src/advent1/deets.txt", "utf8");

// split the text file into an array of strings
const lines = text.split("\n");

const numbers = lines.map((line) => {
  let firstSubstring = "";
  let firstPosition = line.length + 1;
  let lastSubstring = "";
  let lastPosition = -1;

  // get the first position of a substring
  substrings.forEach((substring) => {
    // create an array of all the positions of the substring
    let positions = [];
    let position = line.indexOf(substring.str);
    while (position !== -1) {
      positions.push(position);
      position = line.indexOf(substring.str, position + 1);
    }

    // if the first one is earlier than the first one we've seen, update the first substring
    if (positions.length && positions[0] < firstPosition) {
      firstSubstring = substring.num.toString();
      firstPosition = positions[0];
    }

    // if the last one is later than the last one we've seen, update the last substring
    if (positions.length && positions[positions.length - 1] > lastPosition) {
      lastSubstring = substring.num.toString();
      lastPosition = positions[positions.length - 1];
    }
  });

  return Number(firstSubstring + lastSubstring);
});

// write the numbers to a file for debugging
//writeFileSync("./src/advent1/log.txt", numbers.join("\n"));

// sum the numbers
const sum = numbers.reduce((a, b) => a + b);

console.log(sum);
console.timeEnd("advent1");
