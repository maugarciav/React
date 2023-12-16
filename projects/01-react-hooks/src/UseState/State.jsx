import React , { useState } from "react";

const State = () => {
    const [cont, setCont] = useState(0)

    const add = () =>{
        setCont(cont + 1);
    }
    const rest = () =>{
        setCont(cont - 1);
    }
    const reset = () =>{
        setCont(0);
    }

    return (
        <>
            <div>{cont}</div>
            <button onClick={add} >add</button>
            <button onClick={rest} >rest</button>
            <br/>
            <button onClick={reset} >reset</button>
        </>
    )
}

export default State