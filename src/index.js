import { Map } from 'immutable';
import { produce } from 'immer';

import store from './store';

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

store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'funny bug'
    }
});

unSubscribe();

store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
})

console.log(store.getState());