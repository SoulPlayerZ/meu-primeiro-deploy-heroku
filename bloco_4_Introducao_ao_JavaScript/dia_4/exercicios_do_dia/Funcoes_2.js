let teste = [2, 3, 36, 7, 10, 11];

function retornaMaiorValor(array){
    let valorMaior = 0;
    for(let key in array){
            if(array[key] > valorMaior){
                valorMaior = array[key];
            }
    }
    return valorMaior;
}



console.log(retornaMaiorValor(teste));