import React, {useLayoutEffect, useRef, useState} from 'react';

import s from "../Set.module.css";
import Button from "../ui/Button";
import InputNumber from "../ui/InputNumber";

type EditType = {
    setMaxMain: (value: number) => void
    setMinMain: (value: number) => void
    error: string
    setError: (value: string) => void
    setCount: (value: number) => void
    editMode: boolean
    setEditMode: (value: boolean) => void


}

const Edit = (props: EditType) => {
    const {error, setError, setMinMain, setMaxMain, setCount, editMode, setEditMode} = props


    const [maxValue, setMaxValue] = useState(5)
    const [minValue, setMinValue] = useState(0)

    const firstUpdate = useRef(true);

    useLayoutEffect(() => {

        if (firstUpdate.current) {
            firstUpdate.current = false;
            return

        }

        maxValue >= 0 && maxValue > minValue && minValue >= 0 && minValue < maxValue
            ? setError('enter value and press "set" ')
            : setError('incorrect value')

    },[maxValue, minValue]);

    const changeValue = (event: string, max: string) => {
        max === 'max'
            ? setMaxValue(+event)
            : setMinValue(+event)

        setEditMode(true)
    }


    const changeSet = () => {
        setError('')
        setMaxMain(maxValue)
        setMinMain(minValue)
        setCount(minValue)
        setEditMode(false)

    }


    const styleMax = maxValue >= 0 && maxValue > minValue ? s.input : s.inputError
    const styleMin = minValue >= 0 && minValue < maxValue ? s.input : s.inputError


    return (
        <div className="App">
            <div className='appContainer'>
                <div className='tabloContainer'>

                    <div className={s.container}>
                        <p>max value </p>
                        <InputNumber value={maxValue} setValue={(event) => changeValue(event, 'max')} style={styleMax}/>
                    </div>

                    <div className={s.container}>
                        <p>min value </p>
                        <InputNumber value={minValue} setValue={(event) => changeValue(event, 'min')} style={styleMin}/>
                    </div>
                </div>


                <div className='buttonContainer'>
                    <Button callback={() => changeSet()} disabled={!editMode || error === 'incorrect value'}
                            style={'default'}>
                        <p>set</p>
                    </Button>
                </div>





            </div>

        </div>
    );
};

export default Edit;