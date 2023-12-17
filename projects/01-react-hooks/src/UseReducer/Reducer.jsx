import React, { useReducer } from "react";

/*
Alternative to useState, useful in complex states -> not really important for begginers
*/


const reducer = (state, action) => {
    switch (action.type){
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText}
        case "toggleShowText":
            return {count: state.count , showText: !(state.showText)}
        deafult:
            return state
        }
}

const Reducer = () => {
    const [state, dispatch] =  useReducer(reducer, 
        {
            count: 0,
            showText: true
        })


    return (
        <>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({type: "toggleShowText"})
                    dispatch({type: "INCREMENT"})
                }}
            >
                Click here
            </button>

            {state.showText && <p>Hello world</p>}
        </>
    )
}

export default Reducer

