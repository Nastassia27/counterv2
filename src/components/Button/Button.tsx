type ButtonPropsType = {
    title: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler=() => {
        props.onClick();
    }

    return (
        <button disabled={props.disabled} className={props.className} onClick={onClickHandler}>{props.title}</button>
    )
}

export default Button