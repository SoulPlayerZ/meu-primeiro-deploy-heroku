const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
 return names.reduce((acc, cur) => acc + cur.split('').reduce((acc, cur) => {
    if (cur.toLowerCase() === 'a') return acc + 1;
    return acc;
 }, 0),0);
}
  


assert.deepStrictEqual(containsA(), 20);