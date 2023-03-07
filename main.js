// variables & Data Types
//String, Numbers, Boolean, null, undefined
//Arrays - variables that hold multiple values
//Object literals - Key value pars
//Methods for strings, arrays, objects, etc
//Loops - for, while, for...of,forEach, map
//Conditionals)if, ternary & switch)
//Functions(normal & arrow)
//OOP
//DOM Selection
//DOM manipulation
//Events
//Basic Form Validation

let score = 10;
score = 20;

console.log(score);
/*
const name = 'John';
const age = 30;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof x);


//concatenation
console.log(`My name is ${name} and I am ${age} years old`);
*/

const s = 'Hello World';
console.log(s.split(''));

fruits = ['apple', 'pears', 'orange'];
console.log(fruits);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['Music', 'movies', 'sports'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.hobbies[1]);
console.log(person.address.city);

//json
const todos = [
    {
        id: 1, 
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2, 
        text: 'write code',
        isCompleted: true
    },
    {
        id: 12, 
        text: 'attend meeting',
        isCompleted: false
    }
]

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//destructuring
const {firstName, lastName} = person;
console.log(firstName);

//loops

for(let todo of todos){
    console.log(todo.text);
}
//high order array methods
todos.forEach(function(todo){
    console.log(todo.text);
})

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
})

console.log(todoCompleted);

const x = 11;
const color = x > 10 ? 'red' : 'blue';

console.log(color);

//conditionals

//object oriented programming
///constructor function
function Person(fName, lName, dob){
    this.fName = fName;
    this.lName = lName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.fName} ${this.lName}`;
}

//class
class Person{
    constructor(fName, lName, dob) {
        this.fName = fName;
        this.lName = lName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.fName} ${this.lName}`
    }
}
const person1 = new Person('Sarah', 'Mukuti', '04-20-2000');
const person2 = new Person('Mary', 'Smith', '3-1-1970');
console.log(person2.getFullName);
console.log(person1);