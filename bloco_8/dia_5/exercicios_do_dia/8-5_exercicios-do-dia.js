// QUESTÃO 1 

// const assert = require('assert');

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [...rectangle1, ...rectangle2, ...rectangle3];

// console.log(rectangles);

//  rectangles.forEach((rectangle) => {
//   assert.strictEqual(rectangleArea(rectangle), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
// }); 


// // Questão 2
// const assert = require('assert');

// // escreva sum abaixo
// const sum = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

// console.log(sum());


// assert.strictEqual(sum(), 0);
// assert.strictEqual(sum(1), 1);
// assert.strictEqual(sum(1, 2), 3);
// assert.strictEqual(sum(1, 2, 3), 6);
// assert.strictEqual(sum(1, 2, 3, 4), 10);


//Questão 3
/* const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes} = person) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex));

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'); */

// Questão 4
/* const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (arraypeople) => {
  return  arraypeople.filter(({ bornIn, nationality}) => nationality === 'Australian' && bornIn >= 1901 && bornIn <= 2000,);
}

const filteredPeople = filterPeople(people);

console.log(filteredPeople);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' }); */

//Questão 5

/* const assert = require('assert');

const myList = [1, 2, 3];

// const m = [8,9,5];

// escreva swap abaixo
const swap = ([a, b, c] = parameter) => [c,b,a]; 

const swappedList = swap(myList);
// const swappedList = swap(m);

console.log(swappedList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1); */

//Questão 6
/* const assert = require('assert');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([name, brand, year]) => { return { name, brand, year }} ;
 console.log(toObject(chiron));

assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 }); */

//Questão 7