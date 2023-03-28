import { isEmpty } from "./utils.js";

export const checkPasswordValidity = (password) => {
  const problems = [];
  if (isEmpty(password)) {
    problems.push('Password cannot be empty');
    return problems;
  }
  return problems;
}

