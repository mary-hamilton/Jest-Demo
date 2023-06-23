import {hasUpperCase, hasLowerCase, isEightLetters, isEmpty, hasNumber} from "./utils.js";
import {checkPasswordValidity} from "./password.js";

// Contain all test cases for a single function inside a 'describe' block

describe('isEightLetters', () => {
  test('is 9 characters, returns true', () => {
    const result = isEightLetters("asdfghjkl");
    expect(result).toEqual(true);
  })
  test('is 8 characters, returns true', () => {
    const result = isEightLetters("asdfghjk");
    expect(result).toEqual(true);
  })
  test('is 7 characters, returns false', () => {
    const result = isEightLetters("asdfghj");
    expect(result).toEqual(false);
  })
  test('is empty, returns false', () => {
    const result = isEightLetters("");
    expect(result).toEqual(false);
  })
})

describe('hasLowerCase', () => {
  test('has only uppercase and numbers, returns false', () =>{
    const result = hasLowerCase("ABCDE12345");
    expect(result).toEqual(false);
  })
  test('has lowercase characters, returns true', () => {
    const result = hasLowerCase("ABCDE12345abc");
    expect(result).toEqual(true);
  })

  test('has one lowercase character only, returns true', () =>{
      const result = hasLowerCase("a");
      expect(result).toEqual(true);

    })
  test('is empty, returns false', () =>{
    const result = hasLowerCase("");
    expect(result).toEqual(false);
  })
})

describe('hasUpperCase', () => {
  test('has only lowercase and numbers, returns false', () =>{
    const result = hasUpperCase("abcde12345");
    expect(result).toEqual(false);
  })
  test('has uppercase characters, returns true', () => {
    const result = hasUpperCase("abcde12345ABC");
    expect(result).toEqual(true);
  })

    test('has one uppercase character only, returns true', () =>{
      const result = hasUpperCase("A");
      expect(result).toEqual(true);
  })
  test('is empty, returns false', () =>{
    const result = hasUpperCase("");
    expect(result).toEqual(false);
  })
})

describe('hasNumber', () => {
  test('has only lowercase and uppercase, returns false', () =>{
    const result = hasNumber("abcdeABCDE");
    expect(result).toEqual(false);
  })
  test('has numbers, returns true', () =>{
    const result = hasNumber("abcdeABCDE123");
    expect(result).toEqual(true);
  })

  test('has one number only, returns true', () =>{
    const result = hasNumber("1");
    expect(result).toEqual(true);
  })

  test('is empty, returns false', () =>{
    const result = hasNumber("");
    expect(result).toEqual(false);
  })

})

// checkPasswordValidity the whole thing
describe('checkPasswordValidity', () => {
  test('over 8 characters, no numbers, returns true', () => {
    const result = checkPasswordValidity("abcdeABCD");
    expect(result.length < 1).toEqual(true);
  })

  test('over 8 characters, no uppercase, returns true', () => {
    const result = checkPasswordValidity("abcde1234");
    expect(result.length < 1).toEqual(true);
  })

  test('over 8 characters, no lowercase, returns true', () => {
      const result = checkPasswordValidity("ABCDE1234");
      expect(result.length < 1).toEqual(true);
  })

  test('8 characters, no lowercase or uppercase, returns false', () => {
    const result = checkPasswordValidity("12345678");
    expect(result.length < 1).toEqual(false);
  })

  test('8 characters, no letters or numbers, returns false', () => {
    const result = checkPasswordValidity("/.,:!@$%");
    expect(result.length < 1).toEqual(false);
  })

  test('under 8 characters, contains lowercase, uppercase and numbers, returns true', () => {
    const result = checkPasswordValidity("ABcd12");
    expect(result.length < 1).toEqual(true);
  })

  test('under 8 characters, contains lowercase and numbers, returns false', () => {
    const result = checkPasswordValidity("abc123");
    expect(result.length < 1).toEqual(false);
  })

  test('under 8 characters, contains uppercase and numbers, returns false', () => {
    const result = checkPasswordValidity("ABC123");
    expect(result.length < 1).toEqual(false);
  })

  test('under 8 characters, contains letters only, returns false', () => {
    const result = checkPasswordValidity("ABCabc");
    expect(result.length < 1).toEqual(false);
  })

  test('under 8 characters, contains numbers only, returns false', () => {
    const result = checkPasswordValidity("123");
    expect(result.length < 1).toEqual(false);
  })

  test('under 8 characters, contains lowercase only, returns false', () => {
    const result = checkPasswordValidity("abc");
    expect(result.length < 1).toEqual(false);
  })

  test('under 8 characters, contains uppercase only, returns false', () => {
    const result = checkPasswordValidity("ABC");
    expect(result.length < 1).toEqual(false);
  })

  test('empty, returns false', () => {
    const result = checkPasswordValidity("");
    expect(result.length < 1).toEqual(false);
  })

})