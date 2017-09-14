import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemonIndexItems = this.props.pokemon.map((poke, idx) => (
      <PokemonIndexItem key={idx} poke={poke} />
    ));

    return (
      <ul>
        {pokemonIndexItems}
      </ul>
    );
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
