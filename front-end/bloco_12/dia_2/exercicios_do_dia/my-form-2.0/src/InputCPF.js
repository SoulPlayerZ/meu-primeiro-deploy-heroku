import React from 'react';

class InputCPF extends React.Component {
  render(){
    return (
        <label>
            CPF:
            <input type='text' required></input>
        </label>
    );
  }
}

export default InputCPF;