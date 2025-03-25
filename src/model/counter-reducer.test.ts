import {
    changeMaxValueAC,
    changeStartValueAC,
    counterReducer,
    increaseValueAC,
    initialStateType, resetValueAC,
    setNumbersAC
} from "./counter-reducer";

export let startState: initialStateType = {
    startValue: 0,
    startValueFix: 0,
    maxValue: 0,
    maxValueFix: 0,
    resultValue: 0,
    isClicked: false
}

beforeEach(() => {
    startState = {
        startValue: 0,
        startValueFix: 0,
        maxValue: 0,
        maxValueFix: 0,
        resultValue: 0,
        isClicked: false
    }
})

test('change max value', () => {
    const endState = counterReducer(startState, changeMaxValueAC({number: 2}))

    expect(endState).toEqual({
        startValue: 0,
        startValueFix: 0,
        maxValue: 2,
        maxValueFix: 0,
        resultValue: 0,
        isClicked: false
    })
})

test('change start value', () => {
    const endState = counterReducer(startState, changeStartValueAC({number: 3}))

    expect(endState).toEqual({
        startValue: 3,
        startValueFix: 0,
        maxValue: 0,
        maxValueFix: 0,
        resultValue: 0,
        isClicked: false
    })
})
test('set number', () => {

    let maxNew=startState.maxValue = 5
    let startNew = startState.startValue = 6
    const endState = counterReducer(startState, setNumbersAC())

    expect(endState).toEqual({
        startValue: startNew,
        startValueFix: startNew,
        maxValue: maxNew,
        maxValueFix: maxNew,
        resultValue: startNew,
        isClicked: true
    })
})

test('increase value', () => {
    const newValue = startState.resultValue + 1
    const endState = counterReducer(startState, increaseValueAC())

    expect(endState).toEqual({
        startValue: 0,
        startValueFix: 0,
        maxValue: 0,
        maxValueFix: 0,
        resultValue: newValue,
        isClicked: false
    })
    expect(endState.isClicked).not.toBe(true)
    expect(endState.resultValue).toBe(1)
})

test('reset value', () => {
    startState.startValueFix=5
    const endState = counterReducer(startState, resetValueAC())


    expect(endState.isClicked).not.toBe(true)
    expect(endState.startValueFix).toBe(5)
    expect(endState.resultValue).toBe(5)
})

