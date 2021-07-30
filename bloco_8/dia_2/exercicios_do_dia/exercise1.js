const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Questão 1 

// function authorBornIn1947() {
//   // escreva aqui o seu código
//   const newObject = books.find((item) => item.author.birthYear === 1947);
//   return newObject.author.name;
// }

// assert.strictEqual(authorBornIn1947(), 'Stephen King');


//Questão 2
 
// function smallerName() {
//   let nameBook = books[0].name;
//   //escreva aqui o seu código
//   books.forEach((item) => { 
//     if (item.name.length < nameBook.length) {
//       nameBook = item.name;
//     }
//      })

//   // Variável nameBook que receberá o valor do menor nome;
//    return nameBook;
//  }

//  console.log(smallerName());

//  assert.strictEqual(smallerName(), 'Duna');
 

 //Questão 3
/*   const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((item) => item.name.length === 26);
} 
getNamedBook();
  
 assert.deepStrictEqual(getNamedBook(), expectedResult); */

 // QUESTÃO 4
/*  const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a,b) => b.releaseYear - a.releaseYear);

}

booksOrderedByReleaseYearDesc();

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult); */

//QUESTAO 5
/* const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((item) => (item.author.birthYear >= 1901) && (item.author.birthYear <= 2001));
}
console.log(everyoneWasBornOnSecXX());

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult); */

//QUESAO 6
/* const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((item) => (item.releaseYear >= 1980) && (item.releaseYear < 1990));
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult); */
