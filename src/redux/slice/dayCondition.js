import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    conditionData : [],
};

export const dayCondition = createSlice({
    name: 'condition',
    initialState,
    reducers: {
        fetchCondition: (state, action) => {
            // console.log("fetch >>>",action.payload);
            state.conditionData = action.payload;
        },
        updateRate : (state, action) => {
            // console.log("update>>", action.payload);
            const { id, newRate } = action.payload;
            const condition = state.conditionData.find(item => item.id === id);
            if (condition) {
                condition.rate = newRate;
            }
        },
    },
});

export const {fetchCondition, updateRate} = dayCondition.actions;
export default dayCondition.reducer;