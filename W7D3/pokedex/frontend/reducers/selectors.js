import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon.index);
};

export const selectPokemonItem = (state, itemId) => {
  if (state.entities.items[itemId]) {
    return state.entities.items[itemId];
  }
  return {};
};
