import './bootstrap.css';
import './style.css';
import { checkPasswordValidity } from "./password.js";
import { checkEmailValidity } from "./email.js";

const form = document.getElementById('passwordForm');

const displayValidity = (field) => {
  const problems = field.getProblems();
  field.input.classList.remove('is-valid,', 'is-invalid');
  field.input.classList.add(problems.length === 0 ? 'is-valid' : 'is-invalid');
  field.feedback.replaceChildren();
  console.log(problems);
  if (field === password && problems[0] !== "Password cannot be empty") {
    let remainingProbs = problems.length - 1;
    field.feedback.append(addPasswordExplanation(remainingProbs));
  }
  problems.map((message) => {
    const text = document.createElement('small');
    text.textContent = message;
    return text;
  }).forEach((text) => field.feedback.append(text));
};

export const password = {
  input: document.getElementById('password-input'),
  feedback: document.getElementById('password-feedback'),
  getValue: function() { return this.input.value },
  getProblems: function() { return checkPasswordValidity(this.getValue()) },
};

export const email = {
  input: document.getElementById('email-input'),
  feedback: document.getElementById('email-feedback'),
  getValue: function() { return this.input.value },
  getProblems: function() { return checkEmailValidity(this.getValue()) },
}

form.onsubmit = (e) => {
  e.preventDefault();
  displayValidity(password);
  displayValidity(email);
}

// janky password explanation para
let addPasswordExplanation = (remainingProbs) => {
  let explanationEl = document.createElement("small");
  explanationEl.textContent = `Your password must contain ${remainingProbs} more of these criteria: `
  return explanationEl;
}
