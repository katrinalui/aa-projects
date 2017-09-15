import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {index: {}, current: {}}, action) => {
  Object.freeze(state);
  const stateCopy = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      stateCopy.index = action.pokemon;
      return stateCopy;
    case RECEIVE_POKE:
      stateCopy.current = action.pokemon;
      return stateCopy;
    default:
      return state;
  }
};

export default pokemonReducer;
