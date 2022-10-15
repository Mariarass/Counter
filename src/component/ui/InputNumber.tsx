import React from 'react';
import './InputNumber.css'
type InputNumberType={
    value:number
    setValue:(value:string)=>void
    callback?:()=>void
    style:string
}

const InputNumber = (props:InputNumberType) => {
    const {value,setValue,style}=props

    return (
        <input value={value}
               onChange={(event) => setValue(event.target.value)}
               type={'number'}
               className={style}/>

    );
};

export default InputNumber;