import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from './middleware/logger'
import func from './middleware/func'
import toast from './middleware/toast'

export default configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger({apple: 'console'}), func, toast]
})