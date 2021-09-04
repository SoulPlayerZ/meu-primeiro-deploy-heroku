import React from 'react';

class InputEmail extends React.Component {
  render(){
    return (
        <label>
            Email:
            <input type='email' required></input>
        </label>
    );
  }
}

export default InputEmail;