import * as actions from './actionTypes';

export default function reducer(state = [], action) {
    switch(action.type) {
        case actions.ADD_POST:
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    post: action.payload.post,
                    isPublished: action.payload.isPublished
                }
            ];

        case actions.UPDATED_POST:
            return state.map(post => post.id !== action.payload.id ? post : { ...post, ...action.payload });

        default:
            return state;
    }
}