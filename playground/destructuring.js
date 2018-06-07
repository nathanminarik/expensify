// Object Destructuring

const person = {
  name: 'Nathan',
  age: 33,
  location: {
    city: 'Gainesville',
    state: 'Va',
    temp: 45
  }
}

// Destructuring lets us picl apart an object and use named variables instead of dot notation.
// Instead of const name = person.name and const age = person.age 
// We destructure then object

// if we want to set up a default value to prevent errors, just set it equal like we do with default arguments.
// We can also rename the variable if we want
const {name: firstName = 'Default', age} = person;

// If we want to change the name of the variable, we can just use : to rename it. 
const {temp: temperature, city} = person.location;
// console.log(`${firstName} is ${age}`);
// console.log(`It's ${temperature} in ${city}`);

// Challenge
const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holloday',
  publisher: {
    name: 'Penguin'
  }
}
const { name: publisherName = 'Self Published'} = book.publisher;
// console.log(publisherName);


// Array Destructuring
const address = ['4256 Lawnvale Dr.', 'Gainesville', 'VA', '20155'];

// Array destructuring allows us to pick items from the array
// We use []'s though and create an object based on the index
const [street, cityAdd, state, zip] = address;
// You don't need declare all the names though if we're not using them and don't want to declare an unnecessary variable.

// To not declare the last item (zip in this case) we just leave it off
// const [street, city, state]

// To not declare a leading value, we just omit it's name
// const [, , state, zip]

// We can also set defaults in the same way as we do in the object

console.log(`You are in ${street}, ${cityAdd}`)


// Challenge

// List item, sm price, md price, lg price
const menu = ['coffee', '$2.00', '$2.50', '$3.00'];

const [item, , mdPrice] = menu;

console.log(`A medium ${item} costs ${mdPrice}`)


// Destructuring Arguments

// const add = (data, c) => {
//   return data.a + data.b + c
// }

// The above is the same as 
const add = ({a, b}, c) => {
  return a + b + c;
}

console.log(add({a:2, b:12}, 100));