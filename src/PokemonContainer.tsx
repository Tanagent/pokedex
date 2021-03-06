import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonContainer.css';

const PokemonContainer = (props: any) => {
    return (
        <div className="grid-items">
            <Link to={`/${props.id}`}>
                <div className="pokemon-container" >
                    <img className="pokemon-img" src={props.img} alt={props.name} />
                    <div className="pokemon-name">{props.name}</div>
                </div>
            </Link>
        </div>
    );
}

export default PokemonContainer;