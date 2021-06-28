function verificaPalindromo(palavra){
    let word = "";
    let w = word.toLocaleLowerCase();
    let p = palavra.toLocaleLowerCase();
    for (let index = 1; index <= p.length; index += 1){
        
        w = w + p[palavra.length - index];
        

    }
    if (w === p){
        console.log("Sim, é palindromo.");
    }else{
        console.log("Não é palíndromo.");
    }

}


verificaPalindromo("Amor a Roma");