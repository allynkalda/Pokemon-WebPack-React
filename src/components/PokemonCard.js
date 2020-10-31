import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({ name, handleClick, showDetails, handleClickClose, details }) {

    const showAbilities = () => {
        if (details.abilities) return details.abilities.map(ability => <li className="details">{ability.ability.name}</li>)
    };
    const showTextDetails = () => {

        if (showDetails) {
            return (
                <>
                    <p className="details">ID: {details.id}</p>
                    <p className="details">Height: {details.height}</p>
                    <p className="details">Abilities: </p>
                    <ul>
                    {showAbilities()}
                    </ul>
                </>
            )
        }
    }
    return (
        <div className="container">
            <div>
                {showDetails && (
                    <div className="button-box">
                        <button className="close" onClick={handleClickClose}>
                            <img src="../image/close.png"/>
                        </button>
                    </div>
                )}
                <div className={showDetails ? "box-details" : "box" }onClick={() => handleClick(name)}>
                    <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
                    <p className="name">{name}</p>
                    {showTextDetails()}
                </div>
            </div>
        </div>
    )
}
