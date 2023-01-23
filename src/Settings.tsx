import {Button} from "@material-ui/core";
import React, {ChangeEvent} from "react";


type SettingsPropsType = {
    setStartCounterValue:(currentStartValue:number) => void
    maxValue: number
    setMaxCounterValue: (currentMaxValue: number) => void
    startValue: number
    errorCondition: boolean
    equalizeCounter: (currentStartValue:number) => void
    isDisabled: boolean
    disableButton: () => void
}
export function Settings(props: SettingsPropsType) {

    let setCurrentStartValue = (e:ChangeEvent<HTMLInputElement>) =>{
        props.setStartCounterValue(+e.currentTarget.value) //получаем текущее значние maxValue и синхр стейт
        props.disableButton(); //раздизейблим кнопку при синхризации стейта startValue
    }
    let setCurrentMaxValue = (e:ChangeEvent<HTMLInputElement>) =>{
        props.setMaxCounterValue(+e.currentTarget.value); //получаем текущее значние maxValue и синхр стейт
        props.disableButton(); //раздизейблим кнопку при синхризации стейта maxValue
    }


    let onclickHandler = ()=> {

        props.setStartCounterValue(props.startValue) // синхнизируем стейт startValue
        props.equalizeCounter(props.startValue); //уравниваем значения startValue и counter

    }
    let inputMaxError = props.maxValue < 0 ||
        props.maxValue === props.startValue||
        props.startValue>props.maxValue;
    let inputStartError = props.startValue < 0 ||
        props.maxValue === props.startValue||
        props.startValue>props.maxValue;

    return (
        <div className={"Wrapper"}>
            <div className={"settings"}>
                <div className={"values"}>
                    <div>max value:</div>
                    <div>start value:</div>
                </div>

                <div>
                    <input value={props.maxValue}
                           onChange={setCurrentMaxValue}
                           className={ inputMaxError ? "inputError":"input"}
                           type={"number"}/>
                    <input value={props.startValue}
                           onChange={setCurrentStartValue}
                           className={ inputStartError ? "inputError":"input"}
                           type={"number"}/>
                </div>


            </div>
            <div className={"setButton"}>
                <Button disabled={!props.isDisabled||props.errorCondition}
                        onClick={onclickHandler} color={"primary"}
                        className={"button"}
                        size={"small"}
                        variant={"contained"}>set</Button>
            </div>

        </div>)
}
