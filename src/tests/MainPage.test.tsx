import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import MainPage from '../MainPage';
import MockAdapter from 'axios-mock-adapter';
import { act, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

const mockAxios = {
    get: jest.fn(() => Promise.resolve({ 
        data: {
            id: 132,
            name: "ditto",
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            }
        }
    }))
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPage />, div);
});

it('shallow renders without crashing', () => {
  shallow(<MainPage />);
});

const PokemonList = new Array(
    "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie",
    "Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate",
    "Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina",
    "Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff",
    "Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett",
    "Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag",
    "Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell",
    "Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro",
    "Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder",
    "Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb",
    "Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing",
    "Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie",
    "Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto",
    "Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl"
    ,"Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew");

describe('MainPage', () => {
    it('should display all 151 pokemon', async () => {
        mockAxios.get.mockImplementationOnce(() => Promise.resolve({
            data: {
                id: 132,
                name: "ditto",
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                }
            }
        }))

        //const component = mount(<MainPage />);
        //console.log('comp', component);
        //const images = await MainPage();
        //console.log('images', images);

        // // mock axios promise
        // let wrapper = mount(<MainPage />);
        // await act(async () => {
        //     await mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        //         data: {
        //             id: 132,
        //             name: "ditto",
        //             sprites: {
        //                 front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        //             }
        //         }
        //     }));
        //     wrapper = mount(<MainPage />);
        // });
  
        // check the render output
        // wrapper.update();

        // const tree = renderer
        // .create(<MainPage />);
        // await Promise.resolve();
    })
})