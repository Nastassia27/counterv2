import Button from "../Button/Button";
import React from "react";
import './showResults.css'

type ShowResultsProps = {
    resultValue: number;
    increaseValue: () => void;
    resetValue: () => void;
    maxValue: number;
    startValue: number
    isClicked: boolean
}

const ShowResults = (props: ShowResultsProps) => {

    const increaseValueHandler = () => {
        props.increaseValue()
    }

    const resetValueHandler = () => {
        props.resetValue()
    }
    const showText = () => {
        if (props.startValue < 0 || props.maxValue < 0 || (props.startValue >=props.maxValue && props.isClicked)) {
            return <p style={{color: 'red'}}>Incorrect value!</p>
        } else if(!props.isClicked){
            return 'Enter values and press \'set\''
        } else{
            return props.resultValue
        }
    }

    return (
        <div className='show-results'>
            <div className={props.resultValue === props.maxValue && props.isClicked ? 'show-results-max' : 'show-results-numbers'}>
                {showText()}
            </div>
            <div className={'show-results-buttons'}>
                <Button title={'inc'} onClick={increaseValueHandler} disabled={props.resultValue >= props.maxValue || !props.isClicked}/>
                <Button title={'reset'} onClick={resetValueHandler} disabled={!props.isClicked}/>
            </div>
        </div>
    )
}
export default ShowResults