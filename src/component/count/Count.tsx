import React from 'react';
import Tablo from "../Tablo";
import Button from "../ui/Button";
import s from "../Set.module.css";
type CountType={
    error:string
    count:number
    editMode:boolean
    changeCount:(rest:boolean)=>void
    maxMain:number
    minMain:number


}

const Count = (props:CountType) => {
    const {error,count,editMode,changeCount,maxMain,minMain}=props
   const style= 'tablo'+' ' +

       (count===maxMain&&'Error')+' '+
       (error==='incorrect value'&&'Error')

    return (

        <div className="App">
            <div className='appContainer'>
                <div className='tabloContainer'>
                    <Tablo  error={error} count={count} style={style}/>
                </div>

                <div className='buttonContainer'>
                    <Button callback={() => changeCount(false)} disabled={count === maxMain||editMode} style={'default'}>
                        <p>inc</p>
                    </Button>

                    <Button callback={() => changeCount(true)} disabled={count === minMain||editMode} style={'default'}>
                        <p>reset</p>
                    </Button>

                </div>

            </div>

        </div>
    );
};

export default Count;