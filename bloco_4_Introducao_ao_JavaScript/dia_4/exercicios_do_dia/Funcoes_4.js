let n = ['José', 'Lucas', 'Nádia', 'Jarizinho', 'Fernanda', 'Cairo', 'Joana'];

function retornaNome(nome){
    let result = "";
    for(let keys in n){
        if(result.length < n[keys].length){
            result = n[keys];

        }
        
    }
   return result;


}
console.log(retornaNome(n));