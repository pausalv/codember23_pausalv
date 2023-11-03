import { readFileSync } from "fs";

let text = readFileSync("challenge01/message_01.txt", "utf-8");

let words = text.split(" ");

let res_array: Record<string, number> = {};

words.forEach((word) => {
  if (res_array[word.toLowerCase()]) {
    res_array[word.toLowerCase()] += 1;
  } else {
    res_array[word.toLowerCase()] = 1;
  }
});

let res = "";

for (let key in res_array) {
  res += `${key}${res_array[key]}`;
}

console.log(res);
