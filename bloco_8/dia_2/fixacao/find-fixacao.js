/* Questão 1

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (item) =>  (item % 3 === 0) && (item % 5 === 0);

console.log(numbers.find(findDivisibleBy3And5)); */

/* QUESTAO 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (cadaNome) => cadaNome.length === 5;

console.log(names.find(findNameWithFiveLetters)); */

/* QUESTAO 3 */

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(item) { 
      return  item.id === '31031685';
    };
  
  console.log(musicas.find(findMusic));