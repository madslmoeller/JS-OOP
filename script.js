'use strict';

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Bad practice. Don't make methods like this!
  //   this.calcAge = function () {
  //     console.log(2024 - this.birthYear);
  //   };
};

const mads = new Person('Mads', 1995);
console.log(mads);

// 1. New empty object {} is created
// 2. function is called, "this" keyword = {} points to the object
// 3. {} linked to prototype
// 4. function automatically return {}

const sara = new Person('Sara', 2000);
const oliver = new Person('Oliver', 1995);
console.log(sara, oliver);

console.log(mads instanceof Person);

// Person.hey = function() {
  console.log('Hey there!')
  console.log(this)
};
Person.hey();

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

mads.calcAge();
sara.calcAge();
oliver.calcAge();

console.log(mads.__proto__);
console.log(mads.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(mads));
console.log(Person.prototype.isPrototypeOf(sara));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(mads.species, sara.species);

console.log(mads.hasOwnProperty('firstName'));
console.log(mads.hasOwnProperty('species'));

console.log(mads.__proto__);
// Object.prototype (top of prototype chain)
console.log(mads.__proto__.__proto__);
console.log(mads.__proto__.__proto__.__proto__);

const arr = [1, 3, 3, 7, 2, 0, 0, 8, 9, 5]; // New array = [];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

// Coding challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h!`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h!`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
bmw.accelerate();
bmw.brake();

// Class expression
// const PersonCl = class {};

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will get added to the prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hej ${this.firstName}!`);
  }

  get age() {
    return console.log(2024 - this.birthYear);
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there!');
    // console.log(this);
  }
}

const mads = new PersonCl('Mads L. Møller', 1995);
console.log(mads);
mads.calcAge();
mads.age;

console.log(mads.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`HEJ ${this.firstName}`);
// };

mads.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens (means that we can pass them into functions and also return them from functions)
// 3, CLasses are executed in strict mode

const walter = new PersonCl('Walter White', 1996);

PersonCl.hey();

// const account = {
//   owner: 'Mads',
//   movements: [200, 500, 369, 420, 880],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 10000;
// console.log(account.movements);

// Object.create

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const madsL = Object.create(PersonProto);
console.log(madsL);
madsL.name = 'Mads L. Møller';
madsL.birthYear = 1995;
madsL.calcAge();

console.log(madsL.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);
sarah.calcAge();

// Coding challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h!`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h!`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
console.log(ford.speed);
ford.speedUS = 200;
console.log(ford);

//////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2004, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Coding challenge 3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h!`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h!`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(100);
console.log(tesla);

tesla.accelerate();
tesla.brake();
tesla.accelerate();

//////////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will get added to the prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hej ${this.firstName}!`);
  }

  get age() {
    return console.log(2024 - this.birthYear);
  }

  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there!');
    // console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    // Always needs to happen first!
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName}, and I study ${this.course}!`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old, but as a student, I feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

const kevin = new StudentCl('Kevin Lundbæk', 1994, 'Computer Science');
kevin.introduce();
kevin.calcAge();

//////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName}, and I study ${this.course}!`);
};

const jake = Object.create(StudentProto);
jake.init('Jake', 2004, 'Computer Science ');
jake.introduce();
jake.calcAge();

// Public fields
// Private fields
// Public methods
// Private methods

class Account {
  // Public fields (only on the instances, not prototype itself)
  locale = navigator.language;
  // _movements = [];

  // Private fields (only on the instances, not prototype itself)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an ccount, ${owner}!`);
  }

  // Public methods
  // Public interface
  getMovements() {
    // return this._movements;
    return this.#movements;
  }

  deposit(val) {
    // this._movements.push(val);
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  reqLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('Helper');
  }
}
const acc1 = new Account('Mads', 'EUR', 9656);

// acc1._movements.push(250);
// acc1._movements.push(-150);
// acc1._approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(150);
acc1.reqLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining methods
acc1.deposit(300).deposit(500).withdraw(20).reqLoan(25000).withdraw(5000);
console.log(acc1.getMovements());

// Coding challenge 4:

// Parent Class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h!`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h!`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// Child Class
class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery is now charged to ${chargeTo}%. Have a nice trip!`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
