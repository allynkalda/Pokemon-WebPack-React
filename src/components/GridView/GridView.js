import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard'
import { useHistory } from "react-router-dom";

import './GridView.css';

export default function GridView({ pokemons, details, showDetails, setShowDetails }) {

    const history = useHistory();
    const handleClickCloseDet = () => {
        setShowDetails(false);
    }

    const handleClick = (name) => {
        history.push(`/pokemon/${name}`);
    };

    const showPokemons = () => {
        return pokemons.map(pokemon => <PokemonCard key={pokemon.name} name={pokemon.name} handleClick={handleClick} showDetails={showDetails}/>)
    }

    const togglePage = () => {
        if (showDetails) {
            if (details) {
                return <PokemonCard name={details.name} 
                            details={details} 
                            handleClick={handleClick} 
                            showDetails={showDetails} 
                            handleClickCloseDet={handleClickCloseDet}/>
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
