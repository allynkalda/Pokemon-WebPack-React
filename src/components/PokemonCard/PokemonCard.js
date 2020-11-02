import React from 'react';
import { useHistory } from "react-router-dom";

import './PokemonCard.css';

export default function PokemonCard({ name, handleClick, details, showDetails, handleClickCloseDet }) {

    const history = useHistory();

    const showAbilities = () => {
        if (details.abilities) return details.abilities.map(ability => <li key={ability.ability.name} className="details">{ability.ability.name}</li>)
    };
    const showTextDetails = () => {

        if (details) {
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

    const handleClickClose = () => {
        history.push('/')
    }

    return (
        <div className="container">
            <div>
                {details && (
                    <div className="button-box">
                        <button className="close" onClick={showDetails ? handleClickCloseDet : handleClickClose}>
                            <img src="../image/close.png"/>
                        </button>
                    </div>
                )}
                <div className={details ? "box-details" : "box" }onClick={() => handleClick(name)}>
                    <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
                    <p className="name">{name}</p>
                    {showTextDetails()}
                </div>
            </div>
        </div>
    )
}
