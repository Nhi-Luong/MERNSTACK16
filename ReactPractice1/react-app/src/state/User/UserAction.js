import * as ActionTypes from "../actionTypes"
import axios from "axios"

export const AddUserToStore = (newUser)=>{
    return{
        type : ActionTypes.AddUserToStore,
        payload : newUser
    }
}

export const saveUserToDB = (user)=>{
    return(dispatch)=>{
        axios.post("http://localhost:9000/user/signinup", user).then((savedUser)=>{
            let signinupUser = savedUser.data;
            console.log(signinupUser)
            dispatch(AddUserToStore(signinupUser))
        }).catch((err)=>{
            console.log(err)
        })
    }

}