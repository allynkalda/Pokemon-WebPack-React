import React, { useState, useEffect } from 'react';
import { getPokemons, getDetails } from './api/api'
import GridView from './components/GridView';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import ReactLoading from 'react-loading';

import './App.css';

function App() {

  const [ pokemons, setPokemons ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ details, setDetails ] = useState(null);
  const [ showDetails, setShowDetails ] = useState(false);
  const [ showError, setShowError ] = useState(false);

  const getAllPokes = () => {
    setLoading(true);
    getPokemons()
      .then(result => {
        const data = result.data.results;
        setPokemons(data);
        setLoading(false);
      })
  }
  useEffect(() => {
    getAllPokes();
  }, [])

  const handleClick = (name) => {
    if (name === '') {
      setShowError(false);
      setShowDetails(false);
      getAllPokes();
    } else {
      setLoading(true);
      setShowDetails(true);
      getDetails(name)
          .then(result => {
              const data = result.data;
              setDetails(data);
              setLoading(false);
          })
          .catch(error => {
            setShowError(true);
            setLoading(false);
          })
    }
  }

  const showGrid = () => {
    if (loading) {
      return (
        <div className="loading">
          <ReactLoading type={'bubbles'} color={'pink'} height={667} width={375} />
        </div>
      )
    } else {
      if (showError) {
        return (
        <div className="error">
          <img className="error-image" alt="no pokemon" src="../image/sweat.png" />
          <p>No Pokemon found</p>
        </div>
        )
      } else {
        return (
          <GridView pokemons={pokemons} 
          handleClick={handleClick} 
          details={details} 
          showDetails={showDetails} 
          setShowDetails={setShowDetails}/>
        )
      }
    };
  }
  
  return (
    <div>
      <Header pokemons={pokemons}/>
      <SearchInput handleClick={handleClick} />
      {showGrid()}
    </div>
  );
}

export default App;