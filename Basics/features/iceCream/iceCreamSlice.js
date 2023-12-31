const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numOfIceCream: 20,
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream--
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    // This method is also possible but not recommended
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCream--
    //     }
    // }

    //Recommended method
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIceCream--
        })
    }

})

module.exports.iceCreamReducer = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions 