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
for (index = 0; index < 50; index += 1){
  arrayNumbers.push(Math.floor((Math.random() * 50) + 1));
}
console.log(arrayNumbers);

 const promise = new Promise ((resolve, reject) => {
 const sumSquared = arrayNumbers.map((number) =>  number * number).reduce((acc, cur) => acc += cur);
   if(sumSquared < 50){
   resolve(sumSquared);
  }
   reject(sumSquared);
   })
   .then((res) => console.log(`Promise resolvida. O total da soma dos valores² do array é: ${res}`))
   .catch((rej) => console.log(`Promise rejeitada. O total da soma dos valores² do array é: ${rej}`));




