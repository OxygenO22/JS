// 1

/* function hello(name) {
  let phrase = `Hello, ${name}!`;
  say(phrase);
}

function say(phrase) {
  alert(`** ${phrase} **`);
} */

// 2 - object

// 2.1

/* let user = {};

user.name = 'John';
user.surname = 'Smith';
console.log(user)
user.name = 'Pete';
console.log(user)
delete user.name;
console.log(user) */

// 2.2

/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sumOfSalaries = (salaries) => {
  let summ = 0;
  for (let key in salaries) {
    summ += salaries[key];
  }
  return summ;
};

console.log(sumOfSalaries(salaries)); */

// 2.3

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let multiplyNum = (menu) => {
  for (let key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] *= 2;
    }
  }
  return menu;
}

console.log(multiplyNum(menu));