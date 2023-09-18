import React, {Component} from "react";

import ChildSuccess from "./Component/successChild";
import StorySuccess from "./Component/successStory";
import SignIn from "./Component/UserSignIn";

export default class Application extends Component{
    constructor(props){
        super(props)
        this.state={
            randomValue: null
        }
    }
    renderSuccessStory() {
        return <StorySuccess/>
    }

    getDataFromChild=(data)=>{
        this.setState({
            randomValue:data
        })
    }
    
    render(){
        return(
            <>
                <h1>Success File</h1>
                <h4>Failure is the mother of success</h4>
                <hr/>
                <ChildSuccess name={"Nhi Luong"} address={"USA"} renderSuccess = {this.renderSuccessStory}>
                </ChildSuccess>
                <StorySuccess callBackFunc={this.getDataFromChild}/>
                <SignIn/>
                <hr/>
                <h4>Random Value From successStory: {this.state.randomValue}</h4>
            </>
        )
    }
}