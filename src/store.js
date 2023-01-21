import { createStore } from 'redux';
import reducer from './services/reducers/reducer';

const store = createStore(reducer);

export default store;
