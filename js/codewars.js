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