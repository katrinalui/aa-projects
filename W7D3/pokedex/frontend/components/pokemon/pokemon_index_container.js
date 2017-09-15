import {connect} from 'react-redux';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';
import {selectAllPokemon} from '../../reducers/selectors';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export const PokemonIndexContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonIndex));
