const siglaEstados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
const nomeEstados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
const selectEstados = document.getElementById('estados');
const submitButton = document.getElementById('submit');

function geraEstados(){
for(let index = 0; index < nomeEstados.length; index  += 1){
    let newOption = document.createElement('option');
    newOption.innerText = nomeEstados[index];
    newOption.value = siglaEstados[index];
    selectEstados.appendChild(newOption);
}
}
geraEstados();



function addPreventDefault(event){
    event.preventDefault();
    let formValues  = document.querySelectorAll('.formItem');
    for(index = 0; index < formValues.length; index += 1){
        let p = document.createElement('p');
        p.style.marginLeft = '5px';
        p.innerText = formValues[index].name + ": " + formValues[index].value;
        document.body.appendChild(p);
        if((formValues[index].checked === false) && (formValues[index].name === 'tipo')){
        document.body.removeChild(p);
        }
    }

 

}

submitButton.addEventListener('click', addPreventDefault);