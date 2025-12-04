import { countVowels } from "./modules/function.js";

/* const name = process.argv[2];
console.log(`hello ${name}`); */

const input = process.argv.slice(2);
const inputArray = input.join("").trim();
const result = countVowels(inputArray);

console.log(`Ci sono ${result} vocali.`);
