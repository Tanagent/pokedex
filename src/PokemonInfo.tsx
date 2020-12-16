import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import './PokemonInfo.css';

const PokemonInfo = (props: any) => {
    const { bag, setBag } = useContext(PokemonContext);

    const toggleCheckboxChange = (event: any) => {
		if(event.target.checked) {
			setBag(list => [...list, {id: props.id, name: props.name, img: props.img}]);
		} else {
			setBag(bag.filter(x => x.id !== props.id))
		}
	}
    
    return (
        <div>
            <ul>
                <li><span>Height: </span><span className="value">{props.height}</span></li>
                <li><span>Weight: </span><span className="value">{props.weight}</span></li>
                <li>
                    <span>Type(s): </span> 
                    {props.types.map((type: any, index: number) => (
                        <span key={index}>{type.type.name} </span>
                    ))}
                </li>
                <li>
                    <span>Abilities: </span> 
                    {props.abilities.map((ability: any, index: number) => (
                        <span key={index}>{ability.ability.name} </span>
                    ))}
                </li>
                <li><span>In Bag:</span> <input type="checkbox" checked={bag.some(pokemon => pokemon.id === props.id)} onChange={toggleCheckboxChange} /></li>
            </ul>

			<p className='pokemon-text'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
            </p>
			
        </div>
    );
}

export default PokemonInfo;