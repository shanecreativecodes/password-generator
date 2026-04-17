const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const strengthEl = document.getElementById("strength");

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

lengthEl.addEventListener("input", () => {
  lengthValue.textContent = lengthEl.value;
});

function generatePassword() {
  let chars = lower;

  if (uppercaseEl.checked) chars += upper;
  if (numbersEl.checked) chars += numbers;
  if (symbolsEl.checked) chars += symbols;

  let password = "";

  for (let i = 0; i < lengthEl.value; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordEl.value = password;

  checkStrength(password);
}

function checkStrength(password) {
  let strength = "Weak";

  if (password.length > 10 && /[A-Z]/.test(password) && /\d/.test(password)) {
    strength = "Medium";
  }

  if (password.length > 14 && /[!@#$%^&*]/.test(password)) {
    strength = "Strong";
  }

  strengthEl.textContent = "Strength: " + strength;
}

function copyPassword() {
  navigator.clipboard.writeText(passwordEl.value);
  alert("Password copied!");
}