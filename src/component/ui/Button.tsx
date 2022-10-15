import React from 'react';
import './Button.css'
type ButtonType={
    callback:()=>void
    children: JSX.Element
    disabled?:boolean
    style:string

}

const Button = (props:ButtonType) => {
    const {callback,children,disabled,style}=props


    return (
        <button className={style} onClick={()=>callback()} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;