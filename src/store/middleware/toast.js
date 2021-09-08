const toast = store => next => action => {
    if (typeof action === 'error')
        console.log('Tostify', action.payload.message)
    else
        next(action);
}

export default toast;