import React, {useEffect} from 'react';
import SetValues from "../SetValues/SetValues";
import ShowResults from "../ShowResults/ShowResults";
import './counter.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {
    changeMaxValueAC,
    changeStartValueAC,
    increaseValueAC,
    resetValueAC,
    setNumbersAC
} from "../../model/counter-reducer";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {useAppSelector} from "../../common/hooks/useAppSelector";


const Counter = () => {

    const counter = useAppSelector(state => state.counter);
    const dispatch = useAppDispatch()

   /* useEffect(() => {
        let startValueString = localStorage.getItem('startValue');
        startValueString ? setStartValue(JSON.parse(startValueString) as number) : setStartValue(startValue)

        let maxValueString = localStorage.getItem('maxValue');
        maxValueString ? setMaxValue(JSON.parse(maxValueString) as number) : setMaxValue(maxValue)

        let isClickedString = localStorage.getItem('isClicked');
        isClickedString ? setIsClicked(JSON.parse(isClickedString)) : setIsClicked(isClicked)

        let resultValueString = localStorage.getItem('resultValue');
        resultValueString ? setResultValue(JSON.parse(resultValueString)) : setResultValue(resultValue)

    }, []);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('resultValue', JSON.stringify(resultValue))
        localStorage.setItem('isClicked', JSON.stringify(isClicked))
    }, [startValue, maxValue, resultValue, isClicked])*/


    const onChangeMaxValueHandler = (number: number) => {
      dispatch(changeMaxValueAC({number: number}))
    }

    const onChangeStartValueHandler = (number: number) => {
       dispatch(changeStartValueAC({number: number}))
    }
    const setNumbersHandler = () => {
       dispatch(setNumbersAC())
    }
    const increaseValueHandler = () => {
       dispatch(increaseValueAC())
    }

    const resetValueHandler = () => {
       dispatch(resetValueAC())
    }
    return (
        <div className="container">
            <SetValues maxValue={counter.maxValue}
                       startValue={counter.startValue}
                       changeMaxValue={onChangeMaxValueHandler}
                       changeStartValue={onChangeStartValueHandler}
                       setNumbers={setNumbersHandler}
                       isClicked={counter.isClicked}

            />
            <ShowResults resultValue={counter.resultValue}
                         increaseValue={increaseValueHandler}
                         resetValue={resetValueHandler}
                         maxValue={counter.maxValue}
                         startValue={counter.startValue}
                         isClicked={counter.isClicked}
            />
        </div>
    );
}


export default Counter;
