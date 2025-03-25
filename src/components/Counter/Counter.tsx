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


const Counter = () => {
   /* const todolists = useSelector<RootState, Todolist[]>(state => state.todolists)
    const tasks = useSelector<RootState, TasksState>(state => state.tasks)*/

    const counter = useSelector<RootState>(state => state.counter);
    const dispatch = useDispatch()
    /*const [startValue, setStartValue] = React.useState<number>(0);
    const [startValueFix, setStartValueFix] = React.useState<number>(0);

    const [maxValue, setMaxValue] = React.useState<number>(0);
    const [maxValueFix, setMaxValueFix] = React.useState<number>(0);

    const [resultValue, setResultValue] = React.useState<number>(0);

    const [isClicked, setIsClicked] = React.useState<boolean>(false);*/

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
            <SetValues maxValue={maxValue}
                       startValue={startValue}
                       changeMaxValue={onChangeMaxValueHandler}
                       changeStartValue={onChangeStartValueHandler}
                       setNumbers={setNumbersHandler}
                       isClicked={isClicked}

            />
            <ShowResults resultValue={resultValue}
                         increaseValue={increaseValueHandler}
                         resetValue={resetValueHandler}
                         maxValue={maxValue}
                         startValue={startValue}
                         isClicked={isClicked}
            />
        </div>
    );
}


export default Counter;
