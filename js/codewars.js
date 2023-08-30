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

const countBites = (integer) => {
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


console.log(countBites(1234));