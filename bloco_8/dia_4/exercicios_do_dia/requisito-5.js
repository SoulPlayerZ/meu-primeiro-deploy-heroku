const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
 return names.reduce((acc, cur) => acc + cur.split('').reduce((acumulator, current) => {
    if (current.toLowerCase() === 'a') return acumulator + 1;
    return acumulator;
 }, 0),0);
}
  


assert.deepStrictEqual(containsA(), 20);