let peca = "pEÃo";

switch(peca.toLowerCase()){
    case "rei":
        console.log("Anda uma casa em qualquer direção.");
        break;   
    case "rainha":
        console.log("Anda quantas casas desejar em qualquer direção.");
        break;
    case "bispo":
        console.log("Anda quantas casas desejar nas verticais.");
        break;
    case "cavalo":
        console.log("Anda formando um L em qualquer direção.")
        break;
    case "torre":
        console.log("Anda quantas casas desejar em linha reta.");
        break;
    case "peao":
        console.log("Anda uma casa à frente.");
        break;   
    case "peão":
        console.log("Anda uma casa à frente.");
        break;     
    default:
        console.log("Peça inexistente.")
}
