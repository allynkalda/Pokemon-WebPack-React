  
import axios from 'axios';

const getPokemons = async () => {
    const data = await axios.get('https://pokeapi.co/api/v2/pokemon');
    return data;
}

const getDetails = async (name) => {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return data;
}

export { getPokemons, getDetails };