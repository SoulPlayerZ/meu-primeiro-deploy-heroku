import './App.css';
import React from 'react';
import SelectEstado from './SelectEstado'
import RadioButtons from './RadioButtons';
import Inputs from './Inputs';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      cargo: '',
      descricao: '',
      resumo: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
   this.setState({
    [event.target.id]: event.target.value
   })
  }
  
  render(){
  
  return (
      <form>Cadastro de Currículo
      {/*   tipos de inputs - texto, combobox, radio button, textArea */}
        <fieldset>
          <Inputs type='text' id='nome' name='Nome' value={this.state.nome.toUpperCase()} handleChange={this.handleChange}/>
          <Inputs type='email' id='email' name='E-mail' value={this.state.email} handleChange={this.handleChange} />
          <Inputs type='text' id='cpf' name='CPF' value={this.state.cpf} handleChange={this.handleChange} />
          <Inputs type='text' id='endereco' name='Endereço' value={this.state.endereco} handleChange={this.handleChange} />
          <Inputs type='text' id='cidade' name='Cidade' value={this.state.cidade} handleChange={this.handleChange} />
          <SelectEstado />
          <RadioButtons />
        </fieldset> 
        <fieldset>
          <Inputs type='textArea' id='resumo' name='Resumo do currículo' value={this.state.resumo} handleChange={this.handleChange} />
          <Inputs type='textArea' id='cargo' name='Cargo' value={this.state.cargo} handleChange={this.handleChange} />
          <Inputs type='text' id='descricao' name='Descrição' value={this.state.descricao} handleChange={this.handleChange} />
        </fieldset>
      </form>   
    );
  }
}

export default App;
