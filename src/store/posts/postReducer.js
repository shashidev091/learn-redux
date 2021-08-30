import { UPDATED_POST, ADD_POST, REMOVE_POST } from './actionTypes';
import { createReducer, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

/**
 * Using createReducer
 */
//  export const postReducer = createReducer([], {
//     addPost: (posts, action) => {
//         posts.push({
//             id: action.payload.id,
//             title: action.payload.title,
//             post: action.payload.post,
//             isPublished: action.payload.isPublished
//         })
//     },
//
//     updatePost: (posts, action) => {
//         // const updatedPosts = posts.map(post => post.id !== action.payload.id ? post : { ...post, ...action.payload });
//         const findIndex = posts.findIndex(post => post.id === action.payload.id);
//         posts[findIndex] = { ...posts[findIndex], ...action.payload};
//     },
//
//     removePost: (posts, action) => {
//         const findIndex = posts.findIndex(post => post.id === action.payload.id);
//         posts.splice(findIndex, 1)
//     },
// });

/**
 * too much boiler plate code
 */

// export default function reducer(state = [], action) {
//     switch(action.type) {
//         case ADD_POST:
//             return [
//                 ...state,
//                 {
//                     id: action.payload.id,
//                     title: action.payload.title,
//                     post: action.payload.post,
//                     isPublished: action.payload.isPublished
//                 }
//             ];
//
//         case UPDATED_POST:
//             return state.map(post => post.id !== action.payload.id ? post : { ...post, ...action.payload });
//
//         case REMOVE_POST:
//             return state.filter(post => post.id !== action.payload.id);
//
//         default:
//             return state;
//     }
// }

/**
 * Using CreateSlice
 */

const slice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost: (posts, action) => {
            posts.push({
                id: action.payload.id,
                title: action.payload.title,
                post: action.payload.post,
                isPublished: action.payload.isPublished
            })
        },

        updatePost: (posts, action) => {
            // const updatedPosts = posts.map(post => post.id !== action.payload.id ? post : { ...post, ...action.payload });
            const findIndex = posts.findIndex(post => post.id === action.payload.id);
            posts[findIndex] = { ...posts[findIndex], ...action.payload};
        },

        removePost: (posts, action) => {
            const findIndex = posts.findIndex(post => post.id === action.payload.id);
            posts.splice(findIndex, 1)
        },
    }
});

export const { addPost, updatePost, removePost } = slice.actions;
export default slice.reducer;

// Selector
// export const selectPublishedPosts = state =>
//     state.rootReducer.entities.posts.filter(post => post.isPublished);

export const selectPublishedPosts = createSelector(
    state => state.rootReducer.entities.posts,
    posts => posts.filter(post => post.isPublished)
)