import React, { useRef } from "react";
import Button from "./Button";

/*
    Only using in specific set of situations
    Use when you have a component that needs to be invoked from outside
*/

function ImperativeHandle() {
    const buttonRef = useRef(null);
    return (
        <div>
            <button
                onClick={() => {
                buttonRef.current.alterToggle();
                }}
            >
                Button From Parent
            </button>
            <Button ref={buttonRef} />
        </div>
    );
}

export default ImperativeHandle;