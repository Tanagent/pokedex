import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import PokemonInfo from '../PokemonInfo';

const props = {
    id: 132,
    name: "ditto",
    height: 3,
    weight: 40,
    types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/"
          }
        }
      ],
    abilities: [
        {
          ability: {
            name: "limber",
            url: "https://pokeapi.co/api/v2/ability/7/"
          },
          is_hidden: false,
          slot: 1
        },
        {
          ability: {
            name: "imposter",
            url: "https://pokeapi.co/api/v2/ability/150/"
          },
          is_hidden: true,
          slot: 3
        }
      ],
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
}



describe('Pokemon Info', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PokemonInfo id={props.id} name={props.name} height={props.height} weight={props.weight} types={props.types} abilities={props.abilities} img={props.img} />, div);
    });
    
    it('shallow renders without crashing', () => {
        shallow(<PokemonInfo id={props.id} name={props.name} height={props.height} weight={props.weight} types={props.types} abilities={props.abilities} img={props.img} />); 
    });
    const wrapper = shallow(<PokemonInfo id={props.id} name={props.name} height={props.height} weight={props.weight} types={props.types} abilities={props.abilities} img={props.img} />);

    it('includes Pokemon height',() =>{
        expect(wrapper.find('li').at(0).text()).toBe(`Height: ${props.height}`);
    });

    it('includes Pokemon weight',() =>{
        expect(wrapper.find('li').at(1).text()).toBe(`Weight: ${props.weight}`);
    });

    it('includes Pokemon Type(s)',() =>{
        var typeArr: any = [];
        props.types.map(type => typeArr.push(type.type.name))

        var typeStr = '';
        typeArr.forEach((type: string) => typeStr += `${type} `)

        expect(wrapper.find('li').at(2).text()).toBe(`Type(s): ${typeStr}`);
    });

    it('includes Pokemon Abilities(s)',() =>{
        var abilitiesArr: any = [];
        props.abilities.map(ability => abilitiesArr.push(ability.ability.name))

        var abilityStr = '';
        abilitiesArr.forEach((ability: string) => abilityStr += `${ability} `);

        expect(wrapper.find('li').at(3).text()).toBe(`Abilities: ${abilityStr}`);
    });
});