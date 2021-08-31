/**
 * Author Shashi Bhagat
 */
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer'
import postReducer from './postReducer';

// export const postStore = createStore(reducer);

export default configureStore({ reducer: postReducer });

