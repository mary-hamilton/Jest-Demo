export const isEmpty = (value) => {
  return value === '' || value === null || value === undefined;
}

export const isEightLetters = (string) => {
  return string.length >= 8;
}

export const hasLowerCase = (string) => {
  return /[a-z]/.test(string);
}

export const hasUpperCase = (string) => {
  return /[A-Z]/.test(string);
}

export const hasNumber = (string) => {
  return /[0-9]/.test(string);
}
