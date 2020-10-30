import React, { useState } from 'react';
import { Grid, Card, IconButton, CardActionArea } from '@material-ui/core/';
import { getDetails } from '../api/api'
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 140,
    },
    gridItem: {
        height: '300px',
    },
    button: {
        textAlign: 'right'
    },
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center'
    },
    icon: {
        padding: '10px'
    }
  });

const PokemonCard = ({ name, handleClick, showDetails, setShowDetails, details }) => {
    const classes = useStyles();
    const handleClickClose = () => {
        setShowDetails(false);
    }

    const showAbilities = () => {
        return details.abilities.map(ability => <li>{ability.ability.name}</li>)
    };
    const showTextDetails = () => {

        if (showDetails) {
            console.log('det', details.abilities)
            return (
                <>
                    <p>ID: {details.id}</p>
                    <p>Height: {details.height}</p>
                    <p>Abilities</p>
                    <ul>
                    {showAbilities()}
                    </ul>
                </>
            )
        }
    }
    return (
        <Grid key={name} item xs={1} sm={1} md={6} lg={4} className={classes.root} onClick={() => handleClick(name)}>
     
            <Card className={classes.gridItem}>
            
                {showDetails && (
                    <div className={classes.button}>
                        <IconButton aria-label="close" size="small" className={classes.icon} onClick={() => handleClickClose()}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                )}
                <CardActionArea className={classes.content}>
                    <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
                    <p>{name}</p>
                    {showTextDetails()}
                </CardActionArea>
            </Card>
           
        </Grid>
    )
}

export default function GridView({ pokemons }) {
    const classes = useStyles();

    const [ showDetails, setShowDetails ] = useState(false);
    const [ details, setDetails ] = useState(null);

    const handleClick = (name) => {
        setShowDetails(true);
        getDetails(name)
            .then(result => {
                const data = result.data;
                setDetails(data);
                console.log(data)
            })
    }

    const showPokemons = () => {
        return pokemons.map(pokemon => <PokemonCard name={pokemon.name} handleClick={handleClick} showDetails={showDetails}/>)
    }

    const togglePage = () => {
        if (showDetails) {
            if (details) {
                return <PokemonCard name={details.name} details={details} handleClick={handleClick} showDetails={showDetails} setShowDetails={setShowDetails}/>
            }
        } else {
            if (pokemons.length) {
                return showPokemons()
            }
        }
    }
    
    return (
        <Grid container direction="row" spacing={4} alignItems="center" justify="center">
           {togglePage()}
        </Grid>
    )
}
