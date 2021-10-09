import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement(state) {
            state.count > 0 ? state.count -= 1 : state
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer