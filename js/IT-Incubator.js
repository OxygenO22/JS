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


//// slice(откуда отрезать, [докуда отрезать]) - не мутирует


/* let arr = ["t", "e", "s", "t", 'i', 'n', 'g'];

let twoParArr = arr.slice(1, 3);

let subArr = arr.slice();

console.log( 'arr: ', arr );
console.log( arr === subArr );
console.log( arr.slice(0, 3) );
console.log( arr.slice(1, 3) );
console.log( arr.slice(-2) ); */


//// splice(откуда удаляем, сколько удаляем, вставить, вставить...); - мутирует

/* let arr = ["t", "e", "s", "t", 'i', 'n', 'g'];

let subArr = arr.splice(1, 3);

let subAddArr = arr.splice(0, 0, 'test 1', ' test 2')

console.log('arr: ', arr)
console.log("subArr: ", subArr)
console.log("subAddArr: ", subAddArr) */


//// toSpliced() - as splice() только не мутабельный


/* const months = ['Jan', 'Mar', 'Apr', 'May'];

const newMonth = months.toSpliced(1, 0, 'Feb')

console.log('months: ', months)
console.log('newMonth: ', newMonth) */


//// reduce((acc, item, index) => {} , startValue)


// 1


/* let a = [1, 2, 3, 4 ,5];
let res = a.reduce((sum, curr) => sum + curr, 0);
console.log('res: ', res) */


// 2


/* const fruits = [
{ name: 'apple', quantity: 2 },
{ name: 'banana', quantity: 3 },
{ name: 'orange', quantity: 1 },
];

const totalQuantyty = fruits.reduce((prev, fruit) => prev + fruit.quantity , 0);
console.log('totalQuantyty: ', totalQuantyty) */


// 3


// 3.1

/* const numbers = [5, 6, 7, 10, 6, 7];
const maxNumber = numbers.reduce((prev, curr) => curr > prev ? curr : prev, numbers[0]);
console.log('maxNumber: ', maxNumber); */


// 3.2

/* const numbers1 = [5, 6, 7, 10, 6, 7];
const max = Math.max(...numbers1);
console.log('max: ', max); */


// 4

/* const people = [
{ name: 'Vika', age: 25, budget: 4500 },
{ name: 'Nikita', age: 45, budget: 35000 },
{ name: 'Igor', age: 55, budget: 340 },
{ name: 'Insaf', age: 65, budget: 50000 },
{ name: 'Alyona', age: 75, budget: 20 },
]; // {names: [...], totalAges: ...} 

 const result = people.reduce((acc, user) => {
  acc.names.push(user.name);
  acc.totalAges += user.age;
  acc.totalBudget += user.budget;
  return acc;
}, {names: [], totalAges: 0, totalBudget: 0})

console.log('result:', result) */


// 5


/* const people = [
{ name: 'Vika', age: 25, budget: 4500 },
{ name: 'Nikita', age: 45, budget: 35000 },
{ name: 'Igor', age: 55, budget: 340 },
{ name: 'Insaf', age: 65, budget: 50000 },
{ name: 'Alyona', age: 75, budget: 20 },
]; */
//1

/* const totalBudget = people.reduce((acc, cur) => acc + cur.budget, 0);

console.log('totalBudget:', totalBudget); */

//2 {totalBudget: [], names: []}

/* const people1 = [
{ name: 'Vika', age: 25, budget: 4500 },
{ name: 'Nikita', age: 45, budget: 35000 },
{ name: 'Igor', age: 55, budget: 340 },
{ name: 'Insaf', age: 65, budget: 50000 },
{ name: 'Alyona', age: 75, budget: 20 },
];

const res = people1.reduce((acc, curr, index) => {
  acc.names.push(curr.name);
  let sum = people1.reduce((acc, budg) => acc + budg.budget, 0);
  people1.length === index + 1 && acc.totalBudget.push(sum)
  return acc;
}, { totalBudget: [], names: []})

console.log('res:', res); */


// 3

/* const words = ['Hello', ' ', 'word', '!']

const res = words.reduce((acc, el)=> {
  return acc + el
}, '') 


console.log(res) */


// 4 minVal

/* const arr = [1, 20, 30, 2]

const minVal = arr.reduce((acc, el) => {
  return el < acc ? el : acc
})

console.log(minVal) */


///////////////////////////////////////////////////// Sprint 1 Lesson 4


//// статическое значение


/* let obj = {
  name: 'Bob', // статическое св-во
  age: 55, // статическое св-во
} */

/* const createObj = (key, value) => {
  let newObj = {};
  newObj[key] = value;
  return newObj;
}

console.log(createObj('car', 'BMW')) */


//// динамическое значение


/* const createObj = (key, value) => {
  return {
    [key]: value
  }
}

console.log(createObj('car', 'Audi')) */


//// 1


/* let propName = 'status';

const obj = {
  name: 'Lohn', // static property
  [propName]: 'checked', // dynamic property
}

console.log(obj) */


//// 2


/* let prefix = 'status_';

const obj2 = {
  age: 25,
  [prefix + 'id']: 'new member'
}

console.log(obj2) */


//// 3


/* let index = 2;
let testProp = 'test';

const obj3 = {
  [index + 2]: 4,
  [testProp.toUpperCase()]: 'test'
}

console.log(obj3) */


//// 4 


/* const STATUS_BUSY = 'busy';
const STATUS_READY = 'ready';

const STATUS_LABELS = {
  [STATUS_BUSY]: 'ожидает',
  [STATUS_READY]: 'готово',
}

const drivers = [
  {name: 'Pavel', status: 'busy'},
  {name: 'Anna', status: 'ready'},
  {name: 'Kiril', status: 'busy'},
];

const driverStatuses = drivers.map((driver) => {
  const {status} = driver;
  return STATUS_LABELS[status]
})

console.log(driverStatuses);

// or


const driverStatuses1 = drivers.map((driver) => {
  if (driver.status === STATUS_BUSY) return 'ожидает';
  if (driver.status === STATUS_READY) return 'готово';
})
console.log(driverStatuses1); */


//// 5 Object.keys() - работает без вложенностей, возвр массив ключей


/* const drivers = {name: 'Pavel', status: 'busy', country: {id: 1}}
const result = Object.keys(drivers);
console.log(result); */


//// 6 Object.values() - показывает вложенности но не разворачивает их, возвр массив ключей


/* const drivers = {name: 'Pavel', status: 'busy', country: {id: 1}}
const result = Object.values(drivers);
console.log(result); */


//// 7 Object.entries() - показывает вложенности но не разворачивает их, возвр массив массивов


/* const drivers = {name: 'Pavel', status: 'busy', country: {id: 1}}
const result = Object.entries(drivers);
console.log(result); */


//// 8 new Map, new Set


//// 8.1 new Map () - коллекция ключ/значение. Ключи могут быть любого типа

/* let map = new Map();

const func = () => alert('hello');

map.set('1', 'string value');
map.set(2, 'number value');
map.set(true, 'boolean value');
map.set([1, 2], 'array value');
map.set({name: 'Al'}, 'object value');
map.set(func(), 'func value');

//map.get(func());

console.log(map.get(func()))
console.log(map.get('1'))

// map.clear(); - очищает
// map.delete(2) - удаляет по ключу

console.log(map.size)
console.log(map)

let newMap = new Map([['key', 'value'], [1, 'value 2']])
console.log(newMap) */

//// 8.2 new Set () - коллекция, которая может содержать только уникальные значения без ключей


/* let set = new Set();

set.add('value1');
set.add('value2');
set.add('value1');
set.delete('value1')

console.log(set.has('value1'))


console.log(set) */

/* let numbers = [1, 1, 1, 3, 4, 5, 6, 76, 7, 8, 9, 0, 6];

let uniqueNum = new Set(numbers)

//// !!!!
let uniqueNum2 = [...new Set(numbers)]

console.log(uniqueNum)
console.log(uniqueNum2)
console.log([...uniqueNum]) */



/////////////////////////////////////////// Lesson 5 sprint 3 //////////////////////////


// Lexical evironment, Замыкание, Рекурсия

// Замыкание - способность функции запомнить свое лексическое окружение  -> () => {}

// Lexical environment, closure, recursion

// let car = "bmw";

// function startEngine() {
//   // const car = "kia";

//   return () => console.log(`Start ${car}`);
// }

// const foo = startEngine();

// car = "audi";

// foo();

// const globalLE = {
// 	environmentRecords: {

// 	},

// 	outer: null
// }

// globalLE {foo: func, a: undefined} -> null

// foo();
// bar();
// baz();

// console.log(a);
// // bar();
// function foo() {
//   console.log("foo");
// }

// const bar = function () {
//   // globalLE {foo: func, bar: func} -> null
//   console.log("bar");
// };

// // bar();

// const baz = () => {
//   console.log("baz");
// };

// // bar();

// var a = "str"; // globalLE {foo: func, a: 'str'} -> null
// let b = 10;
// const c = 20;

// // console.log(a);

// globalLE {} -> null

// let car = 'bmw' // globalLE {car: 'bmw'} -> null

// car = 'kia'// globalLE {car: 'kia'} -> null

// while() {
// 	// whileLE {}

// 	const car = 'audi'
// }

// const arr = []// globalLE {car: 'kia', arr: []} -> null
// const obj = {}// globalLE {car: 'kia', arr: [], obj: {}} -> null

// globalLE {startEngine: func, car: undefined} -> null

// var car = "bmw"; // globalLE {startEngine: func, car: 'bmw'} -> null

// function startEngine() {
//   // startEngineLE {} -> globalLE

//   // const car = "kia";
//   // console.log(`Start ${car}`);

//   return () => console.log(`Start ${car}`);
// }

// const foo = startEngine(); // globalLE {startEngine: func, car: 'bmw', foo: func} -> null

// car = "audi"; // globalLE {startEngine: func, car: 'audi', foo: func} -> null

// foo();

// globalLE {} -> null

// let car = "bmw"; // globalLE {} -> null

// const startEngine = () => {
//   // globalLE {car: 'bmw', startEngine: func} -> null
//   // {} -> globalLE
//   // car = "audi";
//   console.log(`Start ${car}`);
// };

// car = "kia"; // globalLE {car: 'kia', startEngine: func} -> null

// startEngine();

// const App = () => {
// 	const foo = () => {} // appLE {foo: func}
// 	foo(10)
// 	<Button bar={foo} />
// }

// const Button = ({bar}) => {
// 	// buttonLE {bar: func}
// 	bar(20)
// }

// ---------------------------

// globalLE {} -> null
// let count = 0;

// const counterCreator = () => {
//   // counterCreatorLE1 {count} -> globalLE
//   // counterCreatorLE2 {count} -> globalLE
//   let count = 0;

//   return () => {
//     // {} -> counterCreatorLE1
//     // {} -> counterCreatorLE2
//     let count = 0;
//     console.log(++count);
//   };
// };

// const counter1 = counterCreator(); // globalLE {counter: func} -> null
// const counter2 = counterCreator(); // globalLE {counter: func} -> null

// console.log(counter1 === counter2);

// counter1();
// counter1();
// counter1();

// counter2();
// counter2();
// counter2();

// ---------------------------

// 2(4) --> 2 * 2(3) --> 2 * 2 * 2(2) --> 2 * 2 * 2 * 2(1)

// const pow = (x, n) => {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// };

// console.log(pow(2, 8000));

// 5! --> 5 * 4! --> 5 * 4 * 3! --> 5 * 4 * 3 * 2! --> 5 * 4 * 3 * 2 * 1!

// let count = 0;

// const factorial = (n) => {
//   console.log(++count);
//   if (n === 1) {
//     return n;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(8000));

// globalLE {j: 1}

// let j = 1;
/* for (var j = 1; j < 50; j++) {
  // {j: 1}
  // {j: 2}
  setTimeout(() => console.log(j), 1000);
} */





  /////////////////////////////////////////// Lesson 6 sprint 3 //////////////////////////


  /// Promises, create Promise, .then .catch .finally

  /// 1

  /* const delay = ms => new Promise((res, rej) => {
    setTimeout(() => res(), ms)
  })

  delay(1000).then(() => console.log('Hello!')) */


  /// 2

/* const delay = ms => new Promise((res, rej) => {
    setTimeout(() => rej('reject1 '), ms)
  })

 delay(0).catch((t) => t + "catch1")
 .catch((t) => t + "catch2")
 .then((t) => t + "then1")
 .finally((t) => t + "finally")
 .then((t) => console.log(t)); */



 // promise .then .catch .finally

// function fetchCallback(url, callback) {
// 	//
// 	callback()
// }

/* fetchCallback("https://booksstore.com/authors", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fetchCallback(
      `https://booksstore.com/authors/${data.authorId}`,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          fetchCallback(
            `https://booksstore.com/authors/authorId/${data.books}`,
            (err, data) => {
              if (err) {
                console.log(err);
              } else {
                fetchCallback(
                  `https://booksstore.com/authors/authorId/books/${data.bookId}`,
                  (err, data) => {
                    if (err) {
                      console.log(err);
                    } else {
                      fetchCallback(
                        `https://booksstore.com/authors/authorId/books/bookId/${data.page}`,
                        (err, data) => {
                          if (err) {
                            console.log(err);
                          } else {
                            console.log(data);
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  }
}); */

// fetchPromise("https://booksstore.com/authors")
// 	.then((data) => {
// 		fetchPromise(`https://booksstore.com/authors/${data.authorId}`)
// 			.then((data) => {
// 				fetchPromise(`https://booksstore.com/authors/${data.authorId}`)
// 				.then((data) => {

// 			})
// 		})
// 	})

/* fetchPromise("https://booksstore.com/authors")
  .then((data) => {
    return fetchPromise(`https://booksstore.com/authors/${data.authorId}`);
  })
  .then((data) => {
    return fetchPromise(
      `https://booksstore.com/authors/authorId/${data.books}`
    );
  })
  .then((data) => {
    return fetchPromise(
      `https://booksstore.com/authors/authorId/books/${data.bookId}`
    );
  })
  .then((data) => {
    return fetchPromise(
      `https://booksstore.com/authors/authorId/books/bookId/${data.page}`
    );
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* const fetchAsync = async () => {
  try {
    const dataFrom1request = await fetchPromise(
      "https://booksstore.com/authors"
    );
    const dataFrom2request = await fetchPromise(
      `https://booksstore.com/authors/${dataFrom1request.authorId}`
    );
    const dataFrom3request = await fetchPromise(
      `https://booksstore.com/authors/authorId/${dataFrom2request.books}`
    );
    const dataFrom4request = await fetchPromise(
      `https://booksstore.com/authors/authorId/books/${dataFrom3request.bookId}`
    );
    const dataFrom5request = await fetchPromise(
      `https://booksstore.com/authors/authorId/books/bookId/${dataFrom4request.page}`
    );
    console.log(dataFrom5request);
		return [dataFrom1request, dataFrom2request ....]
  } catch (err) {
    console.log(err);
  }
};

fetchAsync().then((dataArrs) => {
  console.log("then from async");
}); */

// promise

// function Promise(executor) {
//   //
//   const resolve = (data) => {
//     return {
//       state: "fulfilled",
//       result: data,
//     };
//   };

//   const reject = (err) => {
//     return {
//       state: "rejected",
//       result: err,
//     };
//   };

//   executor(resolve, reject);
// }

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("some data from server");
//     rej("error from server");
//   }, 2000);
// });

// console.log("promise", promise);

// import fetchPromise from 'fetchPromise'

// const axios = {
// 	get(url) {
// 		return new Promise((res, rej) => {
// 			fetch(url, (err, data) => {
// 				if(err) {
// 					rej(err)
// 				}
// 				res(data)
// 			})
// 		})
// 	}
// }

// const pr = axios.get('books.com')
// const pr = fetchPromise('books.com')

// setLoading(true);

// function fetchPromise() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // rej("error from server");
//       // res("some data from server");
//       // throw new Error("ERROR");
//       // return false;
//     }, 2000);
//   });
// }

// fetchPromise()
//   .then(
//     (data) => {
//       console.log(data);
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .catch((err) => {
//     console.log("catch", err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// fetchPromise()
//   .then((data) => {
//     console.log("then1", data);
//     // return new Promise.resolve(5)
//     return 5;
//   })
//   .then((data) => {
//     console.log("then2", data);
//     // return a;
//     // throw new Error("some error");
//     return 20;
//   })
//   .finally((data) => {
//     console.log("finally1", data);
//     return 50;
//   })
//   .then((data) => {
//     console.log("then3", data);
// 		// return new Promise.resolve()
//   })
//   .then((data) => {
//     console.log("then4", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((data) => {
//     console.log("then5", data);
//   });

// promise.catch((err) => {
//   console.log(err);
// });

// promise.finally(() => {
// 	setLoading(false)
// 	console.log('finally');
// })

// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Пример использования:

// function delay(ms) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("reject1 ");
//     }, ms);
//   });
// }

// // delay(1000).then(() => console.log("Hello!"));

// delay(1000)
//   .catch((t) => t + "catch1 ")
//   .catch((t) => t + "catch2 ")
//   .then((t) => t + "then1 ")
//   .finally((t) => t + "finally ")
//   .then((t) => console.log(t));

// const promiseFetch = (url) => {
//   return new Promise((res, rej) => {
//     fetch(url, (err, data) => {
//       if (err) {
//         rej(err);
//       } else {
//         res(data);
//       }
//     });
//   });
// };

/* const promiseFetch = () => {
  return new Promise((_, rej) => {
    setTimeout(rej, 1000);
  });
};

promiseFetch("https://samuray.com/users").then((data) => {
  console.log("resolve");
}); */
// .catch((err) => {
//   console.log("reject", err);
// });






  /////////////////////////////////////////// Lesson 7 sprint 3 //////////////////////////

  // Promise, async/await, static methods


  //import fetch from "node-fetch";

// fetch("https://yahoo.com")
//   .then((data) => {
//     console.log("data from yahoo", data.url);

//     return fetch("https://bing.com");
//   })
//   .then((data) => {
//     console.log("data from bing", data.url);

//     return fetch("https://google.com");
//   })
//   .then((data) => {
//     console.log("data from google", data.url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const asyncFetch = async () => {
//   try {
//     const yahooData = await fetch("https://yahoo4.com");
//     console.log("data from yahoo", yahooData);

//     const bingData = await fetch("https://bing.com");
//     console.log("data from bing", bingData.url);

//     const googleData = await fetch("https://google.com");
//     console.log("data from google", googleData.url);
//   } catch (err) {
//     console.log("ERROR", err);
//   }
// };

// asyncFetch();

// ------------------------------

// const generator = function* foo(){}

// function* gerateSalaryWithBonus(salary) {
//   console.log("before 1 yield");
//   const num = yield salary + (salary / 100) * 15;
//   console.log("before 2 yield", num);
//   yield salary + (salary / 100) * 20;
//   console.log("before 3 yield");
//   yield salary + (salary / 100) * 25;
//   console.log("before 4 yield");
//   yield salary + (salary / 100) * 30;
//   console.log("before 5 yield");
//   return salary + (salary / 100) * 35;
//   // return
// }

// const generator = gerateSalaryWithBonus(1000);

// console.log(generator.next());

// // console.log(gerateSalaryWithBonus(1000));

// // ------------------------------

// if (true) {
//   console.log(generator.next(10));
// }

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// --------------------------------------

// Определите функцию с именем asyncAlt, которая принимает функцию генератора
//в качестве аргумента.

// function newAsync(generatorFunction) {
// 	// Возвращаем функцию
// 	return function () {
// 		// Создайте и назначьте объект-генератор
// 		const generator = generatorFunction();

// 		// Определите функцию, которая принимает следующую итерацию генератора.
// 		function resolve(next) {
// 			// Если генератор закрыт(завершен) и больше нет значений для вывода,
// 			// резолвим последнее значение.
// 			if (next.done) {
// 				return Promise.resolve(next.value);
// 			}

// 			//Если еще есть значения, для следующих yield, то это промис
// 			// и их необходимо резолвить.
// 			return Promise.resolve(next.value).then((response) => {
// 				return resolve(generator.next(response));
// 			});
// 		}

// 		// Начинаем резолвить промис
// 		return resolve(generator.next());
// 	};
//  }

// const getUsers = newAsync(function*() {
// 	const response = yield fetch("https://www.google.com/search?q=js")
// 	console.log(response.url);
//  })

// getUsers()

// ------------------------------

// all, race, any, allSettled

// ALL

// const pr1 = fetch("https://yahoo.com");
// const pr2 = fetch("https://bing4535.com");
// const pr3 = fetch("https://google.com");

// const bigPromise = Promise.all([pr1, pr2, pr3]);

// bigPromise
//   .then((bigData) => {
//     console.log(bigData);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// Promise.all([
//   fetch("https://yahoo.com"),
//   fetch("https://bing.com"),
//   fetch("https://google.com"),
// ])
//   .then((bigData) => {
//     console.log(bigData);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// RACE

// Promise.race([
//   fetch("https://yahoo.com"),
//   fetch("https://bing.com"),
//   fetch("https://google.com"),
// ])
//   .then((data) => {
//     console.log(data.url);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// ANY

// Promise.any([
//   fetch("https://yahoo3453.com"),
//   fetch("https://bing245354.com"),
//   fetch("https://google4355.com"),
// ])
//   .then((data) => {
//     console.log(data.url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// AllSETTLED

/* Promise.allSettled([
  fetch("https://yahoo645.com"),
  fetch("https://bing3455.com"),
  fetch("https://google5466.com"),
]).then((data) => {
  console.log(data);
}); */




/////////////////////////////////////////// Lesson 8 sprint 3 //////////////////////////

// eventloop






// const a = () => {}

// const b = () => {
// 	a()
// }

// const c = () => {
// 	b()
// }

// c()

// console.log("start");

// setTimeout(() => {
//   console.log("timeout1");
// });

// setTimeout(() => {
//   console.log("timeout2");
// }, 0);

// console.log("end");

// setTimeout(function a() {
//   console.log("setTimeout1");
// }, 0);

// // Promise.resolve().then(function b() {
// //   console.log("Promise");
// // });

// setTimeout(function a() {
//   console.log("setTimeout2");
// }, 1000);

// ------------------------------

// function a() {
//   setTimeout(() => {
//     console.log("1");
//   }, 1000);
// }
// function b() {
//   console.log("2");
// }

// a();

// new Promise(function (res, rej) {
//   console.log("3");
//   res();
// }).then(() => {
//   setTimeout(function timer() {
//     console.log("4");
//   }, 0);
// });

// b(); // 2, 3, 4, 1

// ------------------------------

// setTimeout(() => {
//   console.log("1");
// }, 0);

// setTimeout(() => {
//   console.log("2");
// }, 0);

// new Promise(function (res, rej) {
//   console.log("3");
//   res();
//   console.log("4");
// }).then(() => {
//   console.log("5");
// });

// console.log("6");

// async function test1() {
//   console.log("7");
//   await test2();
//   console.log("8");
// }

// async function test3() {
//   console.log("11");
//   await test4();
//   console.log("12");
// }

// async function test2() {
//   console.log("9");
//   test3();
// }

// async function test4() {
//   console.log("13");
// }

// test1();

// console.log("10"); // 3, 4, 6, 7, 10, 5, 8, 9, 1, 2

// ------------------------------

// console.log(1);

// setTimeout(() => {
//   console.log(2);
//   Promise.resolve().then(() => {
//     console.log(3);
//   });
// });

// new Promise((res, rej) => {
//   console.log(4);
//   res(5);
// }).then((data) => {
//   console.log(data);

//   Promise.resolve()
//     .then(() => {
//       console.log(6);
//     })
//     .then(() => {
//       console.log(7);

//       setTimeout(() => {
//         console.log(8);
//       }, 0);
//     });
// });

// setTimeout(() => {
//   console.log(9);
// });

// console.log(10); // 1, 4, 10, 5, 6, 7, 2, 3, 9, 8

// ------------------------------

/* async function first() {
  console.log(9);
  await Promise.resolve(2).then((r) => console.log(r));
  console.log(0);
  await Promise.resolve(3).then((r) => console.log(r));
}

async function second() {
  console.log(10);
  await Promise.resolve(4).then((r) => console.log(r));
  console.log(11);
  await Promise.resolve(5).then((r) => console.log(r));
}

first();
second();

const promises = Promise.resolve("new Promise");
promises.then((str) => console.log(str)); */





/////////////////////////////////////////// Lesson 1(8) sprint 4 //////////////////////////




/* Урок 5. Событися в JavaScript. Паттерны проектированния (publisher/subscriber) */


/* const smallDiv = document.getElementById('small')
const mediumDiv = document.getElementById('medium')
const bigDiv = document.getElementById('big')
const link = document.getElementById('linkId')

function handler1(e) {
  e.stopPropagation()
  console.log(e.target)
}

const blockDefaultBehavior = e => {
  e.preventDefault()
}

smallDiv.addEventListener('click', handler1)
mediumDiv.addEventListener('click', handler1)
bigDiv.addEventListener('click', handler1)
link.addEventListener('click', blockDefaultBehavior) */

  

/////////////////////////////////////////// Lesson 2(9) sprint 4 //////////////////////////




// Контекст вызова, this, call/apply/bind, constructors

//console.log(this)

/* const car = {
  color: 'red',
  maxSpeed: 200,
  showMaxSpeed() {
    console.log(this.maxSpeed)
  },
}
 
car.showMaxSpeed() */



/* let car = {
  color: 'red',
  maxSpeed: 200,
  showMaxSpeed() {
    console.log(car.maxSpeed) // not working for newCar
    console.log(this.maxSpeed) // working for newCar
  },
}
 
const newCar = car
car = null
 
newCar.showMaxSpeed() */


/* const bmw = {
 brand: "bmw",
 speed: 200,
 showMaxSpeed() {
   console.log(this.speed);
 },
};
const scooter = {
 speed: 60,
};
const kia = {
 speed: 150,
};
bmw.showMaxSpeed.call(scooter);
bmw.showMaxSpeed.apply(bmw);
bmw.showMaxSpeed.apply(kia); */



/* const scooter = {
  maxSpeed: 60,
}
 
const bike = {
  maxSpeed: 180,
}
 
const car1 = {
  maxSpeed: 200,
  showMaxSpped() {
    console.log(this.maxSpeed)
  },
}
 
car1.showMaxSpped.bind(scooter).apply(bike) */


/* const dialer = {
  name: 'Toyota',
  models: ['Yaris', 'Corolla', 'Prado'],
  showModelsInDialer() {
    this.models.forEach(function (model) {
      console.log(`Dialer: ${this.name}, have: ${model}`)
    })
  },
}
 
dialer.showModelsInDialer() */

  

/////////////////////////////////////////// Lesson 3(10) sprint 5 //////////////////////////



