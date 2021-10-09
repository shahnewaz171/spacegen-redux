import { createSlice } from "@reduxjs/toolkit";

const missionsSlice = createSlice({
    name: 'missions',
    initialState: {
        missions: [],
        isLoading: true,
        error: false
    },
    reducers: {
        getMissions: (state, action) => {
            state.missions = action.payload;
            state.isLoading = false;
        },
        getError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
})

export const { startLoading, getMissions, getError } = missionsSlice.actions
export default missionsSlice.reducer