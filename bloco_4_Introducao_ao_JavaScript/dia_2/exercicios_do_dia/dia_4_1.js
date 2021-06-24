let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let number of numbers){
    console.log(number / 2);
}


/* Exercício 8

let array = [];

for(let index = 1; index <= 25; index += 1){
    array.push(index);
}
console.log(array);

 */

/*  exercício 7


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let guardaValor = numbers[0];

for(let number of numbers){
        if(guardaValor > number){
            guardaValor = number;
        }
}
console.log(guardaValor); 
 */

/* Exercício 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
let par = "";

for(let number of numbers){
    if((number % 2) !== 0){
        impar += 1;
    }
}
    if(impar !== 0){
        console.log("O array tem " + impar + " impares");
    }else{
        console.log("Nenhum valor impar encontrado.")
    } */




/* Exercício 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let guardaValor = 0;

for(let number of numbers){
        if(guardaValor < number){
            guardaValor = number;
        }
}
console.log(guardaValor); */


/* Exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;

for(let number of numbers){
    soma = number + soma; 
}
media = soma / numbers.length;
    if(media > 20){
        console.log("Média " + media +" é MAIOR que 20.")
    }else if(media < 20){
        console.log("Média " + media +" é MENOR que 20.")
    }else{
        console.log("Média " + media +" é IGUAL a 20.")
    }


 */



/* Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;

for(let number of numbers){
    soma = number + soma; 
}
media = soma / numbers.length;
console.log(media); */



/* Exercício 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let number of numbers){
    soma = number + soma;
 
}
console.log(soma); */






/* exercício 1 
    for(let number of numbers){
    console.log(number);

} */