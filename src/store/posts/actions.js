import { ADD_POST, REMOVE_POST, UPDATED_POST } from './actioinTypes';

export const postAdded = post => ({
    type: ADD_POST,
    paylaod: {
        post
    }
});

export const updatePost = post => ({
    type: UPDATED_POST,
    payload: {
        post
    }
});