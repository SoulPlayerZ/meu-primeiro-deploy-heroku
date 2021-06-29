//Alguns exercicios precisam de outros exercicios sem estar comentados para funcionar


//Exercicio 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

/*   console.log("Bem-vindo(a)", info["personagem"] + ".");  */

//Exercicio 2 

info['recorrente'] = 'Sim';

 //console.log(info);  


/* Exercicio 3
for(let keys in info){
    console.log(keys);
} */


/* Exercicio 4

for(let keys in info){
    console.log(info[keys]);
} */

/* 
// Exercício 5
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas"
};
info2["recorrente"] = "Sim";

for(let keys in info, info2){
    if(keys === "recorrente" && info.recorrente === "Sim" && info2["recorrente"] === "Sim"){
        console.log("Ambos recorrentes");
    }else{
        console.log(info[keys], "e", info2[keys]);
    }
}
 */