/* // Spread

//Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['a', 'b', 'c'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

 */

//Array destructing

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// const array =[bebida, comida, animal, 'xablau'];

// const result =[ comida, animal, bebida, x] = array; 
// console.log(comida, animal, bebida, x); // arroz gato água


// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo



let numerosPares = [1, 3, 5, 6, 8, 10, 12];


/* console.log(numerosPares); // [6, 8, 10, 12]; */

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,,...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];