import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import PokemonDetails from './PokemonDetails';
import MainPage from './MainPage';
import './App.css';

function App() {
  return (
    <Router>
      <Link to="/">
        <button className='home-btn'>
          Home
        </button>
      </Link>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/:pokemonId' component={PokemonDetails} />
      </Switch>
    </Router>
  );
}

export default App;
