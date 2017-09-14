import APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receivePoke = ({ pokemon, items }) => {
  return {
    type: RECEIVE_POKE,
    pokemon,
    items
  };
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.getAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (pokeId) => (dispatch) => (
  APIUtil.getPoke(pokeId)
    .then(acquiredPoke => dispatch(receivePoke(acquiredPoke)))
);
