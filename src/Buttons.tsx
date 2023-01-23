import {Button} from "@material-ui/core";
import React from "react";


type ButtonsPropsType={
    enlargeCounter: () => void
    resetCounter: (currentStartValue: number) => void
    maxValue: number
    counter: number
    errorCondition: boolean
    startValue: number
    isDisabled: boolean
}
export function Buttons(props: ButtonsPropsType) {
    let resetCounter = () =>{
        props.resetCounter(props.startValue)
    }
    return (
        <div className={"buttons"}>
                <span className={"button"}>
                    <Button  disabled={props.errorCondition || props.counter === props.maxValue || props.isDisabled }
                            onClick={props.enlargeCounter}
                            color={"primary"}
                            variant={"contained"}
                            size={"small"}
                            disableElevation>inc
                            </Button>
                </span>
            <span className={"button"}>
                    <Button disabled={props.errorCondition|| props.isDisabled}
                        onClick={resetCounter}
                        color={"primary"}
                        variant={"contained"}
                        size={"small"} disableElevation>reset
                        </Button>

                </span>

        </div>
    )
}