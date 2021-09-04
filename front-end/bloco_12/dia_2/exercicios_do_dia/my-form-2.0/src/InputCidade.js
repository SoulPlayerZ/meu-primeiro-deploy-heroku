import React from 'react';

class InputCidade extends React.Component {
  render(){
    return (
        <label>
            Cidade:
            <input type='text' required></input>
        </label>
    );
  }
}

export default InputCidade;