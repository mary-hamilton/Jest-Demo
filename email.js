import { isEmpty } from "./utils.js";

export const checkEmailValidity = (email) => {
  const problems = [];
  if (isEmpty(email)) {
    problems.push('Email cannot be empty');
    return problems;
  }
  return problems;
}