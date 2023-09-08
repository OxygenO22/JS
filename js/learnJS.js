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

/* let menu = {
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

console.log(multiplyNum(menu)); */

// 2.4 Copy objects

/* let user = {
  name: 'Pete'
}

let admin = user;

admin.name = 'John';

console.log(user.name) */

// 2.5 Clone objects

/* let user = {
  name: "John",
  age: 30
};

let clone = {}; 

for (let key in user) {
  clone[key] = user[key];
}

clone.name = "Pete"; 

console.log( user.name ); */

// or

/* let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user); */

// or

/* let user = {
  name: "John",
  age: 30
};

let clone = {...user};

console.log(clone) */

// 2.6 nested object clone

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

console.log(clone)

console.log(user.sizes == clone.sizes);


// 2.7 object union

/* let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);

console.log(user) */