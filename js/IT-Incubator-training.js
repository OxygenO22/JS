/////////////////////////// Sprint 1 Lesson 1


//// 1 


/* const a = {};
const b = {};
const c = a;
const d = c;

console.log(a === b);
console.log(a === c);
console.log(c === d);
console.log(a === c); */


//// 2 


/* const a = {};
const b = a;
b['test'] = 'test value';

console.log(b === a);
console.log(a); */


//// 3


/* const user = {
  name: 'John',
  address: {
    city: 'New York',
    country: 'USA'
  },
};

const updatedUser = {...user, address: {...user.address}};

updatedUser.address.city = 'Texas';

console.log('user city: ', user);
console.log('updatedUser city: ', updatedUser); */


//// 4


/* const originalArray = [1, 2, 3, 4, 5];

const addElementToArray = (array, item) =>  [...array, item];

const newArray = addElementToArray(originalArray, 6);

console.log(newArray); */


//// 5.1

/* const user = { name: 'John', age: 25, city: 'New York' };

const {name, age, city} = user;

console.log("name: ", name);
console.log("age: ", age);
console.log("city: ", city); */


//// 6.2


/* const fruits = ['apple', 'banana', 'orange'];

const secondFruit = fruits[1];
const thirdFruit = fruits[2];

//or

const [, secondFruit, thirdFruit] = fruits;

console.log("secondFruit: ", secondFruit);
console.log("thirdFruit: ", thirdFruit); */


//// 7.3


/* const person = { name: 'Alice', age: 30 };

// Деструктуризация в параметрах функции
function printPersonDetails({name, age}) {
 console.log(`Name: ${name}, Age: ${age}`);
}

printPersonDetails(person);   */


//// 8.4


/* const car = { brand: 'Toyota', model: 'Camry' };

const {brand, model, year = 2022 } = car;

console.log('brand: ', brand);
console.log('model: ', model);
console.log('year: ', year); */


//// 9.5


/* const students = [
 { name: 'Alex', grade: 'A' },
 { name: 'Emma', grade: 'B' },
 { name: 'Chris', grade: 'C' },
];

const student1 = students[0].name;
const student2 = students[1].name;

//or

const [{ name: student1 }, , { name: student3 }] = students;

console.log('student1: ', student1);
console.log('student2: ', student2); */


//// 10.6


/* const person = { firstName: 'Max', lastName: 'Johnson' };

const {firstName: name, lastName: thirdName, age = 25} = person;

console.log('name: ', name);
console.log('thirdName: ', thirdName);
console.log('age: ', age); */


/////////////////////////// Sprint 1 Lesson 2


//// 1


/* let fruits = ['apple', 'banana', 'orange'];

fruits.push('pinapple');
fruits.push('watermelon');

console.log('fruits: ', fruits); */


//// 2


/* const users = [
 {
   id: 1,
   name: 'Bob',
   isStudent: true,
 },
 {
   id: 2,
   name: 'Alex',
   isStudent: true,
 },
 {
   id: 3,
   name: 'Ann',
   isStudent: true,
 },
 {
   id: 4,
   name: 'Donald',
   isStudent: false,
 },
];


const lastUser = users.pop();

console.log('lastUser: ', lastUser);
console.log('users: ', users); */


//// 3


/* const users = [
 {
   id: 1,
   name: 'Bob',
   isStudent: true,
 },
 {
   id: 2,
   name: 'Alex',
   isStudent: true,
 },
 {
   id: 3,
   name: 'Ann',
   isStudent: true,
 },
 {
   id: 4,
   name: 'Donald',
   isStudent: false,
 },
];

const firstUser = users.shift();

console.log('firstUser: ', firstUser);
console.log('users: ', users); */


//// 4


/* const users = [
 {
   id: 1,
   name: 'Bob',
   isStudent: true,
 },
 {
   id: 2,
   name: 'Alex',
   isStudent: true,
 },
 {
   id: 3,
   name: 'Ann',
   isStudent: true,
 },
 {
   id: 4,
   name: 'Donald',
   isStudent: false,
 },
];

users.unshift({id: 0, name: "Test", isStudent: false})

console.log('users: ', users); */


//// 5


/* const str = 'JavaScript is awesome';

const res = str.split(' ').reverse().join(' ');

console.log('res: ', res); */


//// 6


/* const mergeArrays = (arr1, arr2) => arr1.concat(arr2);

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi']));  */


//// 7


/* const flattenArray = (arr) => arr.flat(Infinity);

console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); 
console.log(flattenArray([1, [2, [3, [4, [5]]]]]));  */


//// 8


/* const numbers = [10, 20, 30, 40, 50];
const fruits = ["apple", "banana", "orange", "kiwi"];
 
const findFirstElement = (arr, condition) => arr.find(condition); 

let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);

console.log(firstNumberGreaterThan25)

let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('o'));
console.log(firstFruitStartingWithO);  */


//// 9


/* let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange', 'kiwi'];

const checkElement = (arr, el) => arr.includes(el);

console.log(checkElement(numbers, 3));
console.log(checkElement(fruits, 'grape'));  */


//// 10


/* let numbers1 = [10, 20, 30, 40, 50];
let numbers2 = [5, 15, 25, 35, 45];

const filterGreaterThan = (arr, option) => arr.filter(item => item > option)

console.log(filterGreaterThan(numbers1, 25)); 
console.log(filterGreaterThan(numbers2, 20)); */ 


//// 11


/* let people = [
 { name: 'John', age: 30 },
 { name: 'Alice', age: 25 },
 { name: 'Bob', age: 35 },
];

const sortAlphabeticallyByProperty = (arr, option) => arr.toSorted((a, b) => a[option].localeCompare(b[option]))

console.log(sortAlphabeticallyByProperty(people, 'name'));  */



/////////////////////////// Sprint 1 Lesson 3


//// Задачи на закрепления slice


//// 1


/* let str = 'Hello, world!';
let startIndex = 7;

const getSubStr = (str, startIndex) => str.slice(startIndex);


console.log(getSubStr(str, startIndex)); */


//// 2


/* const getLastElements = (arr, endIndex) => arr.slice(-endIndex)

console.log(getLastElements([1, 2, 3, 4, 5], 3)); */ 


//// 3


/* const extractPath = (str, startIndex) => str.slice(startIndex);

console.log(extractPath('https://example.com/blog/article', 19)); */


//// Задачи на splice


/// 1


/* let numbers = [1, 2, 3, 4, 5];

const removeElement = (numbers, indexForDel) => {
  numbers.splice(indexForDel, 1);
  return numbers;
}

console.log(removeElement(numbers, 2)); */


/// 2


/* let numbers = [1, 2, 4, 5];

const insertElement = (numbers, index, newEl) => {
  numbers.splice(index, 0, newEl)
  return numbers;
} 

console.log(insertElement(numbers, 2, 3)); */


//// Задачи на reduce


/// 1


/* let numbers = [1, 2, 3, 4, 5];

const sumArray = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sumArray(numbers));  */


/// 2


/* const sumStringLengths = (arr) => arr.reduce((acc, cur) => acc + cur.length, 0);

console.log(sumStringLengths(['apple', 'banana', 'cherry']));  */


/// 3


/* const sumNestedArrays = (arr) => arr.flat(Infinity).reduce((acc, cur) => acc + cur, 0);

console.log(sumNestedArrays([[1, 2], [3, 4, 5], [6, 7, 8, 9],]));  */


/// 4


/* const numbers = [1, 2, 3, 3, 4, 5, 5, 6];

const removeDuplicates = (numbers) => numbers.reduce((acc, cur) => {
  if (!acc.includes(cur) ) {
    acc.push(cur)
  }
  return acc
}, [] )

console.log(removeDuplicates(numbers));  */


//// 5






















