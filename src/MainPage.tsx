import React, { useState, useEffect, useContext } from 'react';
import PokemonContainer from './PokemonContainer';
import { PokemonContext } from './PokemonContext';
import './MainPage.css';
import axios from 'axios';

interface IPokemon {
    name: string
}

const MainPage = () => {
    const { bag, setBag } = useContext(PokemonContext);
    const [showAll, setShowAll] = useState(true);
    const [pokemon, setPokemon] = useState<Array<IPokemon>>([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (pokemon === undefined || pokemon.length === 0) {
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
                    setPokemon(item => [...item, pokemon.data]);
            }
            
            fetchPokemon();
            
            return () => {
                mounted = false;
            }
        }
    }, []);

    return (
        <div style={{width: "100%"}}>
            <div className="btn-container">
                <button className='all-btn' onClick={() => setShowAll(true)}>All</button><button className='bag-btn' onClick={() => setShowAll(false)}>Bag</button>
                {!showAll && <div><button className='save-btn'>Save</button><button className='clear-btn' onClick={() => setBag([])}>Clear</button></div>}
            </div>
            <div>
                <input className="search-field" placeholder="Seach" type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
            </div>
            
            <div className="grid-container">
                {
                    (showAll ? pokemon : bag).filter((pokemon: IPokemon) => 
                        searchValue === '' || pokemon.name.toLowerCase().includes(searchValue)
                    ).map((pokemon: any, index: number) => (
                        <div key={index}>
                            {
                                showAll ? <PokemonContainer id={pokemon.id} name={pokemon.name} img={pokemon.sprites.front_default} /> :
                                <PokemonContainer id={pokemon.id} name={pokemon.name} img={pokemon.img} />
                            }
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

export default MainPage;