import { isEmpty } from "./utils.js";

export const checkEmailValidity = (email) => {
  const problems = [];
  if (isEmpty(email)) {
    problems.push('Email Cannot be empty');
    return problems;
  }
  return problems;
}