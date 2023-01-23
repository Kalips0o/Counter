import {Display} from "./Display";
import React from "react";

import {Buttons} from "./Buttons";
import {ErrorDisplay} from "./ErrorDisplay";

export type WrapperPropsType = {
    enlargeCounter: () => void
    resetCounter: (currentStartValue: number) => void
    counter: number
    maxValue: number
    errorCondition: boolean
    startValue: number
    isDisabled: boolean
}

export function Wrapper(props: WrapperPropsType) {

    return (
        <div className={"Wrapper"}>
            <div className={"header"}>
                {props.errorCondition ?
                    <ErrorDisplay/> :
                    <Display counter={props.counter}
                             isDisabled={props.isDisabled}
                             maxValue={props.maxValue}/>
                    }
            </div>
            <div>
                <Buttons enlargeCounter={props.enlargeCounter}
                         resetCounter={props.resetCounter}
                         maxValue={props.maxValue}
                         counter={props.counter}
                         errorCondition={props.errorCondition}
                         startValue={props.startValue}
                         isDisabled={props.isDisabled}
                />
            </div>

        </div>
    )
}
