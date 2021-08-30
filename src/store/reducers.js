import { combineReducers } from 'redux'
import bugReducer from './bugs/bugReducer';
import postReducer from './posts/postReducer';
import { userReducer } from './users/reducers';

const bugPostReducers = combineReducers({
    bugs: bugReducer,
    posts: postReducer,
});

const rootReducers = combineReducers({
    entities: bugPostReducers,
    auth: userReducer
})

export default combineReducers({
    rootReducer: rootReducers
})
