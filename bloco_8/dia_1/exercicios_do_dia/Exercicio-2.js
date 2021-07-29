 const randomNumber = () => { 
    let sorteio =  Math.floor(Math.random() * 5) + 1; 
    return sorteio;
}   

 function checkResult(apostado, callback) {
    if (apostado === callback) {
        console.log('Número apostado: ' + apostado);
        console.log('Número sorteado: ' + callback); 
        return "Parabéns você ganhou";
    } else {
        console.log('Número apostado: ' + apostado);
        console.log('Número sorteado: ' + callback); 
        return "Tente novamente" 
    }
  

}


console.log(checkResult(4, randomNumber()));  