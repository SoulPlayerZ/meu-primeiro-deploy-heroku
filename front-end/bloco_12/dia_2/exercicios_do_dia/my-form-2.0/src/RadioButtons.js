import React from 'react';

class RadioButtons extends React.Component {
  render() {
    return(
        <label>
            <label htmlFor='casa'>
                <input type='radio' name='tipo'id='casa' value='casa'/>Casa
            </label>
            <label htmlFor='apartamento'>
                <input type='radio' name='tipo' id='apartamento' value='apartamento'/>Apartamento
            </label>
     
        </label>
    )
  }
}

export default RadioButtons;