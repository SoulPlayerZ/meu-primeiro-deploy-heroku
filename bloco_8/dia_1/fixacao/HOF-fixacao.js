//QUESTÃO 1

// Ao chamar a função doingThings:

const wakeUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);


// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!



