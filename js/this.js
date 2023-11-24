// 1

/* const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
};

const a = person.firstName;
const b = person.fullName();
const c = person['lastName'];

for (let x in person) {
  console.log(person[x]);
} */


// 2

  /* function outer() {
    function inner() {
      var i = 4;
      console.log('i + g = ', i + g);
    }
    var o = 3;
    console.log('b + o = ', b + o);
    inner();
  }

  var g = 1;

  if (true) {
    var b = 2;
  }
  outer(); */


  // 3 

  /* function User(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
  }

  let userJack = new User('Jack', true);
  let userAnn = new User('Ann', false);

  console.log(userJack.name);
  console.log(userJack.isAdmin);

  console.log(userAnn.name);
  console.log(userAnn.isAdmin); */


  // 4 

  /* function User(name) {
    this.name = name;

    this.sayHi = function() {
      alert('My name: ' + this.name);
    };
  }

  let john = new User('John');

  john.sayHi(); */


  // 5 calculator

  /* function Calculator() {

    this.a = +prompt('Enter a: ', 0);
    this.b = +prompt('Enter b: ', 0);

    this.sum = function() {
      return this.a + this.b;
    };

    this.mul = function() {
      return this.a * this.b; 
    };
  }

  let calc = new Calculator();

  alert('Sum = ' + calc.sum());
  alert('Mul = ' + calc.mul()); */
  
  
  // 6 accumulator
  
  /* function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
      this.value += +prompt('Enter your number ');
    };
  }

  let accumulator = new Accumulator(1);

  accumulator.read();
  accumulator.read();

  alert(accumulator.value) */
