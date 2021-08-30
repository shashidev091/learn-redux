import { configureStore } from '@reduxjs/toolkit'
import { userReducer as reducer } from './reducers';

const userStore = configureStore({ reducer });
export default userStore;
