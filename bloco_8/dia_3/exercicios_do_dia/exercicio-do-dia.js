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

// Adicione o código do exercício aqui:

//Questão 1
/* const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  
  function formatedBookNames() {
     // escreva seu código aqui
    return books.map((item) => `${item.name} - ${item.genre} - ${item.author.name}`);
  }

  assert.deepStrictEqual(formatedBookNames(), expectedResult);
 */

  //Questão 2
/*   const expectedResult = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];
  
  function nameAndAge() {
    // escreva seu código aqui
    const result = books.map((item) => ({ age: (item.releaseYear - item.author.birthYear), author: item.author.name }));
    return result.sort((a, b) => (a.age - b.age));
  }

 
  
 assert.deepStrictEqual(nameAndAge(), expectedResult); */


 //Questão 3
/* 
 const expectedResult = [
    { 
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965
    }
  ];
  
  function fantasyOrScienceFiction() {
    return books.filter((item) => ((item.genre === 'Ficção Científica') || (item.genre === 'Fantasia')));
  }
  
  assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult); */

  //Questão 4
  /* const expectedResult = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
  ];
  
  function oldBooksOrdered() {
    // escreva seu código aqui
    return books.filter((item) => item.releaseYear <= 1961).sort((a, b) => (a.releaseYear - b.releaseYear));
    
  }
  
assert.deepStrictEqual(oldBooksOrdered(), expectedResult); */

//Questão 5
/* const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  function fantasyOrScienceFictionAuthors() {
    // escreva seu código aqui
    const objetosFiltrados = books.filter((item) => (item.genre === 'Ficção Científica') || (item.genre === 'Fantasia'));
    return objetosFiltrados.map((item) => item.author.name).sort();
    

  }  

  //ordem alfabeticas dos nomes. Já tem os elementos pelo gênero 
  
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult); */

//Questão 6
/* const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
  function oldBooks() {
    // escreva seu código aqui
   const oldBooks = books.filter((item) => (item.releaseYear <= 1961));
   return oldBooks.map((item) => item.name);
  }
  
  console.log(oldBooks());
  assert.deepStrictEqual(oldBooks(), expectedResult); */

  //Questão 7

  const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  const findBookName = books.find((item) => item.author.name.toLocaleUpperCase().startsWith('J'));
  return findBookName.name;
}
console.log(authorWith3DotsOnName());

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);