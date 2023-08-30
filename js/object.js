/* let name = "John";

function sayHi() {
  alert("Hi, " + name);
}
sayHi();
name = "Pete";
sayHi(); */

//--------------------------------------------------------------

/* function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); */

//------------------------------------ !!!! ЗАМЫКАНИЕ !!!! --------------------------

/* let makeCounter = () => {
  let count = 0;
  return () => count++; // есть доступ к внешней переменной "count"
}
let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2 */

//--------------------------------------------------------------

/* function f() {
  let value = 123;

  function g() { alert(value); }

  return g;
}

let g = f(); */

//--------------------------------------------------------------

/* function f() {
  let value = Math.random();

  return function() { alert(value); };
}

// три функции в массиве, каждая из них ссылается на лексическое окружение
// из соответствующего вызова f()
let arr = [f(), f(), f()]; */

//--------------------------------------------------------------

/* let value = "Сюрприз!";

function f() {
  let value = "ближайшее значение";

  function g() {
    debugger; // в консоли: напишите alert(value); Сюрприз!
  }

  return g;
}

let g = f();
g(); */

//--------------------------------------------------------------

/* function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };

  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1 */

//--------------------------------------------------------------

/* function sum(a) {

  return function(b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4 */

//--------------------------------------------------------------

/* let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
} */

//--------------------------------------------------------------

/* let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => alert(user.name)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => alert(user.name)); // Pete, Ann, John */

//--------------------------------------------------------------

/* function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
      
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[1](); // у 0-го стрелка будет номер 10
army[2](); // у 0-го стрелка будет номер 10
army[3](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3... */

//--------------------------------------------------------------

/* var employeeId = '1234abe';
function fu(){ 
  console.log(employeeId);
  var employeeId;
  employeeId = '122345';
}; 

fu(); */

//--------------------------------------------------------------

/* if (!window.Promise) {
  alert("Ваш браузер очень старый!");
} else {
  alert("Ваш браузер современный!");
} */

//--------------------------------------------------------------

 /* function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers(5, 10); */

//--------------------------------------------------------------

/* let i = 1;
setTimeout(function run() {
  //func(i);
  if (i < 10) {
  console.log(i)
  i++
  setTimeout(run, 100);
  } else {
  console.log('end')
  }
  
}, 100); */



