import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';


const configureStore = () => createStore(rootReducer); //returns a function that calls createStore(rootReducer)


export default configureStore;
