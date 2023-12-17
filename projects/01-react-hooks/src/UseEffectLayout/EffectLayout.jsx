import React, { useLayoutEffect, useEffect, useRef} from "react";

/*
    Pitfall:  useLayoutEffect can hurt performance. Prefer useEffect when possible. :(  (React Documentation)

    Version of useEffect that fires before the browser repaints the screen.
*/

const EffectLayout = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    return (
        <div className="App">
            <input ref={inputRef} value="Mau"  />
        </div>
    );
}
export default EffectLayout