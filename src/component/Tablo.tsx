import React from 'react';
import './Tablo.css'
type TabloType={
    count:number
    style:string
    error:string
}

const Tablo: React.FC<TabloType> = ({count,style,error}) => {
    console.log(count)

    return (
        <div className={style}>
            {error===''?count:error}
        </div>
    );
};

export default Tablo;