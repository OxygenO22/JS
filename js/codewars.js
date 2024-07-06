//1. Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
/* const createPhoneNumber = (arr) => {
	arr.splice(0, 0, "(");
	arr.splice(4, 0, ")");
	arr.splice(5, 0, " ");
	arr.splice(9, 0, "-");;
	return arr.join("");
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890" */

//2. Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

/* const countBites = (integer) => {
	if (integer > 0) {
		let res = '';
    let bin = 1;
    while (integer >= bin) {
      res = (integer & bin ? 1 : 0) + res;
      bin <<= 1;
    }
    return res || "0";
	} else {
		return alert("integer must be positive");
	}
}


console.log(countBites(1234)); */



//3. Your dad doesn't really get punctuation, and he's always putting extra commas in when he posts. You can tolerate the run-on sentences, as he does actually talk like that, but those extra commas have to go!

/* Write a function called dadFilter that takes a string as argument and returns a string with the extraneous commas removed. The returned string should not end with a comma or any trailing whitespace. */

/* let string = "all this,,,, used to be trees,,,,,,";

let dadFilter = (str) => {
	let startArr = str.split('');

	for (let i = 0; i < startArr.length; i++) {
		if (startArr[i] === ',' && startArr[i + 1] === ',') {
			startArr[i] = '';
		} 
		if (startArr[startArr.length -1] === ',') {
			startArr.splice(-1, 1)
		}
	}
	
	return startArr.join('');
}

console.log(dadFilter(string)) */


//4. The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

/* const solve = (s) => {
	let comparisonArr = ['a', 'e', 'i', 'o', 'u', 'y'];
	let firstArr = s.split('');
	let count = 1; 
	let resultArr = [];
	let countArr = [];

	for (let i = 0; i < firstArr.length; i++) {
		for (let j = 0; j < comparisonArr.length; j++) {
			if (firstArr[i] === comparisonArr[j]) {
					resultArr.push(firstArr[i])
			}
		}
	}

	
	if (resultArr.length !== 0) {
		for (let i = 0; i < firstArr.length; i++) {
			for (let j = 0; j < resultArr.length; j++) {
				if (firstArr[i] === resultArr[j] && firstArr[i + 1] === resultArr[j + 1]) {
						count += 1; 	
				} else if (firstArr[i] === resultArr[j] && firstArr[i + 1] !== resultArr[j + 1]) {
					countArr.push(count);
					count = 1;
					count += 1;
				}
			}
		}
	} else {
		return count = 0;
	}

	console.log(countArr)

	return count
}

//console.log(solve('codewarriors'));
console.log(solve('suoidea')); */


//5 Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example: 
/* 3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹) */

/* const multiply = (number) => {
	const constNum = 5;
	const numTostr = number.toString();
	let degree;
	if (numTostr.includes('-')) {
		degree = numTostr.slice(1).length;
	} else {
		degree = numTostr.length;
	}
	return number * Math.pow(constNum, degree) 
} */

// or

/* const multiply = (number) => number * Math.pow(5, Math.abs(number).toString().length);

console.log(multiply(-2))  */


// 6 Write a function that accepts two parameters (sum and multiply) and find two numbers [x, y], where x + y = sum and x * y = multiply.

/* Example:

sum = 12 and multiply = 32

In this case, x equals 4 and y equals 8.

x = 4

y = 8

Because

x + y = 4 + 8 = 12 = sum

x * y = 4 * 8 = 32 = multiply

The result should be [4, 8].

Note:

0 <= x <= 1000

0 <= y <= 1000

If there is no solution, your function should return null (or None in python).

You should return an array (list in python) containing the two values [x, y] and it should be sorted in ascending order.

One last thing: x and y are integers (no decimals). */

/* const sumAndMultiply = (sum, multiply) => {
	const resArr = [];
	const a = 1;
	const b = sum;
	const c = multiply;
	
	if ((Number.isInteger(sum) && Number.isInteger(multiply)) && (sum > 0 && multiply > 0) && (sum <= 1000 && multiply <= 1000) && (sum !== NaN && multiply !== NaN)) {
		const x = (-(-b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
		const y = (-(-b) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
		console.log('x: ', x);
		console.log('y: ', y);
		if (Number.isInteger(x) && Number.isInteger(y)) {
			resArr.push(x, y);
			resArr.sort((a, b) => a - b);
			return resArr;
		} else {
			console.log('inner null');
			return null;
		}
	} else {
		return null;
	}
}

console.log(sumAndMultiply(57, 80))
console.log(sumAndMultiply(570, 839)) */


//// 7 

/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

/* const removeUrlAnchor = (url) => {
	if (typeof url === 'string') {
		if (url.includes("#")) {
			return url.split('#')[0];
		} else {
			return url;
		}
	} else {
		alert('Should be string');
	}
}

console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/')) */


//// 8

/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

/* const disemvowel = (str) => str.replace(/[aeiou]/gi, '');

console.log(disemvowel("This website is for losers LOL!"))
console.log(disemvowel("What are you, a communist?")) */


//// 9

/* Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer. */

/* const checkExam = (array1, array2) => {
	let sum = 0;

	for ( i = 0, j = 0; i < array1.length, j < array2.length; i++, j++) {
		if (array1[j] === array2[i]) {
			sum += 4;
		} else if (array1[j] !== array2[i]) {
			if (array2[j] === '') {
			sum += 0;
		} else {
			sum -= 1;
		}
		}  
	}

	if (sum < 0) {
		sum = 0;
	} else {
		sum;
	}

	return sum;
} */

// or 
/* const checkExam = (array1, array2) => {
  const reducer = (a, e, idx) => {
    if (e === "") {
      return a;  
    }
    
    if (e === array1[idx]) {
      return a += 4;
    }
    
    return --a;
  }
  const score = array2.reduce(reducer, 0);
  return score < 0 ? 0 : score;
} */

	// or 

	/*const checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0; */

/* console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])) */


//// 10 

/* SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.

Your task is to shorten the message to 160 characters, starting from end, by replacing spaces with camelCase, as much as necessary.

If all the spaces are replaced but the resulting message is still longer than 160 characters, just return that resulting message.

Example 1:

Original message (169 chars):

No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.
Shortened message (160 chars):

No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.
Example 2:

Original message (269 chars):

SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.
Shortened message (228 chars):

SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong. */

/* let tc1 = 'No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.'
let tc1x = 'No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.'
let tc2 = "This message is already short enough!"
let tc3 = "ThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoon"
let tc4 = "SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long."
let tc4x = 'SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.' */

/* const shortener = (message) => {
	const maxLength = 160;
	let resArr = [];
	if (message.length <= maxLength) {
		return message;
	} else if (message.length > maxLength ) {

		const messageArr = message.split('').reverse();
		let counter = messageArr.length;

		for (let i = 0; i < messageArr.length; i++) {
			if ( counter > maxLength) {
				if (messageArr[i + 1] === ' ') {
					resArr.push(messageArr[i].toUpperCase());
					messageArr[i + 1] = '';
					counter -= 1;
				} else {
					resArr.push(messageArr[i]);
				}
			} else {
				resArr.push(messageArr[i]);
			}			
		}
		if (resArr.length <= maxLength) {
			return resArr.join('');
		} else {
			return resArr.reverse().join('');
		}
	}
} */

// or 

/* function shortener(m){
  while(m.length > 160 && (n = m.lastIndexOf(' ')) >= 0)
  m = m.slice(0, n) + m[n+1].toUpperCase() + m.slice(n+2);
  return m;
} */

// or

/* const shortener = message =>  {
  while (message.length > 160) {
      let idx = message.lastIndexOf(' ');
      if (idx == -1) break;
      let part1 = message.slice(0, idx);
      let part2  = message.slice(idx + 1);
      message = part1 + part2[0].toUpperCase() + part2.slice(1);
  }
    return message;
} 


console.log(shortener(tc1))
console.log(shortener(tc2)) 
console.log(shortener(tc3))
console.log(shortener(tc4))*/


//// 11

/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" */

/* const alphabetPosition = (text) => {
	const stringToArr = text.toLowerCase().split('');
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let resultArr = [];

	for (let i = 0; i < stringToArr.length; i++) {
  for (let j = 0; j < alphabet.length; j++) {
    if (stringToArr[i] === alphabet[j]) {
      resultArr.push(j + 1)
    }
  }
}
  return resultArr.join(' ');
} */

// or

/* function alphabetPosition(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  return text.toLowerCase()
             .split('')
             .filter(t => letters.indexOf(t) > -1)
             .map(t => letters.indexOf(t)+1 || '')
             .join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); */


/// 12

/* Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar. */

/* const minMax = (arr) => arr.sort((a,b) => a - b).slice(0, 1).concat(arr.sort((a,b) => a - b).slice(-1));

//or 

const minMax1 = (arr) => [Math.min(...arr), Math.max(...arr)];

console.log(minMax([1])); */


//// 13

/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */

/* const generateHashtag = (str) => { 
	let result = '';
	if (str.trim().length !== 0) {
		result = '#' + str.replace(/\s+/g, ' ').trim().split('').filter(i => i !== '#').join('').split('').filter(i => i !== '#').join('').split(' ').map(items =>  items.at(0).toUpperCase() + items.slice(1)).join('');
		if (result.length <= 140) {
			return result;
		} else {
			return false;
		}
	}
   return false;
} */

// or 

/* const generateHashtag = (str) => {

  let hashtag = str.split(' ').reduce((tag, word) => tag + word.charAt(0).toUpperCase() + word.substring(1), '#');
  
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
} */

/* console.log(generateHashtag("#DoWehaveAHashtag"));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag(""));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("  ")); */


/// 14

/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

/* const moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])); */


/// 15 

/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */

/* const expandedForm = (num) => {
  const numToArr = num.toString().split('')
	let resArr = [];

	for (let i = 0; i < numToArr.length; i++) {
		if (numToArr[i] !== '0') {
			resArr.push(numToArr[i] + '0'.repeat(numToArr.length - 1 - i))
		}
	}

	return resArr.join(' + ')
} */

// or 

/* const expandedForm = (num) => {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}

console.log(expandedForm(12));
console.log(expandedForm(70304)); */


/// 16 

/* I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++ */

/* const generateShape = (integer) => {
	let resArr = []
	
	for (let i = 0; i < integer; i++) {
		resArr.push('+'.repeat(integer))
	}
	return resArr.join('\n')
} */

// or

/* function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
} */

/* console.log(generateShape(8)); */

/// 17

/* Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is by substituting the @ and . characters for their literal equivalents in brackets.

Example 1:

user_name@example.com
=> user_name [at] example [dot] com
Example 2:

af5134@borchmore.edu
=> af5134 [at] borchmore [dot] edu
Example 3:

jim.kuback@ennerman-hatano.com
=> jim [dot] kuback [at] ennerman-hatano [dot] com
Using the examples above as a guide, write a function that takes an email address string and returns the obfuscated version as a string that replaces the characters @ and . with [at] and [dot], respectively.

Notes

Input (email) will always be a string object. Your function should return a string.
Change only the @ and . characters.
Email addresses may contain more than one . character.
Note the additional whitespace around the bracketed literals in the examples! */

/* const obfuscate = (email) => email.split('').map(el => el === "@" ? el = ' [at] ' : el === '.' ? el = ' [dot] ' : el).join(''); */

// or

/* const obfuscate = email => email.replace(/@/gi, " [at] ").replace(/\./gi, " [dot] "); */

/* console.log(obfuscate('test@123.com'));
console.log(obfuscate('Code_warrior@foo.ac.uk')); */


/// 18 !

/* Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
Examples:
"In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income."

--> ["a", "of", "on"]


"e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

--> ["e", "ddd", "aa"]


"  //wont won't won't"

--> ["won't", "wont"]
Bonus points (not really, but just for fun):
Avoid creating an array whose memory footprint is roughly as big as the input text.
Avoid sorting the entire array of unique words. */

/* const topThreeWords = (text) => {
	const textToArr = text.toLowerCase().split(' ');
	let sortedArr = textToArr.sort((a, b) => a.localeCompare(b))
	
	let res = [];
	let preRes = [];

    return res;
}


console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); */

//// 19

/* Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10 and for the list [1, 10, 3, 10, 10] , the function should return 4. */

/* const sumNoDuplicates = (numList) => {

	const unicRepNums = [...new Set(numList.filter((e, i, a) => a.indexOf(e) !== i))];
	const unicNums = [...new Set(numList)];
	const resArr = unicNums.filter(i=>!unicRepNums.includes(i))
    .concat(unicRepNums.filter(i=>!unicNums.includes(i)));

	return resArr.reduce((acc, cur) => acc + cur, 0);
} */

// or

/* const sumNoDuplicates = (numList) => numList.filter((i)=> numList.indexOf(i) == numList.lastIndexOf(i)).reduce((a,b)=> a + b, 0); */

//or

/* const sumNoDuplicates = (numList) => numList.reduce((a,b)=>numList.indexOf(b)===numList.lastIndexOf(b) ? a+b : a,0); */

/* console.log(sumNoDuplicates([1, 1, 2, 3]));//5
console.log(sumNoDuplicates([1, 1, 1, 2, 2, 3]));//3
console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));//21 */



//// 20! 

/* In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck! */

/* const permutations = (string) => {
	
	const strToArr  = string.split('');

	const res = []

	for (let i = 0; i < strToArr.length; i++) {

	}


	return strToArr;
}

console.log(permutations('abcd')); */




//// 21!

/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

/* const maxSequence = (arr) => {
	
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); */


/// 22 

/* Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
ShortLongShort.solution("1", "22"); // returns "1221"
ShortLongShort.solution("22", "1"); // returns "1221" */

/* const solution = (a, b) => a.length > b.length ? b + a + b : a + b + a;

console.log(solution('Soon', 'Me'));
console.log(solution('45', '1')); */