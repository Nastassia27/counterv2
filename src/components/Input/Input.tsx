import {ChangeEvent} from "react";

type InputPropsType = {
    value: string | number;
    onChange: (e: number) => void;
    className?: string;
    type: string;
    max?: number;
    min?: number;
}

const Input = (props: InputPropsType ) => {
    const onChangeHandler=(e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber;
        props.onChange(value);
    }

    return (
        <input className={props.className}
               onChange={onChangeHandler}
               type={props.type}
               max={props.max}
               min={props.min}
               value={props.value}
        ></input>
    )
}

export default Input