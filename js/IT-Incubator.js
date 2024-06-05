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


//////// //////////////////////////////////////////// JS Native


///////////////////////////////////////////////////// Sprint 1 Lesson 1

 /* const users1 = {
 // #890--99876
 id: 1,
 name: 'Bob',
 isStudent: true,
 };


 const users2 = {...users1};

 console.log(users1 === users2); */

 /////

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
isStudent: true,
},
]; */

///

/* const superUser = {
  id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
      address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
  },
};


const superUser2 =  structuredClone(superUser);

superUser2.address.city = 'Minsk' 

console.log('superUser :', superUser)
console.log('superUser2 :', superUser2) */


/// деструктуризация
/* const employee = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  midlName: undefined,
}

const firstName = 'Nina';

const { firstName: name, lastName, midlName = 'No midlName' } = employee;

console.log('midlName :', midlName);
console.log('firstName :', firstName);
console.log('name :', name);
 */

///

/* const employee1 = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  middleName: 'Ivanovich',
  message: 'Hello world!',
  permission: {
    canEdit: true,
    canDelete: false,
    role: 'user',
  },
};

const { permission: { canDelete, canEdit }, } = employee1;

console.log('canDelete :', canDelete); */


//// arrays


//case1
/* const colors = ['red', 'blue', 'green', 'white', 'black'];

const [firstEl, secondEl] = colors;
 */
//case2

/* const colors = [{t: 1}, 'blue', 'green', 'white', 'black'];

const [firstEl, secondEl, , whiteWalue] = colors;

console.log(firstEl.t)
console.log(whiteWalue) */

//case3

/* const colors = ['red', ['first val', 'sec val'], ,];

const [firstEl, [nestedVal1], thirdVal = 'test', find ] = colors;

console.log(firstEl)
console.log(nestedVal1)
console.log(thirdVal)
console.log(find) */

/* const arr = [1, 2, 3];

const Hello = ([first, ...rest]) => {
  console.log(first)
  console.log(rest)
} 

Hello(arr) */


///////////////////////////////////////////////////// Sprint 1 Lesson 2

// push, pop, shift, unshift

/* const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

const res = names.push('New name');

console.log('names: ', names)
console.log('res: ', res) */

//// pop

/* const names = [];

const popRes = names.pop()

console.log('names: ', names)
console.log('popRes: ', popRes) */


//// shift

/* const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

const shiftedRes = names.shift()

console.log('names: ', names) */

//// unshift

/* const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

const shiftedRes = names.unshift('new name')

console.log('names: ', names) */

//// reverse

/* const arr = [1, 2, 3];

arr.reverse(); */

/// split - строка в массив

/*

//1
const str = 'ab-cd-ef';

const strArr = str.split('-')

console.log("strArr: ", strArr) */


//2
/* const str = 'ab-cd-ef';

const strArr = str.split('-', 2)

console.log("strArr: ", strArr) */


/// join - массив в строку 

/* const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

const joinedRes = names.join(', ')

console.log("joinedRes: ", joinedRes) */

/// 
/* const telephoneNumber = '123456789';

const res = telephoneNumber.split('').reverse().join('')

console.log("joinedRes: ", res) */

///// concat

/* const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const nestedArr = [[5, 6], [7, 8, [9, 10]]];

const res = arr1.concat(arr2, arr3);

console.log('res: ', res) */

/// flat

/* const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const nestedArr = [[5, 6], [7, 8, [9, 10]]];

const res2 = arr1.concat(arr2, arr3, nestedArr);

console.log('res: ', res2)

const res3 = res2.flat(Infinity)

console.log('res3: ', res3) */

/// forEach !!!!

/* const arr = [1, 2, 3, 4]
let sum = 0;

const res = arr.forEach((el) =>  {
  return sum += el;
}) 

console.log('res: ', res) */

//// indexof()

/* const arr = [1, 2, 3, 4]

const res = arr.indexOf(3)// 2

console.log(res) */

//// lastIndexof()

/* const arr = [1, 2, 3, 4]

const res = arr.lastIndexOf(4)// 3

console.log(res) */


///find

/* const strArr = ['str', 'strststs', 'fgfgf', 'dff', 'fgdgfdgd'];

const res = strArr.find((el) => {
  return el.length === 3
})// 3

console.log(res) */

/* const strArr = [1, 2, 3, 4, 5];

const res = strArr.find((el) => {
  return  el % 2 === 0
})

console.log(res)
 */


/// includes

/* const num = [1, 2, 3, 4, 5];
const res = num.includes(5)
console.log(res) */


///filter

/* const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const res = words.filter(str => str.length > 5)

console.log('res: ', res) */

/// sort - мутирует

//1 

/* const names = ['Alex', '!alex', 'alex', 'Виктор', 'Dymych', 'Valera', 'Igor', 'Ignat'];
const numbers = [1, 2, -3525523, 366643, -3, 15215];

console.log(numbers.sort()) // по юникоду
console.log(numbers.sort((a, b) => a - b))
console.log(numbers.sort((a, b) => b - a))
console.log(names.sort()) /// по юникоду
console.log(names.sort((a, b) => a - b)) //!!! сортируется по номерам в юниткоде
console.log(names.sort( (a, b) => a.localeCompare(b) )) //!!! для строк

console.log(names === names.sort((a, b) => a - b)) */

//2
/* const numbers = [1, 2, -3525523, 366643, -3, 15215];

const res = numbers.sort((a, b) => a - b)

console.log(numbers.sort((a, b) => a - b)) */

//3

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
name: 'alex',
isStudent: true,
},
];

console.log(users.sort((a, b) => a.name.localeCompare(b.name))) */

// toSorted() - работает как sort, но не мутирует!!!!! 

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
name: 'alex',
isStudent: true,
},
];

console.log(users.toSorted((a, b) => a.name.localeCompare(b.name))) */



/* const users1 = [
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
const res = users1.map(s => s.name)

console.log(res) */

// полифилы

/* const users1 = [
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

const newMap = (arr) => {
  const res = []

  for( let i = 0; i < arr.length; i++) {
    res.push(arr[i].name)
  }

  return console.log(res)  
}*/

//или
/* newMap(users1)

const newMap1 = (arr, callback) => {
  const res = []

  for( let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i]))
  }

  return console.log(res) 
}

newMap1(users1, (user) => user.name) */



///////////////////////////////////////////////////// Sprint 1 Lesson 3

