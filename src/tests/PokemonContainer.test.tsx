import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import PokemonContainer from '../PokemonContainer';
import { MemoryRouter } from 'react-router-dom';

const props = {
    id: 132,
    name: "ditto",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
}

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><PokemonContainer id={props.id} name={props.name} img={props.img} /></MemoryRouter>, div);
    });
    
    it('shallow renders without crashing', () => {
        shallow(<MemoryRouter><PokemonContainer id={props.id} name={props.name} img={props.img} /></MemoryRouter>); 
    });

// describe('Pokemon Container', () => {
//     it('renders without crashing', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<MemoryRouter><PokemonContainer id={props.id} name={props.name} img={props.img} /></MemoryRouter>, div);
//     });
    
//     it('shallow renders without crashing', () => {
//         shallow(<MemoryRouter><PokemonContainer id={props.id} name={props.name} img={props.img} /></MemoryRouter>); 
//     });
//     const wrapper = shallow(<MemoryRouter><PokemonContainer id={props.id} name={props.name} img={props.img} /></MemoryRouter>);

//     it('includes Pokemon name',() =>{
//         console.log('debug',wrapper.debug());
//         expect(wrapper.find('div').at(1)).toBe(props.name);
//     })
// });