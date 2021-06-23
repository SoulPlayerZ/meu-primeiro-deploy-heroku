let nota = 'S';
let statusCandidato;

if (nota >= 80){
    statusCandidato = "Aprovado";
}else if (nota < 80 && nota >= 60){    
    statusCandidato = "Lista de espera";
}else if (nota < 60){
    statusCandidato = "Reprovado";
} 

switch(statusCandidato){
    case "Aprovado":
        console.log("Candidato aprovado.")
      break;

    case "Lista de espera":
        console.log("Candidato na lista de espera")
    break;    

    case "Reprovado":
        console.log("Candidato reprovado")
    break;  

    default:
        console.log("Não se aplica")
}

