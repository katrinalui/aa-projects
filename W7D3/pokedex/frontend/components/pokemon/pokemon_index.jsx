import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import {Route} from 'react-router-dom';
import {PokemonDetailContainer} from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemonIndexItems = this.props.pokemon.map((poke, idx) => (
      <PokemonIndexItem key={idx} poke={poke} />
    ));

    if (this.props.pokemon.length === 0) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }

    return (
      <div className="pokedex">
        <ul className="pokemon-index">
          {pokemonIndexItems}
        </ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
