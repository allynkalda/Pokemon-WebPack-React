import React from 'react';
import './Header.css';

export default function Header({ pokemons }) {
    return (
        <div>
            <img className="logo" alt="logo" src="../image/pokemon-logo.png" />
            <p className="header-text">Generation 1</p>
            <p className="header-text">{pokemons.length} pokemons</p>
        </div>
    )
}
