import React from "react";


let ChildSuccess = (props)=>{
    return(
        <>
        <h2>From SuccessChild</h2>
        <h4>{props.name}</h4>
        <hr/>
        <h4>{props.address}</h4>
        <hr/>
        Here is render story from SuccessChild: {props.renderSuccess()}
    
        </>
    )
}

export default ChildSuccess;