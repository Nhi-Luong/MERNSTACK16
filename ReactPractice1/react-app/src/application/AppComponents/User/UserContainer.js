import User from "./UserComponent";

import {connect} from "react-redux"

import {AddUserToStore, saveUserToDB} from "../../../state/User/UserAction"

let mapstateToProps = (store)=>{
    return {
       User : store.userReducer.User 
    }
}

let mapdispatchToProps = (dispatch)=>{
    return {
        AddUser : (newUser)=>{ 
            dispatch(AddUserToStore(newUser)) 
        },
        SignIn : (newUser)=>{
            dispatch(saveUserToDB(newUser))
        }
    }
}

export default connect(mapstateToProps, mapdispatchToProps)(User)