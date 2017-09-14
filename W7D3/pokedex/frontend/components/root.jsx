import React from 'react';
import { Provider } from 'react-redux';
import {PokemonIndexContainer} from './pokemon/pokemon_index_container';
import {PokemonDetailContainer} from './pokemon/pokemon_detail_container';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/" component={PokemonIndexContainer} />
        <Route path="/:pokeId" component={PokemonDetailContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
