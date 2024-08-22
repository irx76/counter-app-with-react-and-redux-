import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {  //action name is increment
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;  //payload will be action argument
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;