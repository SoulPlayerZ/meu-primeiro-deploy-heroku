function verificaPalindromo(palavra){
    let word = "";
    for (let index = 1; index <= palavra.length; index += 1){
        
        word = word + palavra[palavra.length - index];
        

    }
    if (word === palavra){
        console.log("Sim, é palindromo.");
    }else{
        console.log("Não é palíndromo.");
    }

}


verificaPalindromo("arara");