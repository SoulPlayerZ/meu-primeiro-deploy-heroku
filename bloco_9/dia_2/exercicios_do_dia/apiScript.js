// apiScript.js     
/* QUESTÃO 1
const API_URL = 'https://icanhazdadjoke.com/';
const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const jokeInPage = document.getElementById('jokeContainer');
      jokeInPage.innerText = data.joke;
    });
};

window.onload = () => fetchJoke(); */









const arrayNumbers = [];
for (index = 0; index < 10; index += 1){
  arrayNumbers.push(Math.floor((Math.random() * 50) + 1));
}
console.log(arrayNumbers);

 const promise = new Promise ((resolve, reject) => {
 const sumSquared = arrayNumbers.map((number) =>  number * number).reduce((acc, cur) => acc += cur);
   if(sumSquared < 8000){
   resolve(sumSquared);
  }
   reject(sumSquared);
   })
   .then((res) => {
     console.log(`Promise resolvida. sumSquared: ${res}`);
     const arrayForDiv = [2, 3, 5, 10];
     const result = arrayForDiv.reduce((acc, cur) => { acc.push(Math.floor(res/ cur)); return acc}, []);
     console.log(result);
     return result;
   })
   .then((sumNewArray) => console.log(`A soma dos 4 elementos do novo Array é: ${sumNewArray.reduce((acc, cur) => acc += cur)}`))
   .catch((rej) => console.log(`Promise rejeitada. "É mais de oito mil! Essa promise deve estar quebrada!" sumSquared: ${rej}`));




