import React, {useState} from 'react';
import './App.css';
import Count from "./component/count/Count";
import Edit from "./component/Edit/Edit";


function App() {
    const [count, setCount] = useState<number>(0)
    const [maxMain, setMaxMain] = useState(5)
    const [minMain, setMinMain] = useState(0)
    const [error, setError] = useState('')
    const [editMode, setEditMode] = useState(false)


    const changeCount = (rest: boolean) => setCount(rest ? minMain : count + 1)


    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>


            <Edit setMaxMain={setMaxMain}
                  setMinMain={setMinMain}
                  error={error}
                  setError={setError}
                  setCount={setCount}
                  editMode={editMode}
                  setEditMode={setEditMode}/>

            <Count error={error}
                   count={count}
                   editMode={editMode}
                   changeCount={changeCount}
                   maxMain={maxMain}
                   minMain={minMain}/>

        </div>
    );
}

export default App;
