import React from 'react';
import { useState } from 'react';
function Usestate() {

    const [color, setColor] = useState();
    const [count, setCount] = useState(0);

    const toggle = () => {
        setColor(color === 'rebeccapurple' ? 'seagreen' : 'rebeccapurple');
        setCount(count + 1);
    };

    return (
        <>
            <div>
                <div style={{
                    backgroundColor: color, color: 'white', width: 100, height: 100, borderColor: 'black', borderWidth: '1px', borderStyle: 'solid', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    {count}
                </div>
                <button onClick={toggle}>Toggle Color</button>
            </div>
        </>
    );
}

export default Usestate;