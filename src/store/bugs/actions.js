import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from './actionTypes';
// export function bugAdded(description) {
//     return {
//         type: 'bugAdded',
//         payload: {
//             description: 'funny bug'
//         }
//     }
// }

export const bugAdded = description => ({
    type: BUG_ADDED,
    payload: {
        description
    }
})

export const bugResolved = id => ({
    type: BUG_RESOLVED,
    payload: {
        id
    }
})