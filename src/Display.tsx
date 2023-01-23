import React from "react";

export type DisplayPropsType = {
    counter: number
    isDisabled: boolean
    maxValue: number
}
export function Display(props: DisplayPropsType) {
        return(
            props.isDisabled ? <div className={"attentionMessage"}>Enter values and press 'set'</div>:
                <div className={props.counter === props.maxValue ? "counterEqualMaxValue" : "defaultDisplay"}>
                    {props.counter}</div>
        )


}