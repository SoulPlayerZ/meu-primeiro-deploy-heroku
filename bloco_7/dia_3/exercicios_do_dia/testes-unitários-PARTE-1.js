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
/* const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
} */

// implemente seus testes aqui
//assert.strictEqual(typeof myRemove, 'function');
//1
/* assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4], 'Esperado encontrar [1,2,4] mas isso não acontece'); */
//2
//assert.notDeepStrictEqual(myRemove([1,2,3,4], 3), [1,2,3,4], 'O retorno precisa ser diferente de [1,2,3,4]');
//3
//assert.notDeepStrictEqual(myRemove([1,2,3,4], 3), [1,2,3,4], 'O retorno precisa ser diferente de [1,2,3,4]');
//4 
//assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4], 'O retorno precisa ser igual a [1,2,3,4]'); 



/* console.log(myRemove([1,2,3,4])); */

/* ----------Questão 3-------------------
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}
// implemente seus testes aqui
//1
//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1,2,4], 'Esperado [1,2,4] mas isso não acontece.');
//2
//assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,3,4], 'Esperado que o retorno seja diferente de [1,2,3,4]');
//3
//assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,3,4], 'Esperado que o retorno seja diferente de [1,2,3,4]');
//4
//assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 5), [1,2,3,4], 'Esperado que o retorno seja igual a [1,2,3,4]');
*/

/* ----------Questão 4-------------------
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
// implemente seus testes aqui
//1
//assert.strictEqual(myFizzBuzz(15),'fizzbuzz', "Esperado fizzbuzz como retorno mas isso não acontece");
//2
//assert.strictEqual(myFizzBuzz(9),'fizz', "Esperado fizz como retorno mas isso não acontece");
//3
//assert.strictEqual(myFizzBuzz(40555),'buzz', "Esperado fizzbuzz como retorno mas isso não acontece");
//4
//assert.strictEqual(myFizzBuzz(14), 14, "Esperado 14 como retorno mas isso não acontece");
//5
//assert.notStrictEqual(myFizzBuzz('1.5'), false, "Esperado parâmetro do tipo Number mas não acontece.");
*/


/* ----------Questão 5-------------------
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};
// implemente seus testes aqui

assert.deepStrictEqual((obj1), obj2, "É esperado que obj1 e obj2 sejam iguais");
assert.notDeepStrictEqual((obj1), obj3, 'É esperado que obj1 e obj3 sejam diferentes');
assert.notDeepStrictEqual((obj2), obj3, 'É esperado que obj2 e obj3 sejam diferentes');

*/