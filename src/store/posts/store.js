import { createStore } from 'redux';
import reducer from './reducer';

const postStore = createStore(reducer);

export default postStore;
