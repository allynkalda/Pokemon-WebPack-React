import React, { useState, useEffect } from 'react';
import { getPokemons } from './api/api'
import GridView from './components/GridView';

function App() {

  const [ pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    getPokemons()
      .then(result => {
        const data = result.data.results;
        setPokemons(data);
        console.log(data)
      })
  }, [])
  
  return (
    <div>
      <GridView pokemons={pokemons} />
    </div>
  );
}

export default App;