import React, { Component } from "react";
import { connect } from "react-redux";//require react UI and mapstateToProps and mapDispatchToProps
import { AddUserToStore } from "../../../state/User/UserAction";

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName : props.User.userName,
            password : props.User.password,
            street : props.User.street,
            mobile : props.User.mobile
        }
    }
    onTextChange=(evt)=>{
        let target = evt.target;
        let classList = target.classList;
        let value = target.value;

        if(classList.contains("username")){
            this.setState({
                userName : value
            })
        }else if (classList.contains("pass")) {
            this.setState({
                password : value
            })
        } else if (classList.contains("street")) {
            
            this.setState({
                street : value
            })
        } else {
            this.setState({
                mobile : value
            })
        }    
    }
    loginUser = (evt)=>{
        this.props.SignIn(this.state)
        evt.preventDefault()
    }

    //change html values adrer initialization.
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                userName : "hello"
            })
        },3000)
    }

    //decide whether render should happen or not
    //Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState);
        if(nextState.userName === this.state.userName){
            return false;
        } else{
            return true;
        }
    }

    //before each update, getSnapshotBeforeUpdate() will capture the state before render
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // This method is called before the component's update is committed to the DOM
        // It can capture some information from the DOM
        console.log("getSnapshotBeforeUpdate");
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        return "snapshot data";
      }

      // this method work same as getSnapShot  with the extra information after snapshot,
      // it will execute after each update
      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component updated");
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        console.log("snapshot", snapshot);
      }


    render(){
        return(
            <>
            {console.log("renderring...")}
            <h1>User Login Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username"
                        value={this.state.userName} 
                        placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
                    </div>
                    <div className="col-md-12">
                        <b>Password</b>
                        <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                        placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                    </div>

                    <div className="col-md-12">
                        <b>Street </b>
                        <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                        placeholder="Street Name" onChange={this.onTextChange} />
                        </div>
                            
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                        placeholder="Mobile" maxLength="11"
                        onChange={this.onTextChange} />
                    </div>

                    <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                        value={"SignIn-Up"} 
                                        onClick={this.loginUser}/>
                </div>

            </section>
            </>
        )
    }
}

export default User;