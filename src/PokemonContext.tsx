import React, { useState, createContext } from 'react';

export interface IPokemon {
    id: string,
    name: string,
    img: string
}

interface IPokemonContext {
    bag: IPokemon[],
    setBag: React.Dispatch<React.SetStateAction<IPokemon[]>>
}

export const PokemonContext = createContext<IPokemonContext>({
    bag: [],
    setBag: () => {}
})

export const PokemonProvider = (props: any) => {
    const [bag, setBag] = useState<IPokemon[]>([]);
    return (
        <PokemonContext.Provider value={{ bag, setBag }}>
            {props.children}
        </PokemonContext.Provider>
    );
}