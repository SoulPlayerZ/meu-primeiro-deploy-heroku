let custoProduto = 100;
let valorVenda = 200;
let porcentagem = 0;
let custoProdutoFinal = 0; 
let lucro = 0;

if((custoProduto < 0) || (valorVenda < 0)){
  console.log("ERRO: valores iniciais inválidos."); 
}else{
    porcentagem = ((custoProduto * 20) / 100);
    custoProdutoFinal = porcentagem + custoProduto;
}
lucro = (valorVenda - custoProdutoFinal) * 1000;
if(lucro < 0){
    console.log("Seu lucro foi de: " + lucro + "." + " Lucro negativo.");
}else if(lucro === 0){
    console.log("Seu lucro foi de: " + lucro + "." + " Lucro IGUAL a ZERO.");
}else{
    console.log("Seu lucro foi de: " + lucro + ".");
}


