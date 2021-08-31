import React from 'react';
import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';

class App extends React.Component {
  render() {
    
   return(
    <main>
        <h1>Mini-Pokedex</h1>
        <div className='main-list'>
          {pokemons.map((pokemon) => <Pokemon key={pokemon.id} Pokemon={pokemon}/>)}
        </div>
    </main>      
   )}  
}

export default App;
