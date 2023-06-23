import {hasLowerCase, hasNumber, hasUpperCase, isEightLetters, isEmpty} from "./utils.js";

export const checkPasswordValidity = (password) => {
  let problems = [];
  if (isEmpty(password)) {
    problems.push('Password cannot be empty');
    return problems;
  }

  // is it 8 letters long?
  if (!isEightLetters(password)) {
    problems.push('At least 8 letters long ');

  }
  // does it have a lowercase letter?

  if (!hasLowerCase(password)) {
    problems.push('At least 1 lowercase character ');

  }

  // does it have an uppercase letter?

  if (!hasUpperCase(password)) {
    problems.push('At least 1 uppercase character ');

  }
  // does it have a number?

  if (!hasNumber(password)) {
    problems.push('At least 1 number ')

  }

 if (problems.length <= 1) {
   problems = [];
 }
   return problems;
}

// match 3 conditions - have a counter, set it as 0, increment it for each condition that is failed -
// if it is > 1 (out of 4) then conditions have not been met.

