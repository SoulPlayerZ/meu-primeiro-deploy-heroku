 const result = () => { 
    let sorteio =  Math.floor(Math.random() * 5) + 1; 
    return sorteio;
}   

 function checkResult(apostado, verifica) {
    if (apostado === verifica) {
        console.log('Número apostado: ' + apostado);
        console.log('Número sorteado: ' + verifica); 
        return "Parabéns você ganhou";
    } else {
        console.log('Número apostado: ' + apostado);
        console.log('Número sorteado: ' + verifica); 
        return "Tente novamente" 
    }
  

}


console.log(checkResult(4, result()));  