import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: {value, measurementUnit} , image } = this.props.Pokemon;

    return (
      <section className='pokemon'>
        <div className='info'>
            <p>{name}</p>
            <p>{type}</p>
            <p>{`Average weight: ${value} ${measurementUnit}`}</p>
        </div>    
        <div className='gif'>
          <img src={image} alt={`${name} gif`}></img>
        </div>
      </section>
          
    )
  }
}

export default Pokemon;