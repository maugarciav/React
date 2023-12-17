import React, {useRef, useState} from "react";

/*
    Access and manipulate DOM elements
*/

const Ref = () => {
    const [name, setName] = useState("Name ?")
    const inputRef = useRef(null)

    const onClick = () => {
        setName(inputRef.current.value)
        inputRef.current.value = ""
    }

    return (
        <>
            <h1>{name}</h1>
            <input type="text" placeholder="name" ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
        </>


    )
}
export default Ref