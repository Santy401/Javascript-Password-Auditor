import { CalculateScore, Analyzer, generatePassword } from "./Functions.js";
const password = document.getElementsByClassName("form-control");
const form1 = document.getElementById("passwordForm");

const form2 = document.getElementById("generatorForm");
const genLength = document.getElementById("genLength");
const copyButton = document.getElementById("copyButton");
const generatedPasswordInput = document.getElementById("generatedPassword");
const generatedPasswordContainer = document.getElementById("generatedPasswordContainer");

form1.addEventListener("submit", (event) => {
  event.preventDefault();

  const passwordValue = password[0].value;
  const score = CalculateScore(passwordValue);
  const result = Analyzer(score);

  document.getElementById("result").innerText =
    `Password Strength: ${result}`;
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const length = parseInt(genLength.value);

  const generatedPassword = generatePassword(length);

  generatedPasswordInput.value = generatedPassword;
  generatedPasswordContainer.style.display = "flex";
});

console.log(generatePassword(21));

copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(generatedPasswordInput.value);
  alert("Password copied to clipboard!");
});