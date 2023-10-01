import * as ActionTypes from "../actionTypes"

const Initial_State = {
    User:{
        userName:"",
        password:"",
        address:"",
        mobile:""
    }
}

let userReducer = (state= Initial_State, action)=>{
    switch(action.type){
        case ActionTypes.AddUserToStore:
            return{...state, User : action.payload}

        default:
            return state
    }
}

export default userReducer;