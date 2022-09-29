/*
 1. 
 Given a string of characters as input, write a function that returns it with the characters reversed.
 */

export const stringReversal = (string) => {
  return string.split("").reduce((acc, item) => {
    return item + acc;
  }, "");
};

/*
2. Palindrome
*/

export const palindrome = (string) => {
  const cleaned = string.replace(/\W/g, "").toLowerCase();
  if (cleaned.split("").reverse().join("") === cleaned) {
    return true;
  }

  return false;
};

/*
3. FizzBuzz
*/

export const fizzBuz = (num) => {
  const aux = {};
  for (let i = 0; i < num; i++) {
    const fizz = i % 2 === 0 ? true : false;
    const buzz = i % 3 === 0 ? true : false;
    fizz
      ? buzz
        ? (aux[i] = "Fizz Buzz")
        : (aux[i] = "Fizz")
      : buzz
      ? (aux[i] = "Buzz")
      : "";
  }
  return aux;
};

/*
4. Max Character
*/

export const maxCharacter = (string) => {
  const obj = string
    .toLowerCase()
    .split("")
    .reduce((acc, item) => {
      if (acc[item]) {
        acc[item] = acc[item] + 1;
      } else {
        acc[item] = 1;
      }
      return acc;
    }, {});

  let max = { letter: null, times: 0 };

  for (let clave in obj) {
    if (obj[clave] > max.times) {
      max = { letter: clave, times: obj[clave] };
    }
  }

  return max;
};

/*
5. Given a string of words or phrases, count the number of vowels.
*/

export const vowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];

  const stringArray = string.toLowerCase().split("");

  const matches = stringArray.reduce((acc, item) => {
    vowels.forEach((vowel) => {
      if (vowel === item) {
        return (acc += 1);
      }
    });
    return acc;
  }, 0);

  return matches;
};

/* 8. Array Chunking
Given an array and a size, split the array items into a list of arrays of the given size. 
*/

export const arrayChunking = (arr, size) => {
  let result = [];
  let aux = 0;
  let items = Math.ceil(arr.length / size); // 2
  for (let i = 0; i < size; i++) {
    let arrAux = arr;
    console.log(arrAux);
    result.push(arrAux.slice(aux, items + aux));
    aux = aux + items;
  }

  console.log(result);
  return result;
};

/* 
9. Reverse Words

*/

export const reverseWords = (string) => {
  const arrString = string.split(" ");

  const result = arrString.reduce((acc, item) => {
    return acc + " " + item.split("").reverse().join("");
  }, "");
  return result.trim();
};

/* 
10. Capitalization
Given a phrase, capitalize every word.

*/

export const capitalization = (string) => {
  const result = string.split(" ").reduce((acc, item) => {
    return acc + " " + item[0].toUpperCase() + item.slice(1).toLowerCase();
  }, "");

  return result.trim();
};

/* 
11. lowerCammelCase
*/

export const lowerCammelCase = (string) => {
  const result = string.split(" ").reduce((acc, item) => {
    if (item === string.split(" ")[0]) {
      return acc + item.toLowerCase();
    } else {
      return acc + item[0].toUpperCase() + item.slice(1).toLowerCase();
    }
  });

  return result.trim();
};

/* 
12. UpperCammelCase
*/

export const UpperCammelCase = (string) => {
  const result = string.split(" ").reduce((acc, item) => {
    return acc + item[0].toUpperCase() + item.slice(1).toLowerCase();
  }, "");

  return result.trim();
};
