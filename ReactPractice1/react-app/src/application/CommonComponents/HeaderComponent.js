import React from "react";
import { NavLink, userNavigate } from "react-router-dom";

import {connect} from "react-redux"

let Header =(props)=>{
    let userName = props.User.userName
    return(
        <>
            <h2>Header Component</h2>
            <h4>Hello {userName + ", "}</h4>
            <div>
                <NavLink to="/user" className="button" activeclassname="success">Login</NavLink>
                <NavLink to="/" className="button" activeclassname="success">Home</NavLink>
                <NavLink to="/product" className="button" activeclassname="success">Product</NavLink>
            </div>
        </>
    )
}

let mapstateToProps = (store)=>{
    return{
        User: store.userReducer.User
    }
}

export default connect(mapstateToProps, null)(Header);