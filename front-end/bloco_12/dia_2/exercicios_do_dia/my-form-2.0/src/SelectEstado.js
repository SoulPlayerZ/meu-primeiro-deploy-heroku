import React from 'react';

class SelectEstado extends  React.Component {
  render() {
    return (
        <label>Estado:
          <select required>
            <option>Rio de Janeiro</option>
            <option>São Paulo</option>
            <option>Minas Gerais</option>
        </select>
        </label>
    )
  }
}

export default SelectEstado;