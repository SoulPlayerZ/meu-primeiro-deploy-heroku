import React from 'react';

class InputName extends React.Component {
  render(){
    return (
        <label>
            Nome:
            <input type='text' required></input>
        </label>
    );
  }
}

export default InputName;