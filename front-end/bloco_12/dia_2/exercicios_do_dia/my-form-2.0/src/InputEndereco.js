import React from 'react';

class InputEndereco extends React.Component {
  render(){
    return (
        <label>
            Endereco:
            <input type='text' required></input>
        </label>
    );
  }
}

export default InputEndereco;