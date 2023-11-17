// 1

const person = {
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
}
