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


/////////////////////////// Sprint 2 Lesson 2


//// 1


let fruits = ['apple', 'banana', 'orange'];