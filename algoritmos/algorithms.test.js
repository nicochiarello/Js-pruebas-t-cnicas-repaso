import {
  stringReversal,
  palindrome,
  fizzBuz,
  maxCharacter,
  vowels,
  arrayChunking,
  reverseWords,
  capitalization,
  lowerCammelCase,
  UpperCammelCase,
} from "./algorithms";

test("String Reversal", () => {
  expect(stringReversal("Hello world!")).toBe("!dlrow olleH");
});

test("Palindrome must return true", () => {
  expect(palindrome("neuquen")).toBe(true);
});

test("FizzBuz", () => {
  const result = fizzBuz(30);

  expect(result[2]).toBe("Fizz");
  expect(result[3]).toBe("Buzz");
  expect(result[6]).toBe("Fizz Buzz");
  expect(result[12]).toBe("Fizz Buzz");
});

test("Max Character", () => {
  expect(maxCharacter("hola mundo")).toEqual({ letter: "o", times: 2 });
});

test("Vowel counter", () => {
  expect(vowels("hello world")).toBe(3);
  expect(vowels("hellooO world")).toBe(5);
});

test("Array chunking", () => {
  expect(arrayChunking([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
  expect(arrayChunking([1, 2, 3, 4, 5], 3)).toEqual([[1, 2], [3, 4], [5]]);
});

test("Reverse each word", () => {
  expect(reverseWords("hola que tal")).toBe("aloh euq lat");
});
test("Capitalize each word", () => {
  expect(capitalization("hola que tal")).toBe("Hola Que Tal");
});
test("lowerCammelCase", () => {
  expect(lowerCammelCase("hola que tal")).toBe("holaQueTal");
});
test("UpperCammelCase", () => {
  expect(UpperCammelCase("hola que tal")).toBe("HolaQueTal");
});
