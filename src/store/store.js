import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from './middleware/logger'

export default configureStore({
    reducer,
    middleware: [logger]
})