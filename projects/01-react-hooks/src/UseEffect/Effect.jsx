import React,{ useEffect, useState } from "react";
import axios from "axios";

/*
useEffect is a function that gets called when the page re-renders
    Note: when a state change -> re renders happen, so the useEffect would be exectued 
    
    To avoid that, we pass the states we want to update the useEffect with as parameter. 
            --In this case, with count--
*/

const Effect = () => {
    const [data, setData] = useState("")
    const [count, setcount] = useState(0)


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[0].email)
            console.log("Api was called")
        })
    }, [count])


    

    return (
        <>
            <div>hello world</div>
            <h3>{data}</h3>

            <h1>{count}</h1>

            <button 
                onClick={() => {setcount(count + 1)}}>
                Add
            </button>
        
        </>
        
    )

}

export default Effect