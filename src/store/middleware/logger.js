const logger = param => store => next => action => {
    console.log('param', param)
    console.log('store', store)
    console.log('next', next)
    console.log('action', action)
    next(action)
}

export default logger;

// store has getState() and dispatch()