import React, { useState, useEffect, useContext } from 'react';
import PokemonContainer from './PokemonContainer';
import { PokemonContext } from './PokemonContext';
import './MainPage.css';
import axios from 'axios';

interface IPokemon {
    name: string
}

const MainPage = () => {
    const { bag } = useContext(PokemonContext);
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
        <div>
            <div className="button-container m-auto pb-5">
                <button className='all-btn' onClick={() => setShowAll(true)}>All</button><button className='bag-btn' onClick={() => setShowAll(false)}>Bag</button>
                {!showAll && <button className='save-btn'>Save</button>}
            </div>
            <input placeholder="Seach" type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}></input>
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
    );
}

export default MainPage;