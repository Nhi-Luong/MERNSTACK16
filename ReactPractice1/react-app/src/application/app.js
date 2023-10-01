import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import "./app.css"

import Header from "./CommonComponents/HeaderComponent";
import UserContainer from "./AppComponents/User/UserContainer";
import ProductHook from "./AppComponents/Product/ProductHook";

export default class Application extends Component {
    render(){
        return(
            <Router>
                <Header/>
                <Routes>
                    <Route path="/user" element={<UserContainer/>}/>
                    <Route path="/product" element={<ProductHook/>}/>
                </Routes>
            </Router>
        )
    }
}