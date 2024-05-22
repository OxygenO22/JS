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


//////// JS Native ///////////////////////////////////////////////////////////

//// Спринт 1 неделя 1

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

const arr = [1, 2, 3];

const Hello = ([first, ...rest]) => {
  console.log(first)
  console.log(firrestst)
} 

Hello(arr)