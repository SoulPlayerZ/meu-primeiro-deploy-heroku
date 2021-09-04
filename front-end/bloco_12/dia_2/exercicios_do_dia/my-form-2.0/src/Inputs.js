import React from "react";

class Inputs extends React.Component {
  validate = (name, value) => {
    if((name === 'Nome') && (value.length > 4)){
     return 'Máximo 4 caracteres';
    }
    if((name === 'E-mail') && (value.length > 5)){
      return 'Máximo 5 caracteres';
    }
    if((name === 'CPF') && (value.length > 11)){
      return 'Máximo 11 caracteres';
    }
  }

  

  render(){
    const { name, type, value, id, handleChange } = this.props
    return(
      <>
        <label htmlFor={ id }>{ `${name}: ` }
            <input name={ name } type={ type } id={ id } 
            value={ value } onChange={handleChange} required/>
           <span className='error'>{this.validate(name, value)}</span>
        </label>
       
      </>

    )
  }
}

export default Inputs;