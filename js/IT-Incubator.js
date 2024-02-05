// 1 

/* const numbers = [1, 2, 3];

const result = numbers.reduce((agg, curr) => {
  return agg + curr;
}, 0);

console.log(result); */


// 2 prefix
/* const arr = ['abc123', 'abcd123', 'abcde123', 'abcdef123'];

const getComPref = (prefix, str2) => {
  let res = '';
  for (
    let i = 0, j = 0; 
    i < prefix.length && j < str2.length; 
    i++, j++) {
      if (prefix[i] != str2[j]) {
        break;
      } else {
        res += prefix[i];
      }
  }
  return res;
}

const getLongestCommonPref = (arr) => {
  let pref = arr[0];
  
  for(let i = 1; i < arr.length; i++) {
    pref = getComPref(pref, arr[i])
  }
  return pref;
}

console.log(getLongestCommonPref(arr)); */


// 3 Является ли строка анаграммой (состоят из одних и тех же символов)

/* const sorting = (prop) => prop.toLowerCase().split('').sort().join('');

const isAnagram = (str1, str2) => sorting(str1) === sorting(str2) ? console.log('anagram') : console.log('not a anagram');

isAnagram('listen', 'silent');
isAnagram('length', 'beggin'); */


// 4  Является ли строка палиндромом (одинаково читается с обеих сторон)

/* const polindrom = (str) => (str.split("").join("") === str.split("").reverse().join("")) ? "Polindrom" : "Not a polindrom";
console.log(polindrom("тест"));
console.log(polindrom("шалаш")); */

// 5 Вывести n-e число Фибоначчи (ряд чисел, где каждое последующее является суммой двух предыдущих: 1, 1, 2, 3, 5, 8, 13, 21, ...)

/* function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log( fib(3) ); // 2
console.log( fib(7) ); // 13
console.log( fib(8) ); // 21
console.log( fib(77) ); // 5527939700884757 */
