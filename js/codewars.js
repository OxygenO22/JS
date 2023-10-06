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