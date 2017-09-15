// import { RECEIVE_ITEMS } from '../actions/item_actions';
import { RECEIVE_POKE } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKE:
      return action.items;
    default:
      return state;
  }
};

export default itemsReducer;
