import './App.css';
import React from 'react';
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputCPF from './InputCPF';
import InputEndereco from './InputEndereco';
import InputCidade from './InputCidade';
import SelectEstado from './SelectEstado'
import RadioButtons from './RadioButtons';
import Resumo from './Resumo';
import Cargo from './Cargo';
import Descricao from './Descricao';

class App extends React.Component {
  render(){
    
  return (
      <form>Cadastro de Currículo
      {/*   tipos de inputs - texto, combobox, radio button, textArea */}
        <fieldset>
          <InputName />
          <InputEmail />
          <InputCPF />
          <InputEndereco />
          <InputCidade />
          <SelectEstado />
          <RadioButtons />
        </fieldset> 
        <fieldset>
          <Resumo />
          <Cargo />
          <Descricao/> 
        </fieldset>
      </form>   
    );
  }
}

export default App;
