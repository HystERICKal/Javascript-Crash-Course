// console.log('Hello World');

//search MDN (Mozilla Developer Network ) for more console commands

//var - globally scoped (not used anymore)
//let - block level scope
//      -You can re-assign values
//let age = 30;

//const - block level scope
//      -You cannot re-assign values 

//DataTypes
//String, Numbers, Boolean, null, undefined

const name = 'John';
const age = 30;
// const isCool = true;
// const x = null;
// const y = undefined;

// console.log(typeof name)



// //concatenation
// console.log('My name is '+ name +' and I am '+ age);
// //Template String
// const hello = `My name is ${name} and I am ${age} years`;

// console.log(hello);


/* //String properties
const s ='hello world'
console.log(s.length)
console.log(s.toUpperCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase()); //Two functions in one
console.log(s.split('')); //Split string into an array */


/* //Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5); // new means its a constractor
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears']
console.log(fruits);
console.log(fruits[0]);
fruits[3] = 'grapes';
console.log(fruits);
fruits.push('mangoes');
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges')); */


/* //Object Literals - These are just key value pairs
const Person = {
    firstname: 'John',
    lastname:'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {  //Embedded object i.e Object within an object
        street: '828 Arcadia st',
        city: 'Nairobi',
        state: 'Kenya'
    }
}

console.log(Person.lastname);
console.log(Person.hobbies[1]); 
console.log(Person.address.city);

//Pulling out variables from the Person Object
const {firstname, lastname} = Person;
console.log(firstname);

//Pulling variables from embedded object
const {city} = Person.address;
console.log(city);

//Add properties
Person.email = 'nyoroerick12@gmail.com';
console.log(Person); */


//Array of Objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

//Convert JS code to JSON code so we can send it to server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);  

//For loop
for(let i = 0; i<todos.length; i++){
    console.log(todos[i].text);
}
//while loop
let p = 0;
while(p<2){
    console.log(p);
    p++;
}