import React, { useState } from 'react';
import PokemonCard from './PokemonCard'

import './GridView.css';

export default function GridView({ pokemons, handleClick, details, showDetails, setShowDetails }) {

    const handleClickClose = () => {
        setShowDetails(false);
    }

    const showPokemons = () => {
        return pokemons.map(pokemon => <PokemonCard name={pokemon.name} handleClick={handleClick} showDetails={showDetails}/>)
    }

    const togglePage = () => {
        if (showDetails) {
            if (details) {
                return <PokemonCard name={details.name} 
                            details={details} 
                            handleClick={handleClick} 
                            showDetails={showDetails} 
                            setShowDetails={setShowDetails}
                            handleClickClose={handleClickClose}/>
            }
        } else {
            if (pokemons.length) {
                return showPokemons();
            }
        }
    }
    
    return (
        <div className="main">
           {togglePage()}
        </div>
    )
}
