import { Map } from 'immutable';
import { produce } from 'immer';

import store from './store';
import { BUG_RESOLVED } from './actionTypes';
import { bugAdded, bugResolved } from './actions';

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
})

console.log(store.getState());