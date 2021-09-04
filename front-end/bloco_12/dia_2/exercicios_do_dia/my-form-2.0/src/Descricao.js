import React from 'react';

class Descricao extends React.Component {
  render(){
    return (
        <label>
            Descrição do cargo:
            <input type='text' required></input>
        </label>
    );
  }
}

export default Descricao;