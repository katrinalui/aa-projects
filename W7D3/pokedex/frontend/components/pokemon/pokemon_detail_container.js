import {connect} from 'react-redux';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => ({
  pokemon: state.entities.pokemon.current,
  items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});

export const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
