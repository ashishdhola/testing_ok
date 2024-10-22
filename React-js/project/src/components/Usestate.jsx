import React, { useState } from 'react';
function Usestate() {
    let [count, setCount] = useState(0);
    function inc() {
        setCount(
            count + 1
        )
    }

    function dec() {
        setCount(
            count - 1
        )
    }

    return (
        <>
            <button onClick={inc} style={{ margin: "40px", padding: "30px" }}>+</button>
            <div style={{ marginLeft: "70px" }}>{count}</div>
            <button onClick={dec} style={{ margin: "40px", padding: "30px" }}>-</button>
        </>
    );
}

export default Usestate;