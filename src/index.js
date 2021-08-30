import { addUser, removeUser } from './store/users/reducers';

import rootStore from './store/store';
import { bugAdded, bugResolved } from './store/bugs/actions';
import { BUG_RESOLVED } from './store/bugs/actionTypes';
import { addPost, removePost, updatePost, selectPublishedPosts } from './store/posts/postReducer';

rootStore.dispatch(bugAdded('big Bug'));

rootStore.dispatch({
    type: BUG_RESOLVED,
    payload: {
        id: 1
    }
});

rootStore.dispatch({
    type: 'bugIsFun',
});

// unSubscribe();

rootStore.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
})
rootStore.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 2
    }
});

console.log(rootStore.getState());

rootStore.dispatch(addPost({
        id: 1,
        title: 'First post',
        post: 'This is a test post to learn redux once again.',
        isPublished: true
}));

// postStore.dispatch();

rootStore.dispatch(addPost({
        id: 2,
        title: 'Second post',
        post: 'This is a test second post to learn redux once again.',
        isPublished: true
    }))

// postStore.dispatch({
//     type: UPDATED_POST,
//     payload: {
//         id: 2,
//         isPublished: false,
//         title: '2nd post'
//     }
// });

rootStore.dispatch(addPost({
        id: 3,
        title: 'Third post',
        post: 'This is a test third post to learn redux once again.',
        isPublished: true
}));

rootStore.dispatch(updatePost({
    id: 3,
    isPublished: false,
    title: '3rd post'
}))

rootStore.dispatch(removePost({ id: 2 }));

console.log(rootStore.getState());

rootStore.dispatch(addUser({
    firstName: 'Shashi',
    lastName: 'Bhagat',
    email: 'skujur871@gmail.com'
}));

rootStore.dispatch(addUser({
    firstName: 'Bhushan',
    lastName: 'Bhagat',
    email: 'skujur873@gmail.com'
}));

rootStore.dispatch(removeUser({id: 1}));

rootStore.dispatch(addUser({
    firstName: 'Shashi',
    lastName: 'Bhagat',
    email: 'skujur871@gmail.com'
}));

console.log(rootStore.getState().rootReducer.auth)

const publishedPosts = selectPublishedPosts(rootStore.getState());
// console.log(publishedPosts)