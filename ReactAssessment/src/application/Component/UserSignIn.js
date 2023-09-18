import React, {Component} from "react";

export default class SignIn extends Component{
    constructor(props){
        super(props);
        this.userNameRef = React.createRef();
        this.passwordRef = React.createRef();
        
    }
    formSubmit=(evt)=>{
        let userName = this.userNameRef.current.value;
        let password = this.passwordRef.current.value;
        alert(userName+password)
        evt.preventDefault();
    }
    render(){
        return(
            <>
            <h2>Sign In Form</h2>
            <form onSubmit={this.formSubmit}>
                <div>
                    <label>User Name:</label>
                    <input type="text" className="form-control" ref={this.userNameRef}></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" className="form-control" ref={this.passwordRef}></input>
                </div>
                <button type="submit">submit</button>
            </form>
            </>
        )

    }
}