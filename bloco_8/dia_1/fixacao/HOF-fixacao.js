// Ao chamar a função doingThings:

const wakeUp = () => 'Acordando!!'
const doingThings = (func) => console.log(func());


doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!