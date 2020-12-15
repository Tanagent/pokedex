import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PokemonDetails from './PokemonDetails';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/:pokemonId' component={PokemonDetails} />
      </Switch>
    </Router>
  );
}

export default App;
