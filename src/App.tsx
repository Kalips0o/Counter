import React, {useEffect, useState} from 'react';
import './App.css';
import {Wrapper} from "./Wrapper";
import {Settings} from "./Settings";


function App() {
    let [startValue, setStartValue] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(5);
    let [counter, setCounter] = useState<number>(startValue);
    let [isDisabled, setIsDisabled] = useState<boolean>(false);

    useEffect(() => {
        let startValueAsString = localStorage.getItem("startCounterValue");
        if (startValueAsString) {
            let newValue = JSON.parse(startValueAsString);
            setStartValue(newValue)// сохряняем startValue в localStorage
        }
        let maxValueAsString = localStorage.getItem("maxCounterValue");
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString);
            setMaxValue(newMaxValue);
        }
        /*let counterValue = localStorage.getItem("counterValue");
        if(counterValue){
            let newCounterValue = JSON.parse(counterValue);
            setCounter(newCounterValue);
        }*/
    }, [])
    useEffect(() => {
        localStorage.setItem("startCounterValue", JSON.stringify(startValue));
        localStorage.setItem("maxCounterValue", JSON.stringify(maxValue));
        //localStorage.setItem("counterValue", JSON.stringify(counter));
    }, [startValue, maxValue, counter])

    let errorCondition = (startValue < 0 || maxValue < 0
        || startValue > maxValue
        || startValue === maxValue);


    let enlargeCounter = () => {
        setCounter(counter => counter + 1);
    }

    let resetCount = (currentStartValue: number) => {
        setCounter(currentStartValue)
        localStorage.clear();
    }

    let disableButton = () => {
        setIsDisabled(true)
    }
    let setStartCounterValue = (currentStartValue: number) => {
        setStartValue(currentStartValue)
        setIsDisabled(false)

    }
    let setMaxCounterValue = (currentMaxValue: number) => {
        setMaxValue(currentMaxValue)
        setIsDisabled(false)
    }
    let equalizeCounter = (currentStartValue: number) => {
        setCounter(currentStartValue) //уравниваем значения startValue и counter

    }

    return (
        <div className={"App"}>
            <Wrapper enlargeCounter={enlargeCounter}
                     resetCounter={resetCount}
                     counter={counter}
                     maxValue={maxValue}
                     startValue={startValue}
                     errorCondition={errorCondition}
                     isDisabled={isDisabled}/>
            <Settings setStartCounterValue={setStartCounterValue}
                      maxValue={maxValue}
                      setMaxCounterValue={setMaxCounterValue}
                      startValue={startValue}
                      errorCondition={errorCondition}
                      equalizeCounter={equalizeCounter}
                      disableButton={disableButton}
                      isDisabled={isDisabled}/>

        </div>

    );
}

export default App;





