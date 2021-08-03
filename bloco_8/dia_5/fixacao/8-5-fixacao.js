// Spread

//Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['a', 'b', 'c'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

