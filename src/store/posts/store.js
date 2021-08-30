import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer'
import createReducer from './reducer';

// export const postStore = createStore(reducer);

export const postStore = configureStore({ reducer: createReducer });

