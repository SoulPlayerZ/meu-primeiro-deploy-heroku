let v = [2, 4, 6, 7, -10, 0, -3];

function retornaMenorValor(array){
    let valorMenor = 0;
    let position = 0;
        for(let key in array){
            if(array[key] < valorMenor){
                valorMenor = array[key];
                position = key;
            }
        }
    return position;
}


console.log(retornaMenorValor(v));