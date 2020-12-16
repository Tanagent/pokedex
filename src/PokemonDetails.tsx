import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PokemonContext } from './PokemonContext';
import MapContainer from "./MapContainer";

const PokemonDetails = ({ match }: any) => {
	const { bag, setBag } = useContext(PokemonContext);
    const [loc, setLoc] = useState<Array<any>>([]);
	const [items, setItems] = useState({
		id: "",
		name: "",
		sprites: { front_default: "" },
		height: "",
		weight: "",
		types: [{ type: { name: "" } }],
		abilities: [{ ability: { name: "" } }],
	});

	useEffect(() => {
		const url = `https://pokeapi.co/api/v2/pokemon/${match.params.pokemonId}`;
		axios.get(url).then((res) => {
			setItems(res.data);
		});

		axios
			.get(`https://api.craft-demo.net/pokemon/${match.params.pokemonId}`, {
				headers: {
					"x-api-key": process.env.REACT_APP_POKEMON_API,
				},
			})
			.then((res) => {
                var arr: Array<any> = [];
                res.data.locations.forEach((location: string) => {
                    var coordinates = location.split(',');
                    arr.push({
                        lat: parseFloat(coordinates[0]),
                        lng: parseFloat(coordinates[1])
                    })
                })

                setLoc(arr);
			});
	}, [match]);

	const toggleCheckboxChange = (event: any) => {
		if(event.target.checked) {
			setBag(list => [...list, {id: items.id, name: items.name, img: items.sprites.front_default}]);
		} else {
			setBag(bag.filter(x => x.id !== items.id))
		}
	}

	return (
		<div>
			<div>{items.name}</div>
			<img
				src={items.sprites.front_default}
				alt={items.sprites.front_default}
			/>
			<div>
				height: {items.height}
				weight: {items.weight}
			</div>
			<div>MOCK TEXT</div>
			<input type="checkbox" checked={bag.some(pokemon => pokemon.id === items.id)} onChange={toggleCheckboxChange} />
			{items.types.map((type: any, index: number) => (
				<div key={index}>{type.type.name}</div>
			))}
			{items.abilities.map((ability: any, index: number) => (
				<div key={index}>{ability.ability.name}</div>
			))}
			<MapContainer loc={loc}/>
		</div>
	);
};

export default PokemonDetails;
