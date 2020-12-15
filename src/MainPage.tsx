import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainPage = () => {
    const [pokemon, setPokemon] = useState<Array<any>>([]);

    useEffect(() => {
        let mounted = true;
        const fetchPokemon = async () => {
            for(let i = 1; i <= 151; i++) {
                await getPokemon(i);
            }
        }

        const getPokemon = async (id: number) => {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const pokemon = await axios.get(url);
            if(mounted) 
                setPokemon(item => [...item, pokemon]);
        }

        
        fetchPokemon();
        
        return () => {
            mounted = false;
        }
    }, []);
    
    return (
        <div className="App">
            {
                pokemon.map((pokemon: any, index: number) => (
                    <Link to={`/${pokemon.data.id}`} key={index}>
                        <div className="container" >
                            <img src={pokemon.data.sprites.front_default} alt={pokemon.data.name} />
                            <div>{pokemon.data.name}</div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}

export default MainPage;