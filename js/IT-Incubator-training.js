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

/* let todolistID1 = 1;
  let todolistID2 = 2;

let tasks = {
    [todolistID1]: [
      { id: 1, title: "HTML&CSS", isDone: true },
      { id: 2, title: "JS", isDone: true },
      { id: 3, title: "ReactJS", isDone: false },
      { id: 4, title: "Rest API", isDone: false },
      { id: 5, title: "GraphQL", isDone: false },
    ],
    [todolistID2]: [
      { id: 1, title: "HTML&CSS2", isDone: true },
      { id: 2, title: "JS2", isDone: true },
      { id: 3, title: "ReactJS2", isDone: false },
      { id: 4, title: "Rest API2", isDone: false },
      { id: 5, title: "GraphQL2", isDone: false },
    ],
  } */


//// 6

/* const user = {
  name: 'Alex',
  age: 35
}

const increaseAge = (user) => {
  user.age++;
} */



/////////////////////////// Sprint 1 Lesson 4

  

//// 1


/* const country_proprty = 'country';
const property = 'new_';
	
const person = {
 name: 'Kirill',
 age: 24,
 address: {
   [country_proprty]: 'Poland',
   [property + 'city']: 'Warsaw',
 },
};

const personEqual = person;
const personSpread = {...person};
const personClone = structuredClone(person);

console.log(personSpread === person);
console.log(personEqual === person);

person.address[country_proprty] = 'Belarus';

console.log(personSpread.address[country_proprty]);
console.log(personClone.address[country_proprty]);


const superUser = {
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

console.log(Object.keys(superUser));
console.log(Object.values(superUser));

const {address: {street, suite}} = superUser;

console.log(street);
console.log(suite); */

/*const student = {
  name: "Eva",
};
const newStudent = student;
const myFriend = {
  ...newStudent,
};
const newUser = {
  name: "Vladislav",
};
const myFriendName =
  student.name !== myFriend.name ? newUser.name : student.name;


   function Colorize() {
  const [color, setColor] = useState<string>("black");
  const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"];
  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "black",
  };
  const getColor = (colors: string[]) => {
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    return nextColor;
  };
  return (
    <main>
      <div style={{ ...styles, backgroundColor: color }} />
      <div>
        <button onClick={() => setColor(getColor(colors))}>
          Get random color
        </button>
      </div>
    </main>
  );
} */

  /* const user = {
    name: "Masha",
    age: 83,
    friends: ["Elizaveta", "Elena", "Liza"],
  };
  const updatedUser = {
    ...user,
    friends: user.friends,
  };
  console.log(user.friends === updatedUser.friends); */

  /* const user = {
    name: "Rita",
    age: 51,
    friends: ["Egor", "Vladislav", "Elizaveta"],
  };
  const newFriend = "Masha";
  const friends = [...user.friends, newFriend];

  const updatedUser = { ...user, friends: friends };

  console.log(updatedUser); */




  /* type StudentType = {
    id: number;
    name: string;
  };
  type FriendsType = {
    [key: string]: Array<string>;
  };
   const students: Array<StudentType> = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Ann" },
    { id: 4, name: "Charley" },
  ];
  const friends: FriendsType = {
    1: ["Oliver", "Jack", "Oscar"],
    2: ["Jack", "Lewis", "Thomas"],
    3: ["William", "Michael", "Lewis"],
    4: ["Oscar", "James", "William"],
  };

  console.log(friends[3][1]);
  console.log(friends[students[1].id][2]); */



  /* const member = {
    name: "Maxim",
    age: 34,
    scores: [47.04, 98.84, 3.52],
  };
  const { name, age, scores } = member;
  console.log(member.scores === scores && age); */



  /* const student = {
    name: "Maria",
    age: 23,
    scores: [10.55, 35.86, 33.33]
}
const [first, second, third = 29.15] = student.scores
switch(third){
    case 29.15:
        console.log("Kuwait")
        break;
   case 35.86:
        console.log("Zimbabwe")
        break;
   default:
        console.log("Azerbaijan");
  }  */




        /* const client = {
    name: "Vladimir",
    age: 59,
    friends: ["Michail", "Mia", "Egor", "Leonid"]
}
const [affair, attempt, chance] = client.friends
const result = attempt */



/* const userName = (user = "") => {
    let userName: any = "Margo";
    userName += user;
    return user;
  };
  const student = userName() || "Victor";

  console.log(student); */


  //// MUTABELNOST



/////////////////////////////////////////// Lesson 5 sprint 3 //////////////////////////

/// 1

/* function f() {
  let value = Math.random();

  return function() { alert(value); };
}

// 3 функции в массиве, каждая из которых ссылается на лексическое окружение
// из соответствующего вызова f()
let arr = [f(), f(), f()];
const [a, b, c] = arr;
a(); */

/* for (let i = 0; i < arr.length; i++) {
  arr[i]();
} */


  /// 2

  /* let value = "Сюрприз!";

function f() {
  let value = "ближайшее значение";

  function g() {
    debugger; // в консоли: напишите alert(value); Сюрприз!
  }

  return g;
}

let g = f();
g();

console.log(alert(value)); */


///3 
/* 
//globalLE {} -> null

let name = "John"; //globalLE {name: 'John', sayHi: func } -> null

function sayHi() {
  //sayHiLE{} -> globalLE {name: 'John', sayHi: func } -> null
  alert("Hi, " + name);
}

name = "Pete"; //globalLE {name: 'Pete', sayHi: func } -> null
sayHi(); // что будет показано: "John" или "Pete"?

 */

/* let num = 18
let obj = {age: 18}
const API = function() {}

console.log(API.prototype); */




////// await

/* const asyncFetch = async () => {

  try {
    const yahooData = await fetch('https://yahoo.com');
  console.log('data from yahoo', yahooData.url); 

  const bingData = await fetch('https://bing.com');
  console.log('data from yahoo', bingData.url); 

  const googleData = await fetch('https://google.com');
  console.log('data from yahoo', googleData.url); 
  }
  catch (err) {
    console.log('Error', err);
  }

  

}

asyncFetch(); */


/// function generator
// function* genFoo(sal) {
//   const num = yield 1 + sal;
//   console.log(num);
//   yield 2 + sal;
//   return 3 + sal;
// }

// const generator = genFoo(10);

// console.log(generator);

// console.log(generator.next().value);
// console.log(generator.next(20));
// console.log(generator.next());



// function greet() {
//   console.log('Hello!')
// }
//  setTimeout(() => greet(), 5000)



// const server = {
//   getData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res('server data')
//       }, 2000)
//     })
//   },
// }
 
// const promise = server.getData()
// console.log(promise)



// const fs = require('fs')
 
// const getData = url => {
//   return new Promise((res, rej) => {
//     fs.readFileSync(url, (err, data) => {
//       if (err) {
//         rej(err)
//       } else {
//         res(data)
//       }
//     })
//   })
// }
 
// const pr = getData('./index.html')


///// axios
/* axios.post('https://jsonplaceholder.typicode.com/todos/1', {
    completed: false,
    id: 1,
    title: "My",
    userId: 1
  }) */

// axios.get('https://jsonplaceholder.typicode.com/posts?length=10')
//       .then(res => console.log(res.data))

// axios.put('https://jsonplaceholder.typicode.com/posts/1', {
//   body:{
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   },
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
// .then(res => console.log(res.data))



//// promise


/* const promise = new Promise((res, rej) => {
  setTimeout(() => res('Hello'), 1000)
})

console.log('promise', promise); */


//// REST OPERATOR
// const employee = {
//   id: 1,
//   name: 'John',
//   salary: 5000
// }

// const {salary, ...newEmployee} = employee
// console.log(employee);
// console.log(newEmployee);


// const createProduct = ({name, price, categoryId, brandId}) => {
//   const newName = name + ' Burger'
//   const newPrice = price + 200
//   const newCatId = categoryId + 1
//   const newBrandId = brandId + 1

//   return {
//     name: newName,
//     price: newPrice,
//     categoryId: newCatId,
//     brandId: newBrandId,
//   }
// }

// console.log(createProduct({
//   name: 'Ben',
//   price: 100,
//   categoryId: 1,
//   brandId: 1,
// }));



