import React from "react";

let StorySuccess = (props)=>{
    const generateRandomValue = () => {
        const randomValue = Math.floor(Math.random() * 100) + 1
        props.callBackFunc(randomValue)
      }
    return(
        <>
            <h2>Success Story</h2>
            <button onClick={generateRandomValue}>Generate Random Value</button>
        </>
    )
}

export default StorySuccess;