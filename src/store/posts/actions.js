import { ADD_POST, REMOVE_POST, UPDATED_POST } from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const postAdded = post => ({
    type: ADD_POST,
    paylaod: {
        post
    }
});

// export const updatePost = post => ({
//     type: UPDATED_POST,
//     payload: {
//         post
//     }
// });

export const addPost = createAction(ADD_POST);

export const removePost = createAction(REMOVE_POST);

export const updatePost  = createAction(UPDATED_POST);