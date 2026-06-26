export const CalculateScore = (password) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[!@#$%^&*()_+]/.test(password)) score++;

  return score;
};

export const Analyzer = (score) => {
  if (score <= 2) {
    return "Weak";
  }

  if (score === 3) {
    return "Medium";
  }

  if (score === 4) {
    return "Strong";
  }

  return "Very Strong";
};

export const generatePassword = (length) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}