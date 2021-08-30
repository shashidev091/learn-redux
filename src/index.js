import { Map } from 'immutable';
import { produce } from 'immer';

import store from './store/bugs/store';
import { BUG_RESOLVED } from './store/bugs/actionTypes';
import { bugAdded, bugResolved } from './store/bugs/actions';
import postStore  from './store/posts/store';
import { ADD_POST, REMOVE_POST, UPDATED_POST, FETCHED_POST } from './store/posts/actionTypes';

// let book = Map({ title: "Harry Potter" });
let book = { title: "Harry Potter" };


function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
    // book.isPublished = true;
}


const updatedBook = publish(book);

console.log(updatedBook);

// Immer ==> Library

const unSubscribe = store.subscribe(() => {
    console.log("Store change!", store.getState())
})

store.dispatch(bugAdded('big Bug'));

store.dispatch({
    type: BUG_RESOLVED,
    payload: {
        id: 1
    }
});

store.dispatch({
    type: 'bugIsFun',
});

unSubscribe();

store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
})
store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 2
    }
});

console.log(store.getState());

postStore.dispatch({
    type: ADD_POST,
    payload: {
        id: 1,
        title: 'First post',
        post: 'This is a test post to learn redux once again.',
        isPublished: true
    }
});

postStore.dispatch({
    type: ADD_POST,
    payload: {
        id: 2,
        title: 'Second post',
        post: 'This is a test second post to learn redux once again.',
        isPublished: true
    }
});

postStore.dispatch({
    type: UPDATED_POST,
    payload: {
        id: 2,
        isPublished: false
    }
})

console.log(postStore.getState());