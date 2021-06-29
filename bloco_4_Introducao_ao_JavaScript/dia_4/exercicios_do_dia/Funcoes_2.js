let teste = [2, 3, 36, 75, 10, 11];

function retornaMaiorValor(array){
    let valorMaior = 0;
    let position = 0;
    for(let key in array){
            if(array[key] > valorMaior){
                valorMaior = array[key];
                position = key;
            }
    }
    return position;
}



console.log(retornaMaiorValor(teste));