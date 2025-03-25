import {createAction, createReducer} from "@reduxjs/toolkit";

type initialStateType = {
    startValue: number,
    startValueFix: number,
    maxValue: number,
    maxValueFix: number,
    resultValue: number,
    isClicked: boolean
}

const initialState: initialStateType = {
    startValue: 0,
    startValueFix: 0,
    maxValue: 0,
    maxValueFix: 0,
    resultValue: 0,
    isClicked: false
}
export const changeMaxValueAC = createAction<{ number: number }>('counter/changeMaxValue');
export const changeStartValueAC = createAction<{ number: number }>('counter/changeStartValue');
export const setNumbersAC = createAction('counter/setNumbers');
export const increaseValueAC = createAction('counter/increaseValue');
export const resetValueAC = createAction('counter/resetValue');

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeMaxValueAC, (state, action) => {
            state.maxValue = action.payload.number
            state.isClicked = false;
        })
        .addCase(changeStartValueAC, (state, action) => {
            state.startValue = action.payload.number
            state.isClicked = false;
        })
        .addCase(setNumbersAC, (state, action) => {
            state.startValueFix = state.startValue
            state.maxValueFix = state.maxValue
            state.resultValue = state.startValue
            state.isClicked = true;
        })
        .addCase(increaseValueAC, (state, action) => {
            const newValue = state.resultValue + 1
            state.resultValue = newValue
        })
        .addCase(resetValueAC, (state, action) => {
            state.resultValue = state.startValueFix
        })
})