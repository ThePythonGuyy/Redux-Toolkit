const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions

console.log('Initial State', store.getState())

const unSub = store.subscribe(() => {
    // console.log("Updated state", store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())

store.dispatch(cakeActions.restocked(1))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(5))

unSub()