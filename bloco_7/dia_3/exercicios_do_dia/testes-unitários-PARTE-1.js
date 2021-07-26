/* ----------Questão 1-------------------

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// implemente seus testes aqui
//assert.strictEqual(typeof sum, 'function');
//assert.strictEqual(sum(4, 5), 9, 'Esperado receber resultado 9');
//assert.strictEqual(sum(0,0), 0, 'Esperado receber resultado 0');
assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/); 

sum(4,'768');
 */



/* ----------Questão 2-------------------*/
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
//assert.strictEqual(typeof myRemove, 'function');
//1
/* assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4], 'Esperado encontrar [1,2,4] mas isso não acontece'); */
//2
//assert.notDeepStrictEqual(myRemove([1,2,3,4], 3), [1,2,3,4], 'O retorno precisa ser diferente de [1,2,3,4]');
//3
//assert.notDeepStrictEqual(myRemove([1,2,3,4], 3), [1,2,3,4], 'O retorno precisa ser igual a [1,2,3,4]');
//4 
//assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4], 'O retorno precisa ser igual a [1,2,3,4]'); 



/* console.log(myRemove([1,2,3,4])); */


