import React from 'react';
import { Link } from 'react-router-dom';

const PokemonContainer = (props: any) => {
    return (
        <Link to={`/${props.id}`}>
            <div className="container" >
                <img src={props.img} alt={props.name} />
                <div>{props.name}</div>
            </div>
        </Link>
    );
}

export default PokemonContainer;