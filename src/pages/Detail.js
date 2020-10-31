import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import {
    useParams
  } from "react-router-dom";
import { getDetails } from '../api/api'

import './Details.css';

export default function Detail() {
    const { name } = useParams();
    const [ details, setDetails ] = useState(null);
    useEffect(() => {
        getDetails(name)
            .then(result => {
                const data = result.data;
                setDetails(data);
            })
    }, [])
    return (
        <div className="details-box">
            <PokemonCard details={details} name={name} />
        </div>
    )
}
