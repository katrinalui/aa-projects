import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import { Route, Link } from 'react-router-dom';
import values from 'lodash/values';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = values(this.props.items).map((item, idx) => {
      return (
        <Link key={idx} to={`/pokemon/${this.props.pokemon.id}/items/${item.id}`}>
          <img src={item.image_url} width="75"/>
        </Link>
      );
    });

    return (
      <div className="pokedisplay">
        <img src={this.props.pokemon.image_url} height="200" />
        <h2>{this.props.pokemon.name}</h2>
        <ul>
          <li>Type: {this.props.pokemon.poke_type}</li>
          <li>Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>Moves: {this.props.pokemon.moves ? this.props.pokemon.moves.join(", ") : ""}</li>
        </ul>
        <div className="pokemon-items">
          {items}
          <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    const newPokemonId = newProps.match.params.pokemonId;
    const oldPokemonId = this.props.match.params.pokemonId;
    if (newPokemonId !== oldPokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }
}

export default PokemonDetail;
