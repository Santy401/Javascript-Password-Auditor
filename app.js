import { CalculateScore, Analyzer } from "./analyzer.js";
const password = "S4nt&401@401!";

const score = CalculateScore(password);

const result = Analyzer(score);

console.log(result);
