import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from './actionTypes';
let lastId = 0;
// function reducer(state = [], action) {
//     if(action.type === 'bugAdded') {
//         return [
//             ...state,
//             {
//                 id: ++lastId;
//                 description: action.payload.description,
//                 resolved: false
//             }
//         ]
//     }
//     else if (action.type === 'bugRemoved')
//         return state.filter(bug => bug.id !== action.payload.id);
//
//     return state;
// }

export default function bugReducer(state = [], action) {
    switch(action.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]

        case BUG_RESOLVED:
            // const updatedState = state.map(bug => {
            //     if(bug.id === action.payload.id) {
            //         bug.resolved = true;
            //     }
            //     return bug;
            // })
            // console.log(updatedState)
            // return updatedState;
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true })

        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);

        case 'bugIsFun':
            return [
                ...state,
                {
                    msg: 'Yahoo koi mujhe jangli kahe'
                }
            ]

        default:
            return state;
    }
}