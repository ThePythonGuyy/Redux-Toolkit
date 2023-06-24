import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numOfIceCream: 20,
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCream -= action.payload
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
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCream--
        })
    }

})

export default iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions 