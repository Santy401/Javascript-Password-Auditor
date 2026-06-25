import { CalculateScore, Analyzer } from "./analyzer.js";
const password = document.getElementsByClassName("form-control");
const form = document.getElementById("passwordForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const passwordValue = password[0].value;
  const score = CalculateScore(passwordValue);
  const result = Analyzer(score);
  document.getElementById("result").innerText = `Password Strength: ${result}`;
});