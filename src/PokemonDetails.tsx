import React, { useState, useEffect } from "react";
import axios from "axios";
import MapContainer from "./MapContainer";
import PokemonContainer from "./PokemonContainer";
import PokemonInfo from "./PokemonInfo";
import './PokemonDetails.css';

const PokemonDetails = ({ match }: any) => {
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

	return (
		<div className="pokemon-details">
			<div className="pokemon-info">
				<PokemonContainer id={items.id} name={items.name} img={items.sprites.front_default} />
				<PokemonInfo id={items.id} name={items.name} height={items.height} weight={items.weight} types={items.types} abilities={items.abilities} img={items.sprites.front_default} />
			</div>
			<MapContainer className="pokemon-map" loc={loc}/>
		</div>
	);
};

export default PokemonDetails;
