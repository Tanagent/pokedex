import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
	height: "500px",
	width: "500px",
};

const defaultCenter = {
	lat: 32.8,
	lng: -117.1,
};

const PokemonDetails = ({ match }: any) => {
    const [loc, setLoc] = useState<Array<any>>([]);
	const [items, setItems] = useState({
		name: "",
		sprites: { front_default: "" },
		height: "",
		weight: "",
		types: [{ type: { name: "" } }],
		abilities: [{ ability: { name: "" } }],
	});

	useEffect(() => {
		const url = `https://pokeapi.co/api/v2/pokemon/${match.params.pokemonId}`;
		const API_KEY = "HHko9Fuxf293b3w56zAJ89s3IcO9D5enaEPIg86l";
		axios.get(url).then((res) => {
			setItems(res.data);
		});

		axios
			.get("https://api.craft-demo.net/pokemon/1", {
				headers: {
					"x-api-key": API_KEY,
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
			{items.types.map((type: any, index: number) => (
				<div key={index}>{type.type.name}</div>
			))}
			{items.abilities.map((ability: any, index: number) => (
				<div key={index}>{ability.ability.name}</div>
			))}
			<LoadScript googleMapsApiKey={process.env.REACT_APP_API_URL || ''}>
				<GoogleMap
					mapContainerStyle={mapStyles}
					zoom={10}
					center={defaultCenter}
				>
					{loc.map((item: any, index: number) => {
						return <Marker key={index} position={item} />;
					})}
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default PokemonDetails;
