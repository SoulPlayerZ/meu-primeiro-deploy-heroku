import React from "react";

class Inputs extends React.Component {
  validateName = (name, value) => {
    if((name === 'Nome') && (value.length > 40)){
     return 'Error';
    }
  }

  render(){
    const { name, type, value, id, handleChange } = this.props
    return(
      <>
        <label htmlFor={ id }>{ `${name}: ` }
            <input name={ name } type={ type } id={ id } 
            value={ value } onChange={handleChange} required/>
           <span className='error'>{this.validateName(name, value)}</span>
        </label>
       
      </>

    )
  }
}

export default Inputs;