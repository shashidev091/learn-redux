import { createStore } from 'redux';
import bugReducer from './bugReducer';

const store = createStore(bugReducer);

export default store;