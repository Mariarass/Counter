import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import s from './Set.module.css'
import Button from "./ui/Button";
import {log} from "util";

type SetType = {

    setMax: (value: number) => void
    setMin: (value: number) => void
    error: string
    setError: (value: string) => void
    setCount: (value: number) => void
    editMode: boolean
    setEditMode: (value: boolean) => void
}

const Set = (props: SetType) => {
    const {error, setError,setMin,setMax,setCount,editMode,setEditMode} = props


    const [maxValue, setMaxValue] = useState(5)
    const [minValue, setMinValue] = useState(0)

    const firstUpdate = useRef(true);

    useLayoutEffect(() => {

        if (firstUpdate.current) {
            firstUpdate.current = false;
            return

        }

       maxValue >= 0 && maxValue > minValue && minValue >= 0 && minValue < maxValue
           ? setError('enter ')
           : setError('incorrect value')

    },[maxValue,minValue]);

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>, max: string) => {
        max === 'max'
            ? setMaxValue(+event.target.value)
            : setMinValue(+event.target.value)

        setEditMode(true)
    }


    const changeSet = () => {

        setError('')
        setMax(maxValue)
        setMin(minValue)
        setCount(minValue)
        setEditMode(false)

    }


    const styleMax = maxValue >= 0 && maxValue > minValue ? s.input : s.inputError
    const styleMin = minValue >= 0 && minValue < maxValue ? s.input : s.inputError

    return (
        <div>
            <div className={s.container}>
                <p>max value </p>
                <input value={maxValue}
                       onChange={(event) => changeValue(event, 'max')}

                       type={'number'}
                       className={styleMax}/>

            </div>
            <div className={s.container}>
                <p>min value </p>
                <input value={minValue} onChange={(event) => changeValue(event, 'min')} type={'number'}
                       className={styleMin}/>

            </div>


                <Button callback={() => changeSet()} disabled={!editMode||error==='incorrect value'} style={'default'}>
                    <p>set</p>
                </Button>



        </div>
    );
};

export default Set;